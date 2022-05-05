import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login';
import Main from './pages/home';
import Select from './pages/select';
import DownloadPortfolio from './pages/editPortfolio/DownloadPortfolio.js'
import Generate from './pages/generate/generate';
import Test1 from './test.js';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/select" element={<Select />} />
          <Route path="/test" element={<Test1/>}/>
          <Route path="/editpofol" element={<DownloadPortfolio />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
