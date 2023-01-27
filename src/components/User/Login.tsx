import styles from './Login.module.css';
import { KAKAO_AUTH_URL } from '../../constants/login';
import UserInput from './UserInput';

function Login() {
  // const auth = useRecoilState<firebaseUser>(firebaseUser);

  // const setUserLogin = useSetRecoilState<LoginState>(isLogin);
  // const navigate = useNavigate();

  // const loginDirect = async () => {
  //   try {
  //     console.log('click');
  //     const user = await getDoc(doc(db, 'users', auth.userId));
  //     await signInWithCustomToken(firebaseAuth, auth.firebase_token);
  //     setUserLogin({ isLogin: true });
  //     navigate('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // loginDirect();
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginTitle}>Login</div>
      <div className={styles.loginInputWrapper}>
        <form onSubmit={onSubmit}>
          <label htmlFor="userId">ID</label>
          <UserInput type="text" id="userId" />
          <label htmlFor="password">Password</label>
          <UserInput type="password" id="password" />
          <button type="button">로그인</button>
        </form>
      </div>
      <div className={styles.registerWrapper}>
        <div className={styles.description}>아직 계정이 없으신가요?</div>
        <a href={KAKAO_AUTH_URL} className={styles.registerLink}>
          카카오로 시작하기
        </a>
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
