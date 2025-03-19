import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import { ul_renderer } from './md_renderer_1';
// import { table_renderer, tbody_renderer, td_renderer, th_renderer, thead_renderer, tr_renderer } from './md_renderer_2';
import { blockquote_renderer } from './md_renderer_4';
import '../page/Page.css';
import { TabCode } from './TabCode';
import Giscus from '@giscus/react';





function extractSlug(children: React.ReactNode) {
  let child = React.Children.toArray(children)
  let text = child + '' // assume children is a string, else this break
  let slug = text.toLowerCase().replace(/\W/g, '-')
  return slug
}



export function ContentHolder(props: {
  filename: string
}) {
  const location = useLocation();
  const [markdown, setMarkdown] = useState('');

  // Fetch the markdown file for the current page
  useEffect(() => {
    async function fetchData(file: string) {
      const p = await fetch('../' + file)
        .then(res => {
          // console.log(res);
          return res.text();
        })
        .catch(error => 'Error: ' + error.message);
      setMarkdown(p);
    }
    fetchData(props.filename);
  }, [location.pathname, props.filename]);



  return (
    <main id='L_DRAFT'
      className='content'
    >
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
          // thead: thead_renderer,
          // tbody: tbody_renderer,
          // tr: tr_renderer,
          // th: th_renderer,
          // td: td_renderer,
          // table: table_renderer,
        }}
        className='max-w-3xl'
      >
        {markdown}
      </Markdown>

      <Giscus
        id="comments"
        repo="hungptsg/mini-projects"
        repoId="R_kgDOOKxbMQ"
        category="General"
        categoryId="DIC_kwDOOKxbMc4CoNiH"
        mapping="pathname"

        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </main>
  );
}



// todo Inter font
