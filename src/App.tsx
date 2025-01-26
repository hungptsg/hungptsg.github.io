import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Flex } from 'antd';
import { store } from './rtk/store';
import { ContentHolder } from './com/L_CONT';
import { L_NAV } from './com/L_NAV';
import { L_HEAD } from './com/L_HEAD';
import { pageGroups } from './pages';



export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='bg-color-background'>
          <L_HEAD />

          <Flex>
            <L_NAV />
            <Routes>
              {pageGroups.map(g => g.pages.map(page =>
                <Route path={page.path} key={page.fileName} element={<ContentHolder />} />
              ))}
              <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
          </Flex>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
