


import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Props } from './md_renderer_1';



SyntaxHighlighter.registerLanguage('csharp', require('react-syntax-highlighter/dist/esm/languages/prism/csharp').default);
SyntaxHighlighter.registerLanguage('gdscript', require('react-syntax-highlighter/dist/esm/languages/prism/gdscript').default);








export const code_renderer = (props: Props<HTMLElement>) => {
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
          className='border-x-2 border-b-2 border-color-code-header   !rounded-b-md !rounded-t-none'
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    );
  }
}

