import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/login" element={<LoginPage></LoginPage>}/>
        <Route path="/register" element={<RegisterPage></RegisterPage>}/>
        <Route path="/products" element={<h1>Products</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
