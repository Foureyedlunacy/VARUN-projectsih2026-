import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import {Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from './maincomponents/Navbar';
import Home from './pages/Home';
import Docs from './pages/Docs';
import About from './pages/About';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
const [users, setUsers] = useState([]);




useEffect(() => {
axios.get('https://varun-projectsih2026.onrender.com/')
.then(response => {
  console.log(response,"respom");
setUsers(response.data); 


})
.catch(err => {
console.log(err.message,"error");
});
}, []);


 

  return (
    <>
   <Navbar users={users.message}/>
   <Routes>
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/docs" element={<Docs/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<signup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
   </Routes>

 
    </>
  )
}

export default App
