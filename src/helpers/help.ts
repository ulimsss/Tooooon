import { Webtoon } from '../model/webtoon';

const MAX_ID_SIZE = 6;
const MAX_PASSWORD_SIZE = 8;
const NICKNAME_REGAX = /^[a-z0-9]+$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])$/;

const sameNum = (arr: number[], n: number) => arr.find((e) => e === n);

export const getRandomArr = (webtoonSize: number, size: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < size; i += 1) {
    const n = Math.floor(Math.random() * webtoonSize);
    if (!sameNum(arr, n)) {
      arr.push(n);
    } else {
      i -= 1;
    }
  }
  return arr;
};

export const idValidateFunc = (nickName: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !NICKNAME_REGAX.test(nickName) && nickName.length < MAX_ID_SIZE;

export const pwdValidateFunc = (pwd: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !passwordRegex.test(pwd) && pwd.length < MAX_PASSWORD_SIZE;

export const createCarouselItems = (
  webtoons: Webtoon[],
  carouselNum: number[],
): Webtoon[] => {
  const arr: Webtoon[] = [];
  webtoons.filter((webtoon, idx) => {
    if (carouselNum.includes(idx)) {
      arr.push(webtoon);
    }
    return null;
  });
  return arr;
};
