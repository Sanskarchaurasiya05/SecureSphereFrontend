import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { useRef } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import EmailVerify from '../pages/EmailVerify';

const Menubar = () => {
  const navigate = useNavigate();
  const {userData,BACKEND_URL,setIsLoggedIn,setUserData} = useContext(AppContext);
  const [dropdownOpen,setdropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
   useEffect(()=>{
  const handleClickOutside=(event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
      setdropdownOpen(false);
    }
  };

  document.addEventListener("mousedown",handleClickOutside);
  return () => document.removeEventListener("mousedown",handleClickOutside);
},[]);

const handleLogout = async()=>{
  try{
    axios.defaults.withCredentials=true;
    const response = await axios.post(BACKEND_URL+"/logout");
    if(response.status===200){
      setIsLoggedIn(false);
      setUserData(false);
      navigate("/")
    }
  }catch(err){
   const message = err?.response?.data?.message || "Something went wrong";
    toast.error(message);
  }
}

const handleClick =() =>{
   navigate("/email-verify");
}

// api call for sending otp
const sendVerificationOtp = async()=>{
  try{
    axios.defaults.withCredentials=true;
   const response = await axios.post(BACKEND_URL+"/send-otp");
   if(response.status===200){
    navigate("/email-verify");
    toast.success("OTP has been sent successfully.");
   }else{
    toast.error("unable to send OTP")
   }
  }catch(e){
    toast.message(e.response.data.message);
  }
}

  return (
   <nav className="navbar bg-white px-5 py-4 d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center gap-2">
         <img src={assets.OIP} alt="logo" width={32} height={32}/>
         <span className="fw-bold fs-4 text-dark">SecureSphere</span>
      </div>
       
       {userData?(
        <div className="position-relative" ref={dropdownRef}>
          <div className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center"
              
              style={{
                width:"40px",
                height:"40px",
                cursor:"pointer",
                userSelect:"none",
              }}
              onClick={()=>setdropdownOpen((prev)=>!prev)}
              >
                    {userData.name[0].toUpperCase()}
          </div>
                   {dropdownOpen && (
                    <div className="position-absolute shadow bg-white rounded p-2"
                    style={{
                      top:"50px",
                      right:0,
                      zIndex:100,
                    }}
                    >
                       {!userData.isAccountVerified && (
                        <div className="dropdown-item py-1 px-2" style={{cursor:"pointer"}}
                        onClick={sendVerificationOtp} >
                        Verify email
                        </div>
                       )}
                          <div className="dropdown-item py-1 px-2 text-danger"style={{cursor:"pointer"}}
                             onClick={handleLogout}
                          >
                            Logout
                          </div>
                    </div> 
                   )}
        </div>
       ):(
 <div className="btn btn-outline-dark rounded-pill px-3 " onClick={() =>navigate("/login")}>
      Login <i className="bi bi-arrow-right ms-2"></i>
     </div>
       )}


    

    </nav>
   
  )
}

export default Menubar