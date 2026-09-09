import React from 'react'

function Home() {
  return (
    <div className='bg-red-950 flex flex-col md:flex-row h-full w-full'>
        <div className='bg-indigo-950 flex-1 flex flex-col '>
            <div className='p-5 font-bold'>
            <h1 className='text-2xl'>Welcome</h1>
            <h2 >
                 to VARUN a platform that provide visualization of ocean model data and In-situ data in near real time in easy and interactive way.
            </h2></div>
            <div className='flex flex-col w-full p-5 '>
                
                    <input type='text' name='variable' className='bg-gray-300 p-2 pl-4  w-full border-4 border-gray-400 font-bold text-gray-500 outline-0' placeholder="Search for variables"/>
                
                


            </div>
            <ul className='bg-white p-5 h-32 overflow-y-auto scrollbar-hide'><form>
                    <li className='w-full border-4 border-b-0 border-gray-200 bg-white flex justify-start items-center h-10'>
                        <input className='m-2' type="checkbox" name='temperature'/>
                    <label className='font-semibold' for="temperature">Temperature</label>
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

                </div>

        
        </div>
        <div className='bg-gray-300 flex-3 flex-col h-100vh p-6 '>
            <div className='mb-5 gap-2 flex'><button className='bg-white p-3 rounded-md active:bg-gray-300'>Ocean Model</button> 
            <button className='bg-white p-3 rounded-md active:bg-gray-300'>In-situ</button> 
            
            </div>
            <div className='flex flex-col md:flex-row justify-around'>
                <div className='bg-gray-200 h-80  mb-5 md:h-96 md:w-96'>
                    3d to add!!

                </div>
                <div className='bg-white p-5 pt-9'>
                    <ul className='flex flex-col gap-2'>
                         <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Feild/variable</h1> <h1 className='p-2  rounded-md flex-1/2 text-center'>Value</h1> <h1 className='p-2  rounded-md flex-1/2 text-center'>Unit</h1></li>
                          
                        <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Temperature</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>C</h1></li>
                             
                               <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Salinity   </h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>psu</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Currents N</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m/s</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Depth</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m</h1></li>
                      <li className='flex justify-between gap-10 items-center px-2'><h1 className='w-60'>Currents NW</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>22.5</h1> <h1 className='p-2 bg-gray-300 rounded-md flex-1/2 text-center'>m/s</h1></li>
                     </ul>


                </div>
            </div>


        </div>
      
    </div>
  )
}

export default Home
