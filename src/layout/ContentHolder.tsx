import { Breadcrumb } from "antd";
import { JSX } from "react";

export function ContentHolder(p: {
  children: JSX.Element
}) {
  return (
    <div id='L_CONT' className='p-2 flex-1 bg-slate-800 border-r border-slate-500'>
      <Breadcrumb></Breadcrumb>
      {p.children}
    </div>
  );
}
