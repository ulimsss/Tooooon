import { Webtoon } from '../model/webtoon';

const MAX_ID_SIZE = 6;
const MAX_PASSWORD_SIZE = 8;
const NICKNAME_REGAX = /^[a-z0-9]+$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])$/;

export const getRandomArr = (webtoonSize: number, size: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = Math.floor(Math.random() * webtoonSize);
  }
  return arr;
};

export const idValidateFunc = (nickName: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !NICKNAME_REGAX.test(nickName) && nickName.length < MAX_ID_SIZE;

export const pwdValidateFunc = (pwd: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !passwordRegex.test(pwd) && pwd.length < MAX_PASSWORD_SIZE;
