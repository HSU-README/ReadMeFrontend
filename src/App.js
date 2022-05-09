import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import MyPage from './pages/myPage';
import Main from './pages/home';
import Select from './pages/select';
import DownloadPortfolio from './pages/editPortfolio/DownloadPortfolio.js';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/mypage" element={<MyPage />}></Route>
          <Route path="/select" element={<Select />} />
          <Route path="/generate" element={<DownloadPortfolio />} /> {/*포트폴리오 제작 페이지 라우트*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
