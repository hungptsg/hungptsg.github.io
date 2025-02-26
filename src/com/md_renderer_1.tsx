import React from "react";
import { ExtraProps } from "react-markdown";


export type Props<T> = React.ClassAttributes<T> & React.HTMLAttributes<T> & ExtraProps




function extractSlug(children: React.ReactNode) {
  let child = React.Children.toArray(children)
  let text = child + '' // assume children is a string, else this break
  let slug = text.toLowerCase().replace(/\W/g, '-')
  return slug
}



export const hr_renderer = () => <hr className='my-6   border-color-border' />

export const h1_renderer = (props: Props<HTMLHeadingElement>) => (
  <h1
    id={extractSlug(props.children)}
    className="text-4xl font-semibold   pb-2   text-color-text"
  >
    {props.children}
  </h1>
)

export const h2_renderer = (props: Props<HTMLHeadingElement>) => (
  <h2
    id={extractSlug(props.children)}
    className="text-2xl font-semibold   pb-2 [&:not(:first-child)]:mt-8 mb-3   text-color-text   border-b border-color-border"
  >
    {props.children}
  </h2>
)

export const p_renderer = (props: Props<HTMLParagraphElement>) => (
  <p className='[&:not(:first-child)]:mt-4   leading-relaxed   text-color-text'>
    {props.children}
  </p>
)

export const a_renderer = (props: React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps) => (
  <a
    href={props.href}
    className='text-color-hyperlink  hover:text-color-primary-hover  hover:underline  transition-none'
  >
    {props.children}
  </a>
)



export const ul_renderer = (props: Props<HTMLUListElement>) => (
  <ul className='marker:content-["•__"] [&_li]:leading-relaxed   mt-4 ml-8   text-color-text'>
    {props.children}
  </ul>
)