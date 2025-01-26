import { Divider } from 'antd';
import { useLocation } from 'react-router';
import { findPageInfo } from '../pages';



export function L_HEAD() {
  const location = useLocation()
  const title = findPageInfo(location.pathname)?.title || ''

  return (
    <header id='L_HEAD' className='p-2 h-12   flex border-b border-color-border'>

      <div className='p-2 h-8   flex items-center text-lg   text-color-text-subtle'>
        My blog
      </div>

      <Divider type='vertical' className='h-8   border-s-color-border' />

      <div className='p-2 h-8   flex items-center text-lg text-color-text'>
        {title}
      </div>

    </header>
  );
}
