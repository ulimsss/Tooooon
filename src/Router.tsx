import { Route, Routes } from 'react-router';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Auth from './components/User/Auth';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Genre from './pages/Genre';
import Logout from './components/User/Logout';
import Board from './pages/Board';
import Post from './components/Board/Post';
import Write from './components/Board/Write';
import Platfrom from './pages/Platform';
import Search from './pages/Search';

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/oauth/kakao/callback" element={<Auth />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/platform" element={<Platfrom />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/post" element={<Post />} />
      <Route path="/board/write" element={<Write />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
export default Router;
