import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from 'pages/sign/Signup';
import Login from 'pages/login';
import Main from 'pages/home';
import Select from 'pages/select';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
