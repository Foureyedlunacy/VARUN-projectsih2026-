import React, { useState } from 'react'
import { BiBookAlt, BiDownload, BiFullscreen, BiLocationPlus, BiMap, BiNote, BiNotepad, BiSleepy } from 'react-icons/bi'
import { BsFillEyeFill } from 'react-icons/bs'
import Globe from '../maincomponents/Globe';

function Home() {
    const [valuela,setValuela]=useState();
    const [directionla,setDirectionla]=useState();
      const [valuelong,setValuelong]=useState();
    const [directionlong,setDirectionlong]=useState();
  return (
    <div className=' mt-24 md:mt-16 flex flex-col md:flex-row h-[210vh]  md:h-[84vh] w-full'>
        <div className=' md:fixed md:flex w-full md:w-[345px] md:top-16 md:left-0  bg-gradient-to-br from-blue-900 to-blue-500 to-green-400 flex-1 flex justify-between md:h-[91vh] flex-col '>
            <div className='p-5 font-bold text-blue-200'>
            <h1 className='text-5xl text-blue-200'>Welcome</h1>
            <h2  >
                 to VARUN a platform that provide visualization of ocean model data and In-situ data in near real time in easy and interactive way.
            </h2>
            </div>
            <div className='flex flex-col w-full p-5  '>
                
                    <input type='text' name='variable' className='bg-gray-300 p-2 pl-4  w-full border-4 border-gray-400 font-bold text-gray-500 outline-0' placeholder="Search for variables"/>
                
            </div>
            <ul className='bg-white p-5 h-[20vh] md:flex-1  overflow-y-auto scrollbar-hide'><form>
                    <li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='temperature'/>
                    <label className='font-semibold' htmlFor="temperature">Temperature</label>
                    </li>
                    <li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='salinity'/>
                    <label className='font-semibold' for="salinity">Salinity</label>
                    </li>
                    <li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='depth'/>
                    <label className='font-semibold' for="depth">Depth</label>
                    </li><li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='current_velocity_west'/>
                    <label className='font-semibold' for="current_velocity_west">Current velocity W</label>
                    </li>
                    <li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='current_velocity_east'/>
                    <label className='font-semibold' for="current_velocity_east">Current velocity E</label>
                    </li><li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='current_velocity_north'/>
                    <label className='font-semibold' for="current_velocity_north">Current velocity N</label>
                    </li><li className='w-full border-4 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='current_velocity_south'/>
                    <label className='font-semibold' for="current_velocity_south">Current velocity S</label>
                    </li>
                    

                </form>
                    
                </ul>
                <div className='flex flex-col p-4 w-full gap-2 bg-white '>
                    <div className='flex justify-between items-center'><h1>Default</h1>
                    <h1 className='p-2 bg-gray-200'>Current</h1></div>
                    <div className='flex justify-between items-center '>

                     <label for="sdate">Start date:</label>
                    <input className='bg-gray-300 p-2' type='date' placeholder='dd/mm/yyyy' name='sdate'/>
                   </div>
                   <div className='flex justify-between items-center '>

                     <label for="edate">End date:</label>
                    <input className='bg-gray-300 p-2' type='date' placeholder='dd/mm/yyyy' name='edate'/>
                   </div>
                   
    <div className="flex items-center justify-between gap-3 ">
      <label  >
        Latitude:</label>
      
      <input
        id="latitude-input"
        type="number"
        min="0"
        max="90"
        step="any"
        placeholder="0.0000"
        value={valuela}
        onChange={(e) => setValuela(e.target.value)}
        className="w-32 px-3 py-1.5 text-sm border border-gray-300 rounded-md "/>

      <select
        value={directionla}
        onChange={(e) => setDirectionla(e.target.value)}
        className="px-2 py-1.5 w-15 text-sm border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="N">N</option>
        <option value="S">S</option>
      </select>
    </div>
        <div className="flex  justify-between items-center gap-3 ">
      <label  >
        Longtitude:</label>
      
      <input
        id="longtitude-input"
        type="number"
        min="0"
        max="90"
        step="any"
        placeholder="0.0000"
        value={valuelong}
        onChange={(e) => setValuelong(e.target.value)}
        className="w-32 px-3 py-1.5 text-sm border border-gray-300 rounded-md "/>

      <select
        value={directionlong}
        onChange={(e) => setDirectionlong(e.target.value)}
        className="px-2 py-1.5 w-15 text-sm border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="W">W</option>
        <option value="E">E</option>
      </select>
    </div>

                </div>

        
        </div>
        <div className='bg-gray-300 flex-3 flex-col md:ml-[345px]  md:h-[92vh] px-4 '>
            <h1 className='font-semibold pt-3 hidden md:flex'>VARUN - <span className='text-blue-500 font-bold'>V</span>itual <span className='text-blue-500 font-bold'>A</span>nd <span className='text-blue-500 font-bold'>R</span>eal oceandata <span className='text-blue-500 font-bold'>UN</span>ified </h1>
            <h1 className='font-semibold pb-3 pt-3 md:pt-0'>Visualized data from Ocean models and In-situ observations.For more information on data check out our Documents.</h1>
            <div className='mb-5 gap-2 flex'><button className='bg-white p-3 rounded-md active:bg-gray-300'>Ocean Model</button> 
            <button className='bg-white p-3 rounded-md active:bg-gray-300'>In-situ</button> 
             <button className='bg-white p-3 rounded-md active:bg-gray-300'>Combine</button> 
           
            </div>
            <div className='flex flex-col  bg-amber-500  h-[100vh]  md:h-[60vh] md:flex-row   justify-between'>
                <div className='bg-gray-200 md:flex-1 z-10 h-[500px]  '>




<Globe/>
                </div>
                <div className='bg-white h-full p-5 pt-9'>
                    <ul className='flex flex-col gap-2'>
                         <li className='flex justify-between gap-10 font-bold items-center px-2'><h1 className='w-60'>Feild/variable</h1> <h1 className='p-2  rounded-md flex-1/2 text-center'>Value</h1> <h1 className='p-2  rounded-md flex-1/2 text-center'>Unit</h1></li>
                          
                        <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Temperature</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>C</h1></li>
                             
                               <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Salinity   </h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>psu</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Currents N</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m/s</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Depth</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Currents NW</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m/s</h1></li>
                     </ul>


                </div>
             
            </div>
            <div className=' flex md:flex-row flex-col'>
                <div className=' md:flex-1 flex items-center p-1 h-15 w-full gap-3'>
                    <button className='p-3 font-bold bg-white rounded-sm active:bg-blue-400 active:text-white'><BiFullscreen/></button>
                    <button className='p-3 font-bold bg-white rounded-sm active:bg-blue-400 active:text-white'><BiBookAlt/></button>
                    <button className='p-3 font-bold bg-white rounded-sm active:bg-blue-400 active:text-white'><BiDownload/></button>
                    <button className='p-3 font-bold bg-white rounded-sm active:bg-blue-400 active:text-white'><BsFillEyeFill/></button>
                     <button className='p-3 font-bold bg-white rounded-sm active:bg-blue-400 active:text-white'><BiMap/></button>
                    


                </div>
                <div className='p-3 md:flex-1 flex  m-2 items-center  bg-white rounded-sm active:bg-blue-400 active:text-white'> <h3>Note: the variable value are average of looked up Area!</h3></div>

                </div>

        </div>
      
    </div>
  )
}

export default Home
