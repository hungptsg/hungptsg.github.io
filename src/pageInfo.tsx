



export type RouteInfo = {
  title: string
  path: string,
}


export const pageInfos: RouteInfo[] = [
  { title: 'Home', path: '/' },
  { title: 'Draft', path: '/draft' },
]




// Tìm thông tin trang & file từ đường dẫn relative.
export function findPageInfo(path: string): RouteInfo {
  for (const info of pageInfos)
    if (path === info.path)
      return info
  return pageInfos[0]
}

