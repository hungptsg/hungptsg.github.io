import { Props } from './md_renderer_1';
import { SyntaxHighlighter, codeStyle } from './SyntaxHighlighter';
import { TabCode } from './TabCode';






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
    const parts = codeContent.split(';;;;');
    const gd_code = parts[0];
    const cs_code = parts[1].trimStart();
    return (
      <TabCode
        codeBlocks={[gd_code, cs_code]}
        codeLangs={['gdscript', 'csharp']}
        codeNames={['GdScript', 'C#']}
      />
    );

  }
}

