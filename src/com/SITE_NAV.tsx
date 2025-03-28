import { NavLink, useLocation } from 'react-router';
import { JSX } from 'react';
import { Svg2D, Svg3D } from './icons';
import { Grouping, RouteInfo } from '../routeInfo';



function TopicWrapper(props: {
  title: string,
  icon: JSX.Element,
  children?: JSX.Element | JSX.Element[]
}) {
  return (
    <div>
      <div className='mb-3   flex items-center flex-row gap-2   text-color-text-subtle'>
        {props.icon}
        {props.title}
      </div>
      <ul className='mb-6   text-color-text-subtle   border-l border-color-border'>
        {props.children}
      </ul>
    </div>
  )
}




function Topic(props: {
  key: React.Key | null | undefined,

  title: string,
  icon: JSX.Element,
  linkTo: string,
  currentPath: string,
}) {
  const selected = props.linkTo === props.currentPath;
  return (
    <li>
      <NavLink to={props.linkTo}
        className={
          `flex items-center flex-row gap-2   mb-4 pl-4   relative -left-[1px] transition-none`
          + (selected
            ? ' border-l-2   hover:text-color-text   text-color-text   border-color-text'
            : ' border-l     hover:text-color-text                     border-colorless hover:border-color-text')
        }
      >
        {props.icon}
        <span className={selected ? 'font-semibold' : ''}>
          {props.title}
        </span>
      </NavLink>
    </li>
  )
}









export function SITE_NAV(props: {
  routeInfo: RouteInfo[],
}) {
  const { routeInfo } = props;
  const location = useLocation();
  const current_path = location.pathname;

  function renderGroup(icon: JSX.Element, group: Grouping) {
    return routeInfo.filter(ri => ri.group === group).map(ri =>
      <Topic
        key={ri.index} title={ri.title}
        icon={icon}
        linkTo={ri.path} currentPath={current_path}
      />
    )
  }

  return (
    <nav id='L_NAV' className='w-72 p-4 sticky overflow-y-auto h-[calc(100vh-48px)]   border-r border-color-border'>
      <TopicWrapper title='Game - 2d' icon={<Svg2D />}>
        {renderGroup(<Svg2D />, Grouping.Game2d)}
      </TopicWrapper>

      {/* <TopicWrapper title='Game - 3d' icon={<Svg3D />}>
        {renderGroup(<Svg2D />, Grouping.Game3d)}
      </TopicWrapper> */}

      <TopicWrapper title='Recipe - 2d' icon={<Svg2D />}>
        {renderGroup(<Svg2D />, Grouping.Recipe2d)}
      </TopicWrapper>
    </nav>
  );
}
