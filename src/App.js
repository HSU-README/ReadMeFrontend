import LogIn from 'pages/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
