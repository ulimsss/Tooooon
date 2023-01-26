import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithCustomToken } from 'firebase/auth';
import qs from 'qs';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { firebaseAuth, db } from '../../config';
import { SignUpUser } from '../../model/auth';
import { isLogin, loginInfo, LoginInfo, LoginState } from '../../model/login';
import { CLIENT_KEY, CLIENT_SECRET, REDIRECT_URI } from '../../constants/login';

function Auth() {
  const code = new URL(window.location.href).searchParams.get('code');
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  const setUserInfo = useSetRecoilState<LoginInfo>(loginInfo);

  // auth를 전역으로 관리 -> login에서 사용
  const [auth, setAuth] = useState({ firebase_token: '', userId: '' });

  const navigate = useNavigate();
  const loginFirebase = async (data: SignUpUser) => {
    const uid = data.userId;
    const user = await getDoc(doc(db, 'users', uid));
    if (user.exists()) {
      console.log('signIn');
      signInWithCustomToken(firebaseAuth, data.firebase_token);
      setUserLogin({ isLogin: true });
      setUserInfo({
        userId: user.data().nickName,
        password: user.data().password,
      });
      navigate('/');
    } else {
      console.log('signUp');
      const authTmp = data;
      setAuth(authTmp);
      navigate('/signup', { state: { data } });
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
