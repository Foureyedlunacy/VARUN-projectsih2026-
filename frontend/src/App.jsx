import React, { useEffect, useState, } from 'react';
import axios from 'axios';


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
    <div className="h-16 bg-blue-400 flex flex-row justify-around items-center">
      <div className='h-full ml-10 flex-3 flex items-center font-black text-2xl'>
  {users.message}
      </div>
      <ul className='flex flex-row justify-evenly flex-5 h-full items-center font-semibold'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>DOCS</li>
        <li>LOGIN</li>
      </ul>
    </div>
 
    </>
  )
}

export default App
