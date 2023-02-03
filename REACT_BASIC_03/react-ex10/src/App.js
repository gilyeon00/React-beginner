import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search';
import Watch from './pages/Watch';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} /> 
          <Route path="/watch" element={<Watch/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
