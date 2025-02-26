import { ReactComponent as NoteIcon } from './svg/note.svg';
import { ReactComponent as TipIcon } from './svg/tip.svg';
import { ReactComponent as ImportantIcon } from './svg/important.svg';
import { ReactComponent as WarningIcon } from './svg/warning.svg';
import { ReactComponent as CautionIcon } from './svg/caution.svg';
import { Props } from './md_renderer_1';


const admoAnnos = ['[!NOTE]', '[!TIP]', '[!IMPORTANT]', '[!WARNING]', '[!CAUTION]']
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





export const blockquote_renderer = (props: Props<HTMLQuoteElement>) => {
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
}