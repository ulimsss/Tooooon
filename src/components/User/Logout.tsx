import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { firebaseAuth } from '../../config';
import useOpenModal from '../../hooks/useOpenModal';
import { isLogin, loginInfo, LoginInfo, LoginState } from '../../model/login';
import Modal from '../Modal/Modal';

function Logout(): JSX.Element {
  const { isOpenModal, clickModal, closeModal } = useOpenModal();
  const userLogin = useRecoilState<LoginState>(isLogin);
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  const setUserInfo = useSetRecoilState<LoginInfo>(loginInfo);
  const navigate = useNavigate();

  // 버튼 눌렀을 때 로그아웃핸들러
  // 컴포넌트가 마운트 되면서
  // 탭 눌렀을 때 페이지 전체가 렌더ㅣㄹㅇ

  const logoutFirebase = (): void => {
    if (!userLogin) {
      console.log('login Error인디?');
    } else {
      console.log('signOut');
      setUserLogin({ isLogin: false });
      setUserInfo({ userId: 'undefined', password: '' });
      signOut(firebaseAuth);
    }
    navigate('/');
  };
  useEffect(() => {
    logoutFirebase();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isOpenModal && (
        <Modal closeModal={closeModal} title="정말로 로그아웃 하시겠습니까?" />
      )}
    </>
  );
}

export default Logout;
