/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
import { atom, selector, selectorFamily } from 'recoil';

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

export const searchedWebtoonState = atom<Webtoon[]>({
  key: 'webtoonsList',
  default: [],
});

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

export const webtoonSearch = selectorFamily({
  key: 'webtoonSearch',
  get:
    (name) =>
    async ({ get }) => {
      const webtoons = get(searchedWebtoonState);
      return webtoons.filter((webtoon) => webtoon.name === name);
    },
});
