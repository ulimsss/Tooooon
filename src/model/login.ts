// import { signInWithCustomToken } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import { NavigateFunction } from 'react-router';
// import { useRecoilState } from 'recoil';
// import { db, firebaseAuth } from '../config';
// import { SignUpUser, userInput } from './auth';

import { atom } from 'recoil';
import { firebaseAuth } from '../config';

export interface LoginState {
  isLogin: boolean;
}

export const isLogin = atom<LoginState>({
  key: 'isLogin',
  default: { isLogin: false },
});
