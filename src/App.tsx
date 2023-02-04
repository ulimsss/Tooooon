import { BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import { isLogin, LoginState } from './model/login';
import { firebaseAuth } from './config';
import Router from './Router';

function App() {
  const setUserLogin = useSetRecoilState<LoginState>(isLogin);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUserLogin({ isLogin: true });
      } else {
        setUserLogin({ isLogin: false });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Router />
      </div>
      <footer />
    </BrowserRouter>
  );
}

export default App;
