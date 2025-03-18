import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('csharp', require('react-syntax-highlighter/dist/esm/languages/prism/csharp').default);
SyntaxHighlighter.registerLanguage('gdscript', require('react-syntax-highlighter/dist/esm/languages/prism/gdscript').default);

export { SyntaxHighlighter };
export { a11yDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
