import { atom } from 'recoil';

export interface LoginState {
  isLogin: boolean;
}
export interface LoginInfo {
  userId: string;
  password: string;
}

export const isLogin = atom<LoginState>({
  key: 'isLogin',
  default: { isLogin: false },
});

export const loginInfo = atom<LoginInfo>({
  key: 'loginInfo',
  default: { userId: 'undefined', password: '' },
});
