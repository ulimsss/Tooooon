export const navTabs: any = {
  홈: 'home',
  장르: 'genre',
  플랫폼: 'platform',
  게시판: 'board',
  검색: 'search',
} as const;

type tabsType = (typeof navTabs)[keyof typeof navTabs];
