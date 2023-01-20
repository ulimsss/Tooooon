import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { firebaseAuth } from '../config';
import { isLogin, LoginState } from '../model/login';

function Logout() {
  const userLogin = useRecoilState<LoginState>(isLogin);
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  const navigate = useNavigate();

  const logoutFirebase = (): void => {
    console.log(userLogin[0].isLogin);
    if (!userLogin) {
      console.log('login Error인디?');
    } else {
      console.log('signOut');
      setUserLogin({ isLogin: false });
      console.log(firebaseAuth);
      signOut(firebaseAuth);
    }

    navigate('/');
  };
  useEffect(() => {
    logoutFirebase();
  }, []);

  return null;
}

export default Logout;
