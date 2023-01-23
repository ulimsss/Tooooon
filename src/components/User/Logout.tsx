import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { firebaseAuth } from '../../config';
import { isLogin, LoginState } from '../../model/login';

function Logout() {
  const userLogin = useRecoilState<LoginState>(isLogin);
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  const navigate = useNavigate();

  // 버튼 눌렀을 때 로그아웃핸들러
  // 컴포넌트가 마운트 되면서
  // 탭 눌렀을 때 페이지 전체가 렌더ㅣㄹㅇ

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
