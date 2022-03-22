import {BrowserRouter,Routes,Route } from 'react-router-dom';
import LogIn from './pages/login/index.jsx';
import Signup from './pages/sign/Signup';
import Home from './pages/home/index.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
