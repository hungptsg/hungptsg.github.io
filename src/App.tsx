import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Flex } from 'antd';
import { store } from './rtk/store';
import { SITE_NAV } from './com/SITE_NAV';
import { SITE_HEADER } from './com/SITE_HEADER';
import { routeInfo } from './routeInfo';



export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-color-background'>
          <SITE_HEADER />

          <Flex>
            <SITE_NAV routeInfo={routeInfo} />
            <Routes>
              {routeInfo.map(ri =>
                <Route key={ri.index} path={ri.path} element={ri.element} />
              )}
              <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
          </Flex>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
