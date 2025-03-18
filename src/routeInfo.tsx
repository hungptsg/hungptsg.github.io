import { JSX } from "react"
import { PageHome } from "./page/PageHome"
import { ContentHolder } from "./com/SITE_CONT"
import { Svg2D } from "./com/icons"


export enum Grouping {
  _2d, _3d
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
    group:  Grouping._2d
  },
  {
    index: 1,
    title: 'Draft',
    path: '/draft',
    element: <ContentHolder />,
    icon: <Svg2D />,
    group:  Grouping._3d
  },
]




// Tìm thông tin trang & file từ đường dẫn relative.
export function findRouteInfo(path: string): RouteInfo {
  for (const info of routeInfo)
    if (path === info.path)
      return info
  return routeInfo[0]
}

