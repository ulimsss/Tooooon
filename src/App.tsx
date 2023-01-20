import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Auth from './components/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Genre from './pages/Genre';
import { isLogin, LoginState } from './model/login';
import Logout from './components/Logout';
import { firebaseAuth } from './config';

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
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/genre" element={<Genre />} /> */}
          {/* <Route path={"/platform"} element={<Home />} /> */}
          {/* <Route path={"/board"} element={<Home />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
