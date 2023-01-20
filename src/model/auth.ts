import { atom, selector } from 'recoil';

export interface SignUpUser {
  userId: string;
  firebase_token: string;
}

export interface User {
  nickName: string;
  password: string;
  signIn?: boolean;
}

export const userInput = atom<SignUpUser>({
  key: 'userInput',
  default: {
    userId: '',
    firebase_token: '',
  },
});

export const userInputValue = selector<SignUpUser>({
  key: 'userInputValue',
  get: ({ get }) => {
    const origin = get(userInput);
    return origin;
  },
  set: ({ set }, newInput) => {
    set(userInput, newInput);
  },
});
