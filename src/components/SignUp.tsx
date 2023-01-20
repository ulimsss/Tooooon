import clsx from 'clsx';
import { signInWithCustomToken } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { db, firebaseAuth } from '../config';
import { idValidateFunc, pwdValidateFunc } from '../helpers/help';
import { isLogin, LoginState } from '../model/login';
import styles from './styles/SignUp.module.css';
import UserInput from './UserInput';

function SignUp() {
  // hookform , useReducer(Redux)
  const [nickName, setNickName] = useState('');
  const [errorNickName, setErrorNickName] = useState('');
  const [isNickName, setIsNickName] = useState(false);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [errorPasswordCheck, setErrorPasswordCheck] = useState('');
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const userLogin = useRecoilState<LoginState>(isLogin);
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (userLogin[0].isLogin === true) {
      navigate('/');
    }
    const nickNameCurrent = e.target.value;
    setNickName(nickNameCurrent);
    if (idValidateFunc(nickNameCurrent)) {
      setErrorNickName('아이디는 영소문자로 5글자 이상 입력하세요.');
      setIsNickName(false);
    } else {
      setErrorNickName('올바른 이름입니다.');
      setIsNickName(true);
    }
  }, []);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line operator-linebreak
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (pwdValidateFunc(passwordCurrent)) {
        setErrorPassword(
          '숫자, 영문, 특수기호를 포함해 8글자 이상 입력하세요.',
        );
        setIsPassword(false);
      } else {
        setErrorPassword('올바른 비밀번호입니다.');
        setIsPassword(true);
      }
    },
    [],
  );
  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setErrorPasswordCheck(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setErrorPasswordCheck('비밀번호가 일치해요.');
        setIsPasswordCheck(true);
      } else {
        setErrorPasswordCheck('비밀번호가 일치하지 않아요. 다시 입력하세요.');
        setIsPasswordCheck(false);
      }
    },
    [password],
  );

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        console.log('click');
        await setDoc(doc(db, 'users', state.data.userId), {
          nickName,
          password,
        });
        await signInWithCustomToken(firebaseAuth, state.data.firebase_token);
        setUserLogin({ isLogin: true });
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    },
    [nickName, password],
  );

  return (
    <div className={styles.signUpWrapper}>
      <div className={styles.registerTitle}>Register</div>
      <div className={styles.signUpInputWrapper}>
        <form onSubmit={onSubmit}>
          <label htmlFor="userId">Create Your Id</label>
          <UserInput id="userId" type="text" onChange={onChangeName} />
          <div
            className={clsx(
              `styles.${isPassword ? 'success' : 'error'}`,
              styles.confirm,
            )}
          >
            {errorNickName}
          </div>
          <label htmlFor="password">Create a Password</label>
          <UserInput
            id="password"
            type="password"
            onChange={onChangePassword}
          />
          <div
            className={clsx(
              `styles.${isPassword ? 'success' : 'error'}`,
              styles.confirm,
            )}
          >
            {errorPassword}
          </div>

          <label htmlFor="passwordCheck">Confirm a Password</label>
          <UserInput
            id="passwordCheck"
            type="password"
            onChange={onChangePasswordConfirm}
          />
          <div
            className={clsx(
              `styles.${isPassword ? 'success' : 'error'}`,
              styles.confirm,
            )}
          >
            {errorPasswordCheck}
          </div>

          <button
            type="submit"
            disabled={!(isNickName && isPassword && isPasswordCheck)}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
