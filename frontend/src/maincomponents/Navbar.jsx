import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const [loggedin,setloggedin]=useState(false)
  return (
    <div>
       <div className="md:h-16 h-32 bg-blue-400 flex flex-col md:flex-row justify-around items-center">
            <div className='md:h-full pl-10 md:flex-3 w-full  flex-1 sm:w-full flex flex-row justify-start items-center  font-black text-2xl'>
        {props.users || "backendoffline"}
            </div>
            <ul className='flex flex-row justify-evenly gap-5 flex-1  md:flex-5  md:h-full items-center font-semibold'>
              <Link to="/home"><li>Home</li></Link>
              <Link to="/docs"><li>Documents</li></Link>
              <Link to="/about"><li>About</li></Link>
              {loggedin?<Link to="/profile"><li>Profile</li></Link>:<Link className='bg-white h-8 p-2 flex items-center border-2 border-blue-800 text-blue-800 hover:bg-blue-500 transition ease  ' to="/Signin"><li>Signin</li></Link>}
            
             
            </ul>
          </div>
    </div>
  )
}

export default Navbar
