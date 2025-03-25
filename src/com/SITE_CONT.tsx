import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { MarkdownRenderer } from './MarkdownRenderer';
import { CommentSection } from './CommentSection';
import '../page/Page.css';






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
    <main id='L_DRAFT' className='content'>
      <MarkdownRenderer>
        {markdown}
      </MarkdownRenderer>
      {/* <CommentSection componentName={props.filename.replace('.md', '')}/>
      <p className='italic'>Please reload the page if Giscus is not working properly.</p> */}
    </main>
  );
}



// todo Inter font
