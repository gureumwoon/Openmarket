import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { api } from './shared/api';

// routes
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Main from './pages/Main';
import SellerCenter from './pages/SellerCenter';
import Upload from './pages/Upload';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/PaymentPage';


function App() {
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState(true)
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get(`/products/?page=${page}`).then((res) => {
      setList((prev) => prev.concat(res.data.results))//리스트 추가
      setPage(prev => prev + 1)
    }).catch((error) => {
      setMoreData(false)
      return;
    })
  }, [page])


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
        <Route path="/cart" element={<ShoppingCart list={list} page={page} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
