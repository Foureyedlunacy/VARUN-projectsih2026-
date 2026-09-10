import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const [loggedin,setloggedin]=useState(false)
  return (
    <div>
       <div className="md:h-16 h-24 bg-blue-400 fixed top-0 left-0 w-full flex flex-col md:flex-row justify-around items-center">
            <div className='md:h-full pl-10 md:flex-3 shadow-md md:shadow-none w-full  flex-1 sm:w-full flex flex-row justify-start items-center  font-black text-2xl'>
        {props.users || "backendoffline"}
            </div>
            <ul className='flex flex-row w-full justify-evenly gap-5 flex-1   md:flex-5  md:h-full items-center font-semibold'>
              <li className=' justify-center h-full flex-1 flex items-center px-2
              hover:shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.2),10px_0_15px_-10px_rgba(0,0,0,0.2)]
              active:text-blue-200 active:font-bold
              transition ease
              
              ' ><Link to="/home">Home</Link></li>
              <li className='h-full justify-center flex-1 flex items-center  px-2
              hover:shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.2),10px_0_15px_-10px_rgba(0,0,0,0.2)]
              active:text-blue-200 active:font-bold
              transition ease' ><Link to="/docs">Documents</Link></li>
              <li className=' h-full justify-center flex-1 flex items-center  px-2
              hover:shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.2),10px_0_15px_-10px_rgba(0,0,0,0.2)]
              active:text-blue-200 active:font-bold
              transition ease' ><Link to="/about">About</Link></li>
              {loggedin?<li><Link to="/profile">Profile</Link></li>:<li className='w-[200px]  justify-center flex items-center  '><Link className='bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-blue-200 active:text-blue-200 font-bold active:bg-blue-900 transition ease px-1 ' to="/Signin">Signin</Link></li>}
            
             
            </ul>
          </div>
    </div>
  )
}

export default Navbar
