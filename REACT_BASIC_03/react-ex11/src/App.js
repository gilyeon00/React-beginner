import './App.css';
// import Counter from './component/Counter';
import Navi from './component/Navi';
import ProductList from './component/ProductList';
import Login from './component/Login'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import CartList from './component/CartList';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <BrowserRouter>
      <Navi/>
        <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/cart" element={<CartList/>} />
            <Route path="/login" element={<Login/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
