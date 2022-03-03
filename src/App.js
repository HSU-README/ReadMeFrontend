<<<<<<< HEAD
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from 'pages/sign/Signup';
function App() {
  return (
    <div className="App">
      READ ME
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
=======
import LogIn from 'pages/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
>>>>>>> 8359c967f03384a4607a769229101861e5facc6e
    </div>
  );
}

export default App;
