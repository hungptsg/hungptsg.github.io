import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import { a_renderer, h1_renderer, h2_renderer, hr_renderer, p_renderer, ul_renderer } from './md_renderer_1';
import { table_renderer, tbody_renderer, td_renderer, th_renderer, thead_renderer, tr_renderer } from './md_renderer_2';
import { code_renderer } from './md_renderer_3';
import { blockquote_renderer } from './md_renderer_4';







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

    fetchData("Draft.md");
  }, [location.pathname]);



  return (
    <main id='L_DRAFT'
      className='p-8 flex-1 overflow-y-auto h-[calc(100vh-48px)]'
    >
      <Markdown
        remarkPlugins={[remarkGfm, [remarkToc, { parents: ['root'] }]]}
        rehypePlugins={[rehypeRaw]}
        components={{
          hr: hr_renderer,
          h1: h1_renderer,
          h2: h2_renderer,
          p: p_renderer,
          code: code_renderer,
          a: a_renderer,
          ul: ul_renderer,
          blockquote: blockquote_renderer,
          thead: thead_renderer,
          tbody: tbody_renderer,
          tr: tr_renderer,
          th: th_renderer,
          td: td_renderer,
          table: table_renderer,
        }}
        className='max-w-3xl'
      >
        {markdown}
      </Markdown>
    </main>
  );
}



// todo Inter font
