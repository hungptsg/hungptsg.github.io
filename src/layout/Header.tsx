import { Divider } from "antd";

export function Header() {
  return (
    <div id='L_HEAD' className='p-2 h-12 flex bg-slate-800 border-b border-slate-500'>
      <div className='text-lg p-2 h-8 flex items-center'>My blog</div>
      <Divider type='vertical' className="h-8" />
      {/* dynamic page title */}
    </div>
  );
}
