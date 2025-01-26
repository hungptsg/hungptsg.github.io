import React from 'react';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { findPageInfo } from '../pages';
import { ReactComponent as NoteIcon } from './svg/note.svg';
import { ReactComponent as TipIcon } from './svg/tip.svg';
import { ReactComponent as ImportantIcon } from './svg/important.svg';
import { ReactComponent as WarningIcon } from './svg/warning.svg';
import { ReactComponent as CautionIcon } from './svg/caution.svg';
import { FloatButton } from 'antd';



SyntaxHighlighter.registerLanguage('tsx', require('react-syntax-highlighter/dist/esm/languages/prism/tsx').default);
SyntaxHighlighter.registerLanguage('csharp', require('react-syntax-highlighter/dist/esm/languages/prism/csharp').default);


const admoAnnos = ['[!note]', '[!tip]', '[!important]', '[!warning]', '[!caution]']
const admoColorSets = [
  [
    'border-color-primary-background',
    '[&>svg]:fill-color-primary-base',
    'text-color-primary-base',
  ],
  [
    'border-color-success-background',
    '[&>svg]:fill-color-success-base',
    'text-color-success-base',
  ],
  [
    'border-color-info-background',
    '[&>svg]:fill-color-info-base',
    'text-color-info-base',
  ],
  [
    'border-color-warning-background',
    '[&>svg]:fill-color-warning-base',
    'text-color-warning-base',
  ],
  [
    'border-color-danger-background',
    '[&>svg]:fill-color-danger-base',
    'text-color-danger-base',
  ],
]
const admoIcons = [<NoteIcon />, <TipIcon />, <ImportantIcon />, <WarningIcon />, <CautionIcon />]
const admoTexts = ['Note', 'Tip', 'Important', 'Warning', 'Caution']

function extractSlug(children: React.ReactNode) {
  let child = React.Children.toArray(children)
  let text = child + '' // assume children is a string, else this break
  let slug = text.toLowerCase().replace(/\W/g, '-')
  return slug
}

