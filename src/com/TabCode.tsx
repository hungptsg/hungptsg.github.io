import { useState } from "react";
import { codeStyle, SyntaxHighlighter } from "./SyntaxHighlighter";


export function TabCode(props: {
  codeBlocks: string[]
  codeLangs: string[]
  codeNames: string[]
}) {
  const [activeTab, setActiveTab] = useState(0);
  const styleActive = '  text-color-text-subtle'
  const styleInActive = '    text-color-secondary-base'

  return (
    <div className='rounded-md overflow-hidden   mt-4'>
      <div className='flex items-center p-1   bg-color-code-header'>
        <div className='flex-1'>
          {props.codeNames.map((cn, idx) =>
            <button
              key={idx}
              className={`px-3   hover:bg-color-code-block` + (idx === activeTab ? styleActive : styleInActive)}
              onClick={() => setActiveTab(idx)}
            >
              {cn}
            </button>
          )}
        </div>
        <button
          className='px-3   hover:bg-color-code-block text-color-text-subtle'
          onClick={() => {
            navigator.clipboard.writeText(props.codeBlocks[activeTab]);
          }}
        >
          Copy
        </button>
      </div>

      {/* code block */}
      {props.codeBlocks.map((code, idx) =>
        <div key={idx} hidden={activeTab !== idx}>
          <SyntaxHighlighter
            language={props.codeLangs[idx]}
            style={codeStyle}
            PreTag={'div'}
            customStyle={{ margin: 0 }}
            className='border-x-2 border-b-2 border-color-code-header   !rounded-b-md !rounded-t-none'
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div >
  );
}
