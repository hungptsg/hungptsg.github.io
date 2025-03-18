import { Divider } from 'antd';
import { NavLink, useLocation } from 'react-router';
import { findRouteInfo } from '../routeInfo';



export function SITE_HEADER() {
  const location = useLocation()
  const title = findRouteInfo(location.pathname)?.title || ''

  return (
    <header id='L_HEAD' className='p-2 h-12   flex border-b border-color-border'>
      <div className='p-2 h-8   flex items-center text-lg   text-color-text-subtle'>
        <NavLink to=''>
          My blog
        </NavLink>
      </div>

      {title !== "Home" &&
        <>
          <Divider type='vertical' className='h-8   border-s-color-border' />
          <div className='p-2 h-8   flex items-center text-lg text-color-text'>
            {title}
          </div>
        </>
      }

    </header>
  );
}
