import './App.css';
import { Routes, Route } from "react-router-dom";

// routes
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SellerMain from './pages/SellerMain';
import SellerCenter from './pages/SellerCenter';
import Upload from './pages/Upload';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller-main" element={<SellerMain />} />
        <Route path="/seller-center" element={<SellerCenter />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
