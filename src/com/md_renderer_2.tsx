import { Props } from "./md_renderer_1"



export const thead_renderer = (props: Props<HTMLTableSectionElement>) => (
  <thead className='border-b border-color-border   text-color-text'>
    {props.children}
  </thead>
)
export const tbody_renderer = (props: Props<HTMLTableSectionElement>) => (
  <tbody className='text-color-text-subtle'>{props.children}</tbody>
)
export const tr_renderer = (props: Props<HTMLTableRowElement>) => (
  <tr className='
    [&:not(:last-child)]:border-b    [&:not(:last-child)]:border-color-border
    [&:last-child>td]:pb-0
    '>{props.children}
  </tr>
)
export const th_renderer = (props: Props<HTMLTableCellElement>) => (
  <th
    className='font-semibold   last:border-l last:border-color-border   first:pl-0 last:pr-0   pb-2 px-2'
    style={{ textAlign: props.style?.textAlign }}
  >
    {props.children}
  </th>
)
export const td_renderer = (props: Props<HTMLTableCellElement>) => (
  <td
    className='last:border-l last:border-color-border   first:pl-0 last:pr-0   p-2'
    style={{ textAlign: props.style?.textAlign }}
  >
    {props.children}
  </td>
)
export const table_renderer = (props: Props<HTMLTableElement>) => (
  <table className='w-full text-tx-2 mt-6'>
    {props.children}
  </table>
)



