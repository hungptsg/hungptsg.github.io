import { createHashRouter, RouteObject, RouterProvider } from 'react-router';
import { Home } from './com/Home';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import { Header } from './layout/Header';
import { Nav } from './layout/Nav';
import { JSX } from 'react';
import { ContentHolder } from './layout/ContentHolder';
import { Flex } from 'antd';


type PageInfo = RouteObject & {
  icon: JSX.Element,
  title: string
}


const pages: PageInfo[] = [
  { path: '/', element: <Home />, title: 'Home', icon: <></> },
]

const router = createHashRouter(pages)

export function App() {
  return (
    <Provider store={store}>
      <Header />

      <Flex id='L_MAIN'>
        <Nav />

        <ContentHolder>
          <RouterProvider router={router} />
        </ContentHolder>
      </Flex>
    </Provider>
  );
}
