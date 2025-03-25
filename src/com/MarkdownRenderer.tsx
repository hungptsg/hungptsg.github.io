import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import { ul_renderer } from '../com/md_renderer_1';
import { blockquote_renderer } from '../com/md_renderer_4';
import { TabCode } from '../com/TabCode';


function extractSlug(children: React.ReactNode) {
  let child = React.Children.toArray(children)
  let text = child + '' // assume children is a string, else this break
  let slug = text.toLowerCase().replace(/\W/g, '-')
  return slug
}

export function MarkdownRenderer(props: {
  children: any
}) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, [remarkToc, { parents: ['root'] }]]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: props => (<h1 id={extractSlug(props.children)}>{props.children}</h1>),
        h2: props => (<h2 id={extractSlug(props.children)}>{props.children}</h2>),
        h3: props => (<h3 id={extractSlug(props.children)}>{props.children}</h3>),
        h4: props => (<h4 id={extractSlug(props.children)}>{props.children}</h4>),
        h5: props => (<h5 id={extractSlug(props.children)}>{props.children}</h5>),
        h6: props => (<h6 id={extractSlug(props.children)}>{props.children}</h6>),
        code: props => {
          const codeContent = props.children?.toString() || '';
          // inline code
          if (props.node?.position?.start.line === props.node?.position?.end.line) {
            return (
              <code className='inline-code'>
                {codeContent}
              </code>
            )
          }
          // code block
          else {
            const parts = codeContent.split(';;;;');
            const gd_code = parts[0] || '';
            const cs_code = parts[1]?.trimStart() || '';
            return (
              <TabCode
                codeBlocks={[gd_code, cs_code]}
                codeLangs={['gdscript', 'csharp']}
                codeNames={['GdScript', 'C#']}
              />
            );
          }
        },
        ul: ul_renderer,
        blockquote: blockquote_renderer,
      }}
      className='max-w-3xl'
    >
      {props.children}
    </Markdown>
  )
}