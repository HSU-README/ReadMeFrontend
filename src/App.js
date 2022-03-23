
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/sign/Signup.js';
import Login from './pages/login/index.jsx'
import Main from './pages/home/index.jsx';
function App() {
  return (
    <div className="App">
      READ ME
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Main/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
