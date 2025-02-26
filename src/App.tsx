import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Flex } from 'antd';
import { store } from './rtk/store';
import { ContentHolder } from './com/L_CONT';
import { L_NAV } from './com/L_NAV';
import { L_HEAD } from './com/L_HEAD';
import { PageHome } from './page/PageHome';



export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-color-background'>
          <L_HEAD />

          <Flex>
            <L_NAV />
            <Routes>
              <Route path='/' element={<PageHome />} />
              <Route path='/draft' element={<ContentHolder />} />

            
              <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
          </Flex>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
