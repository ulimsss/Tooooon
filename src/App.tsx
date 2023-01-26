import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Auth from './components/User/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Genre from './pages/Genre';
import { isLogin, LoginState } from './model/login';
import Logout from './components/User/Logout';
import { firebaseAuth } from './config';
import Board from './pages/Board';
import Post from './components/Board/Post';
import Write from './components/Board/Write';

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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/genre" element={<Genre />} />
          {/* <Route path={"/platform"} element={<Home />} /> */}
          <Route path="/board" element={<Board />} />
          <Route path="/board/post" element={<Post />} />
          <Route path="/board/write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
