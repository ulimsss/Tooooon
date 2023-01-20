export const CAROUSEL_SIZE = 5;

export const platformName: any = {
  네이버: 'naver',
  카카오: 'kakao',
  레진코믹스: 'lezhin',
  탑툰: 'toptoon',
} as const;

export const platformURL: any = {
  네이버: 'https://comic.naver.com/index',
  카카오: 'https://webtoon.kakao.com/',
  레진코믹스: 'https://www.lezhin.com/ko',
  탑툰: 'https://toptoon.com/',
} as const;

type platformType = typeof platformName[keyof typeof platformName];
