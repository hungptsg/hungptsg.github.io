import { NavLink, useLocation } from 'react-router';
import { Image } from 'antd';
import { JSX } from 'react';



function TopicWrapper(props: {
  title: string,
  iconPath: string,
  children?: JSX.Element | JSX.Element[]
}) {
  return (
    <div>
      <div className='mb-3   text-color-text-subtle'>
        <Image preview={false} src={props.iconPath} className='pr-2' />
        {props.title}
      </div>
      <ul className='mb-6   text-color-text-subtle   border-l border-color-border'>
        {props.children}
      </ul>
    </div>
  )
}


function Topic(props: {
  title: string,
  iconPath: string
  url: string
  currentPath: string,
}) {
  const selected = props.url === props.currentPath;
  return (
    <li>
      <NavLink to={props.url}
        className={
          `flex items-center   mb-4 pl-4   relative -left-[1px] transition-none`
          + (selected
            ? ' border-l-2   hover:text-color-text   text-color-text   border-color-text'
            : ' border-l     hover:text-color-text                     border-colorless hover:border-color-text')
        }
      >
        <Image preview={false} src={props.iconPath} className='pr-2' />
        <span className={selected ? 'font-semibold' : ''}>
          {props.title}
        </span>
      </NavLink>
    </li>
  )
}







export function L_NAV() {
  const location = useLocation();
  const current_path = location.pathname;

  return (
    <nav id='L_NAV' className='w-72 p-4 sticky overflow-y-auto h-[calc(100vh-48px)]   border-r border-color-border'>
      <TopicWrapper title='2D' iconPath='/icon/2D.png' >
        <Topic title='Draft' iconPath='/icon/2D.png' url='/draft' currentPath={current_path} />
        <Topic title='Draft' iconPath='/icon/2D.png' url='/draft2' currentPath={current_path} />
      </TopicWrapper>

      <TopicWrapper title='3D' iconPath='/icon/3D.png' >
      </TopicWrapper>
    </nav>
  );
}
