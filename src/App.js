import './App.css';
import { Routes, Route } from "react-router-dom";

// routes
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SellerMain from './pages/SellerMain';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller-main" element={<SellerMain />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
