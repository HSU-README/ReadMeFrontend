import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/sign/Signup';
function App() {
  return (
    <div className="App">
      READ ME
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
