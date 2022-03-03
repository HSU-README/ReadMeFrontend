import { Routes, Route } from 'react-router-dom';
import Signup from 'pages/sign/Signup';
import LogIn from 'pages/login';
import Home from 'pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
