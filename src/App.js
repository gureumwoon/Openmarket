import './App.css';
import { Routes, Route } from "react-router-dom";

// routes
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SellerMain from './pages/SellerMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seller-main" element={<SellerMain />} />
      </Routes>
    </div>
  );
}

export default App;
