import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import MyPage from './pages/myPage';
import Main from './pages/home';
import Select from './pages/select';
import DownloadPortfolio from './pages/editPortfolio/DownloadPortfolio.js';
import Generate from './pages/generate/generate';
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
          <Route path="/editpofol" element={<DownloadPortfolio />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
