import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import styles from './Login.module.css';
import { KAKAO_AUTH_URL } from '../../constants/login';
import UserInput from './UserInput';
import { firebaseAuth } from '../../config';

function Login() {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickName(e.target.value);
  };
  const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(firebaseAuth, nickName, password)
      .then(() => {
        navigate('/');
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginTitle}>Login</div>
      <div className={styles.loginInputWrapper}>
        <form onSubmit={onSubmit}>
          <label htmlFor="userId">Email</label>
          <UserInput type="email" id="userId" onChange={onChangeName} />
          <label htmlFor="password">Password</label>
          <UserInput type="password" id="password" onChange={onChangePW} />
          <button type="submit">로그인</button>
        </form>
      </div>
      <div className={styles.registerWrapper}>
        <div className={styles.description}>아직 계정이 없으신가요?</div>
        <Link to="/signUp" className={styles.registerLink}>
          회원가입하기
        </Link>
      </div>
      <div className={styles.kakaoLoginBtn}>
        {/* <a href={KAKAO_AUTH_URL}> */}
        <a href={KAKAO_AUTH_URL}>
          <img src="/img/kakaoLoginBtn.png" alt="kakaoLogin" />
        </a>
      </div>
    </div>
  );
}

export default Login;
