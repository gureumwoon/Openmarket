import './App.css';
import { Routes, Route } from "react-router-dom";

// routes
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Main from './pages/Main';
import SellerCenter from './pages/SellerCenter';
import Upload from './pages/Upload';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/PaymentPage';
import Search from './pages/Search';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/seller-center" element={<SellerCenter />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit/:id" element={<Upload />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
