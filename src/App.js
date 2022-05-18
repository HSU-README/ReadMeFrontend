import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import MyPage from './pages/myPage';
import Main from './pages/home';
import Select from './pages/select';
import DownloadPortfolio from './pages/editPortfolio/DownloadPortfolio.js';
import Preview from 'pages/editPortfolio/Preview';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/mypage" element={<MyPage />}></Route>
            <Route path="/select" element={<Select />} />
            <Route path="/generate" element={<DownloadPortfolio />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/generate/:docId" element={<DownloadPortfolio />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/preview" element={<Preview />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/preview/:docId" element={<Preview />} /> {/*포트폴리오 제작 페이지 라우트*/}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
