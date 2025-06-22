import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Home from "./pages/Home.jsx";
import Login from './pages/Login.jsx';
import EmailVerify from './pages/EmailVerify.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import HeroSection from './components/HeroSection.jsx';

const App = () => {
  

  return (
   <div>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/email-verify" element={<EmailVerify />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/Hero" element={<HeroSection/>}/>
  </Routes>
    </div>
  )
}

export default App
