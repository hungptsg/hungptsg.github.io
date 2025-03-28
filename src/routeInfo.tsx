import { JSX } from 'react'
import { PageHome } from './page/PageHome'
import { ContentHolder } from './com/SITE_CONT'
import { Svg2D } from './com/icons'


export enum Grouping {
  Game2d, Game3d, Recipe2d, Recipe3d, Misc, Hidden
}

export type RouteInfo = {
  index: number,
  title: string
  path: string,
  element: JSX.Element,
  icon: JSX.Element
  group: Grouping
}


export const routeInfo: RouteInfo[] = [
  {
    index: 0,
    title: 'Home',
    path: '/',
    element: <PageHome />,
    icon: <Svg2D />,
    group: Grouping.Hidden
  },
  {
    index: 1,
    title: 'Draft', path: '/draft',
    element: <ContentHolder filename='Draft.md' />,
    icon: <Svg2D />, group: Grouping.Hidden
  },
  {
    index: 2,
    title: 'Pong', path: '/game-2d/pong',
    element: <ContentHolder filename='Pong.md' />,
    icon: <Svg2D />, group: Grouping.Game2d
  },
  {
    index: 3,
    title: 'Tictactoe', path: '/game-2d/tictactoe',
    element: <ContentHolder filename='Tictactoe.md' />,
    icon: <Svg2D />, group: Grouping.Game2d
  },
  {
    index: 4,
    title: 'Grid', path: '/recipe-2d/grid',
    element: <ContentHolder filename='Grid.md' />,
    icon: <Svg2D />, group: Grouping.Hidden
  },
]




// Tìm thông tin trang & file từ đường dẫn relative.
export function findRouteInfo(path: string): RouteInfo {
  for (const info of routeInfo)
    if (path === info.path)
      return info
  return routeInfo[0]
}

