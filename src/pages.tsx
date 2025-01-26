

export const pageGroups: PageInfoGroup[] = [
  {
    title: '2D',
    icon: '/icon/2D.png',
    pages: [
      {
        title: 'Home', path: '/',
        icon: '/icon/2D.png', fileName: 'Home.md',
      },
      {
        title: 'About', path: '/about',
        icon: '/icon/2D.png', fileName: 'About.md',
      },
      {
        title: 'About1', path: '/about1',
        icon: '/icon/2D.png', fileName: 'About.md',
      },
      {
        title: 'About2', path: '/about2',
        icon: '/icon/2D.png', fileName: 'About.md',
      },
    ]
  },
  {
    title: '3D',
    icon: '/icon/3D.png',
    pages: [
      {
        title: 'About5', path: '/about5',
        icon: '/icon/2D.png', fileName: 'About.md',
      },
      {
        title: 'About6', path: '/about6',
        icon: '/icon/2D.png', fileName: 'About.md',
      },
    ]
  },
]

// Tìm thông tin trang & file từ đường dẫn relative.
export function findPageInfo(path: string): PageInfo | undefined {
  for (const group of pageGroups)
    for (const page of group.pages)
      if (path === page.path)
        return page
  return undefined
}


export type PageInfoGroup = {
  title: string
  icon: string,
  pages: PageInfo[]
}
export type PageInfo = {
  title: string
  path: string,
  icon: string,
  fileName: string,
}