export function ContentHolder() {
  const location = useLocation();
  const [markdown, setMarkdown] = useState('');

  // Fetch the markdown file for the current page
  useEffect(() => {
    async function fetchData(file: string) {
      const p = await fetch('./' + file)
        .then(res => {
          // console.log(res);

          return res.text();
        })
        .catch(error => 'Error: ' + error.message);
      setMarkdown(p);
    }
    let fn = findPageInfo(location.pathname)?.fileName;
    if (fn) fetchData(fn);
    else setMarkdown('Page not found');
  }, [location.pathname]);



  return (
    <main id='L_CONT' className='p-8 flex-1 overflow-y-auto h-[calc(100vh-48px)]'>
      {/* <FloatButton.BackTop visibilityHeight={0} /> */}
      {/* // todo: fix float top */}

      <Markdown
        remarkPlugins={[remarkGfm, [remarkToc, { parents: ['root'] }]]}
        rehypePlugins={[rehypeRaw]}
        components={{
          hr: () => <hr className='my-6   border-color-border' />,
          h1: (props) => (
            <h1
              id={extractSlug(props.children)}
              className='text-4xl font-semibold   pb-2   text-color-text'
            >
              {props.children}
            </h1>
          ),
          // todo: move toc to right
          // todo: re-style code block and inline
          h2: (props) => (
            <h2
              id={extractSlug(props.children)}
              className={`text-2xl font-semibold   pb-2 mt-8 mb-3   text-color-text   border-b border-color-border`}
            >
              {props.children}
            </h2>
          ),
          p: (props) => (
            <p className='mt-4 leading-relaxed   text-color-text'>
              {props.children}
            </p>
          ),
          // render code
          code: (props) => {
            const codeContent = props.children?.toString() || '';
            // inline code
            if (props.node?.position?.start.line === props.node?.position?.end.line) {
              return (
                <SyntaxHighlighter
                  language='csharp'
                  style={codeStyle}
                  PreTag={'span'}
                  customStyle={{ margin: 0, padding: '1px 3px' }}
                >
                  {codeContent}
                </SyntaxHighlighter>
              )
            }
            // code block
            else {
              return (
                <div className='rounded-md overflow-hidden   mt-4'>
                  {/* code header */}
                  <div className='flex items-center p-1   bg-color-code-header   text-color-text'>
                    <span className='flex-1   pl-2'>C#</span>
                    {/* nút copy code */}
                    <button
                      className='px-3   hover:bg-color-code-block   border-l'
                      onClick={() => navigator.clipboard.writeText(codeContent)}
                    >
                      Copy
                    </button>
                  </div>
                  {/* code block */}
                  <SyntaxHighlighter
                    language='csharp'
                    style={codeStyle}
                    PreTag={'div'}
                    customStyle={{ margin: 0 }}
                    className='border-x-2 border-b-2 border-color-code-header   rounded-bl-md rounded-br-md'
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              );
            }
          },
          a: (props) => (
            <a
              href={props.href}
              className='text-color-hyperlink  hover:text-color-primary-hover  hover:underline  transition-none'
            >
              {props.children}
            </a>
          ),
          ul: (props) => (
            <ul className='marker:content-["•__"] [&_li]:leading-relaxed   mt-4 ml-8   text-color-text'>
              {props.children}
            </ul>
          ),
          blockquote: (props) => {
            // modify blockquote to support Github admonition
            const modifiedChildren = []

            let colorSet = [
              'border-color-border',
              '[&>svg]:fill-color-text-subtle',
              'text-color-text-subtle',
            ]
            let icon = <NoteIcon />
            let text = 'None'

            // admonition annotation should appear only once in the first p tag
            let removedAdmonitionAnnotation = false

            // loop through p and br tags...
            for (const child of props.children as any[]) {
              // ...if child is p tag...
              if (!removedAdmonitionAnnotation && typeof child === 'object' && child.key.startsWith('p')) {
                let pTag = child as any
                let pc = pTag.props.children as any[]
                // ...and if p tag contains admonition annotation...
                if (typeof pc[0] == 'string' && admoAnnos.includes(pc[0])) {
                  // ...remove the annotation
                  pTag = {
                    ...pTag,
                    props: {
                      ...pTag.props,
                      children: pc.slice(2),
                    },
                  }
                  const index = admoAnnos.indexOf(pc[0])
                  colorSet = admoColorSets[index]
                  icon = admoIcons[index]
                  text = admoTexts[index]
                }
                removedAdmonitionAnnotation = true
                modifiedChildren.push(pTag)
              }
              else
                modifiedChildren.push(child)
            }

            return (
              <blockquote className={`mt-4 py-2 px-4   border-l-4 ${colorSet[0]}   text-sm [&>p:first-child]:mt-0`}>
                {text !== 'None' && (
                  <div className={`flex items-center h-4   ${colorSet[1]}`}>
                    {icon}
                    <span className={`ml-2 relative -top-px   ${colorSet[2]}`}>{text}</span>
                  </div>)
                }
                {modifiedChildren}
              </blockquote>
            );
          },
          thead: (props) => <thead className='border-b border-color-border   text-color-text'>{props.children}</thead>,
          tbody: (props) => <tbody className='text-color-text-subtle'>{props.children}</tbody>,
          tr: (props) => <tr className='
              [&:not(:last-child)]:border-b    [&:not(:last-child)]:border-color-border
              [&:last-child>td]:pb-0
              '>{props.children}</tr>,
          th: (props) => <th
            className='font-semibold   last:border-l last:border-color-border   first:pl-0 last:pr-0   pb-2 px-2'
            style={{ textAlign: props.style?.textAlign }}>{props.children}</th>,
          td: (props) => <td
            className='last:border-l last:border-color-border   first:pl-0 last:pr-0   p-2'
            style={{ textAlign: props.style?.textAlign }}>{props.children}</td>,
          table: (props) => <table className='w-full text-tx-2 mt-6'>{props.children}</table>
          ,
          // aside: (props) => <aside className='prose'>{props.children}</aside>, // todo: collapsible
        }}
        className='max-w-3xl'
      >
        {markdown}
      </Markdown>
    </main>
  );
}



// todo Inter font
