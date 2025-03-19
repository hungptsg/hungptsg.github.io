import React from "react";
import { ExtraProps } from "react-markdown";


export type Props<T> = React.ClassAttributes<T> & React.HTMLAttributes<T> & ExtraProps










export const ul_renderer = (props: Props<HTMLUListElement>) => (
  <ul className='marker:content-["•__"] [&_li]:leading-relaxed   mt-4 ml-8   text-color-text'>
    {props.children}
  </ul>
)