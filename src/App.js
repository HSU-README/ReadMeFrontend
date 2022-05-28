import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPortfolio from 'pages/allPortfolio';
import Signup from './pages/signup';
import Login from './pages/login';
import MyPage from './pages/myPage';
import Main from './pages/home';
import DownloadPortfolio from './pages/editPortfolio/DownloadPortfolio.js';
import Preview from 'pages/editPortfolio/Preview';
import SelectPortfolio from './pages/selectPage';
import SearchPage from './pages/searchPage/SearchPage.js';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/all" element={<AllPortfolio />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/select" element={<SelectPortfolio />} />
            <Route path="/generate" element={<DownloadPortfolio />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/generate/:docId" element={<DownloadPortfolio />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/preview" element={<Preview />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/preview/:docId" element={<Preview />} /> {/*포트폴리오 제작 페이지 라우트*/}
            <Route path="/search" element={<SearchPage />} /> {/*포트폴리오 검색 페이지 라우트*/}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
