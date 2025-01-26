import { NavLink, useLocation } from 'react-router';
import { Image } from 'antd';
import { pageGroups } from '../pages';



export function L_NAV() {
  const location = useLocation();

  return (
    <nav id='L_NAV' className='w-72 p-4 sticky overflow-y-auto h-[calc(100vh-48px)]   border-r border-color-border'>
      {pageGroups.map((group, i) => (
        <div key={i}>
          {/* nhóm chủ đề */}
          <div className='mb-3   text-color-text-subtle'>
            <Image preview={false} src={group.icon} className='pr-2' />
            {group.title}
          </div>

          {/* wrapper */}
          <ul className='mb-6   text-color-text-subtle   border-l border-color-border'>
            {/* nav links */}
            {group.pages.map((page, j) => (
              <li key={i + '_' + j} >
                <NavLink to={page.path}
                  className={
                    `flex items-center   mb-4 pl-4   relative -left-[1px] transition-none`
                    + (location.pathname === page.path
                      ? ' border-l-2   hover:text-color-text   text-color-text   border-color-text'
                      : ' border-l     hover:text-color-text                     border-colorless hover:border-color-text')
                  }
                >
                  <Image preview={false} src={page.icon} className='pr-2' />
                  <span className={location.pathname === page.path ? 'font-semibold' : ''}>
                    {page.title}
                  </span>
                </NavLink>
              </li>
            ))}
            {/* end of nav links */}
          </ul>
        </div>
      ))}
    </nav>
  );
}
