// eslint-disable-next-line import/no-extraneous-dependencies
import { selector } from 'recoil';

const productsURL = '/data/webtoon.json';

export interface Webtoon {
  id: string;
  platform: string;
  genre: string;
  image: string;
  name: string;
  webtoonist: string;
  description: string;
  URL: string;
}

export const webtoonsList = selector<Webtoon[]>({
  key: 'webtoonsList',
  get: async () => {
    try {
      const res = await fetch(productsURL);
      return (await res.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
    }
    return null;
  },
});
