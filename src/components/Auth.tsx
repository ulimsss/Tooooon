// eslint-disable-next-line object-curly-newline
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithCustomToken, signOut } from 'firebase/auth';
import qs from 'qs';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { firebaseAuth, db } from '../config';
import { SignUpUser, userInput } from '../model/auth';
import { CLIENT_KEY, CLIENT_SECRET, REDIRECT_URI } from '../constants/login';
import { isLogin, LoginState } from '../model/login';

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code');
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);

  // auth를 전역으로 관리 -> login에서 사용
  const [auth, setAuth] = useState({ firebase_token: '', userId: '' });

  const navigate = useNavigate();
  const loginFirebase = async (data: SignUpUser) => {
    const uid = data.userId;
    const user = await getDoc(doc(db, 'users', uid));
    if (user.exists()) {
      console.log('signIn');
      console.log(user.data());
      signInWithCustomToken(firebaseAuth, data.firebase_token);
      setUserLogin({ isLogin: true });
      navigate('/');
    } else {
      console.log('signUp');

      const authTmp = data;
      setAuth(authTmp);
      navigate('/signup', { state: { data } });
    }
  };

  const loginDirect = async () => {
    try {
      console.log('click');
      const user = await getDoc(doc(db, 'users', auth.userId));

      await signInWithCustomToken(firebaseAuth, auth.firebase_token);
      setUserLogin({ isLogin: true });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const requestKakaoJwt = (token: string) => {
    const baseURL = 'http://localhost:8000';

    const req = axios({
      url: '/verifyToken',
      baseURL: baseURL,
      method: 'post',
      data: { token: token },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => {
      // Login하는 코드
      loginFirebase(res.data);
    });
  };

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: CLIENT_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload,
      );
      requestKakaoJwt(res.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return null;
}

export default Auth;
