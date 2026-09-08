import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [users, setUsers] = useState([]);




useEffect(() => {
axios.get('http://localhost:8085/')
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
    <div className="flex justify-center items-center h-100vh">
      <div className="bg-red-900 h-72 w-72">
        {users.message}

      </div></div>
    </>
  )
}

export default App
