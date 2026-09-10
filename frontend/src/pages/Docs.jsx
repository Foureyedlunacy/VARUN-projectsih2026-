import React, { useState } from 'react'

function Docs() {
  const [show,setshow]=useState("ocean")

  return (
    <div className='h-[84vh] mt-24 md:mt-16  w-full flex flex-col md:flex-row'>
      <div className='flex-1 flex-col flex overflow-y-auto scrollbar-hide md:h-full border-r-2 border-gray-200'> 
        <ul>
           <li><div className='flex  border-b-2 border-gray-200 bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>Topics</div></li>
         
          <li><button onClick={()=>{setshow("ocean")}} className='flex  border-b-2 border-gray-200 bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>Ocean models</button></li>
            
            <li><button onClick={()=>{setshow("insitu")}} className='flex  border-b-2 border-gray-200 bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>In-situ observation</button></li>
              <li><button onClick={()=>{setshow("data")}} className='flex  border-b-2 border-gray-200  bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>Oceans data</button></li>
      
        <li><button onClick={()=>{setshow("netcdf")}} className='flex    border-b-2 border-gray-200 bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>File type</button></li>
        <li><button onClick={()=>{setshow("python")}} className='flex  border-b-2 border-gray-200 bg-white w-full h-12 items-center p-4 font-semibold active:bg-gray-200'>Python </button></li>
      
        
        
        
        </ul>
       

      </div>
      <div className='flex-5 p-2 flex-col flex  '>
        {show=="ocean"?<div className='p-5'>
        <h1 className='text-2xl font-bold'>Ocean Numerical Models</h1>
        <h2 className='text-2xl font-semibold'>1.1 Model Definition & Fundamental Purpose</h2>
        <h3 className='p-2'>Paragraph Description: Ocean numerical models are sophisticated software systems that simulate the physical and thermodynamic behavior of the global or regional ocean by solving the fundamental equations of fluid dynamics on supercomputers. At their core, these models discretize the continuous ocean into a three-dimensional grid made up of horizontal geographic cells and vertical depth layers. Within each grid cell, the model applies mathematical formulations of Newton's laws of motion, mass conservation, and thermodynamic principles to calculate how key seawater properties—such as temperature, salinity, velocity, and pressure—evolve over time. By incorporating atmospheric forces like surface winds, solar radiation, and freshwater inputs, ocean models can accurately reconstruct past ocean states, predict future circulation patterns, track heat transport across climate systems, and forecast hazardous marine conditions.</h3>
        <h2 className='text-2xl font-semibold'>1.2 Governing Physical Equations</h2>
        <ul className='p-2'>
          <li>Momentum Equations (Navier-Stokes on Rotating Earth): Express Newton’s Second Law (F=ma) for fluids, factoring in Coriolis force (2(omega)x U), pressure gradient forces, advection, and viscous dissipation.</li>
        <li>Continuity Equation (Mass Conservation): Enforces incompressibility under the Boussinesq approximation:</li>
        <li>Heat and Salt Conservation: Computes advection, horizontal/vertical diffusion, and air-sea boundary heat fluxes for Conservative Temperature (T) and Absolute Salinity (S).</li>
        <li>Equation of State: Calculates non-linear seawater density ($\rho$) as a function of temperature, salinity, and pressure: p=p(T,S,P)</li>
        </ul>
        <h2 className='text-2xl font-semibold'>1.3 Major Classes of Ocean Models</h2>
        <h3 className='font-semibold'>Global Ocean General Circulation Models (OGCMs)</h3>
<ul className='p-2'>
  <li>Purpose: Global climate research, heat transport, and multi-decadal projections.</li>
  <li>Resolution: 1/4° to 1/12° (approx. 10–25 km).</li>
  <li>Examples: NEMO, MOM6, HYCOM.</li>
</ul>

<h3 className='font-semibold'>Regional &amp; Coastal Hydrodynamic Models</h3>
<ul className='p-2'>
  <li>Purpose: High-resolution simulations of estuaries, tides, upwelling, and coastal shelf dynamics.</li>
  <li>Resolution: 1 km down to &lt;100 meters.</li>
  <li>Examples: ROMS, Delft3D.</li>
</ul>

<h3 className='font-semibold'>Unstructured Grid Models</h3>
<ul className='p-2'>
  <li>Purpose: Flexible triangular mesh networks for complex shorelines and shallow bays.</li>
  <li>Examples: SCHISM, FVCOM.</li>
</ul>

<h3 className='font-semibold'>Biogeochemical &amp; Ecosystem Models</h3>
<ul className='p-2'>
  <li>Purpose: Marine biogeochemistry, oxygen cycles, carbon sequestration, and primary productivity.</li>
  <li> Examples: PISCES, BFM.</li>
</ul>
<h2 className='text-2xl font-semibold'>1.4 Data Assimilation</h2>

<h3 className='font-semibold'>Variational Assimilation (3DVAR / 4DVAR)</h3>
<ul className='p-2'>
  <li>Purpose: Adjusts initial and boundary conditions over a window to minimize discrepancies between observations and model trajectories.</li>
</ul>

<h3 className='font-semibold'>Ensemble Kalman Filtering (EnKF)</h3>
<ul>
  <li>Purpose: Uses multiple concurrent model runs to estimate time-varying background errors dynamically.</li>
</ul></div>:<></>}


       {show=="insitu" ?<div className='p-5'>
        <h1 className='text-2xl font-bold'>In-Situ Ocean Observation Data</h1>
        <h2 className='text-2xl font-semibold'>2.1 Overview &amp; Role</h2>
        <h3 className='p-2'>Definition: Physical, chemical, and biological measurements taken directly within the water column, complementing surface satellite observations.</h3>
        <h2 className='text-2xl font-semibold'>2.2 Observational Platforms</h2>
        <h3 className='font-semibold'>Argo Floats</h3>
        <ul className='p-2'>
          <li>Sampling Mechanism: Autonomous profile cycles on 10-day intervals down to 2,000 m depth (Deep Argo down to 6,000 m).</li>
          <li>Primary Parameters Measured: Temperature, Salinity, Pressure, and Bio-geochemical parameters ($O_2$, pH, Nitrate, Chl-a).</li>
        </ul>

        <h3 className='font-semibold'>Underwater Gliders</h3>
        <ul className='p-2'>
          <li>Sampling Mechanism: Buoyancy-driven autonomous vehicles traversing sawtooth vertical paths along defined geographic transects.</li>
          <li>Primary Parameters Measured: Temperature, Salinity, Current Velocities, Turbidity.</li>
        </ul>

        <h3 className='font-semibold'>Moored Buoys</h3>
        <ul className='p-2'>
          <li>Sampling Mechanism: Fixed anchored surface and subsurface arrays (e.g., TAO/TRITON) recording high-frequency long-term time series.</li>
          <li>Primary Parameters Measured: Meteorology, Surface Wind Vectors, Subsurface T/S Profiles.</li>
        </ul>

        <h3 className='font-semibold'>CTD Rosettes</h3>
        <ul className='p-2'>
          <li>Sampling Mechanism: Ship-deployed high-precision Conductivity, Temperature, Depth sensor suites and water collection bottles.</li>
          <li>Primary Parameters Measured: High-precision Conductivity, Temperature, Depth, Chemical Tracers across the full water column.</li>
        </ul>

        <h3 className='font-semibold'>Surface Drifters</h3>
        <ul className='p-2'>
          <li>Sampling Mechanism: Uncrewed surface floating buoys following ocean currents while recording sea surface temperature and position.</li>
          <li>Primary Parameters Measured: GPS Trajectories (Current Velocity), Sea Surface Temp (SST), Barometric Pressure.</li>
        </ul>

        <h2 className='text-2xl font-semibold'>2.3 Quality Control (QC) Protocols</h2>
        <h3 className='font-semibold'>Real-Time Quality Control (RTQC)</h3>
        <ul className='p-2'>
          <li>Purpose: Automated pipeline checks (range bounds, position checks, spike/stuck value tests, density inversions) completed within hours of satellite transmission.</li>
        </ul>

        <h3 className='font-semibold'>Delayed-Mode Quality Control (DMQC)</h3>
        <ul className='p-2'>
          <li>Purpose: Expert scientific inspection, sensor recalibration, and climatological comparison (e.g., against World Ocean Atlas) to correct drift and biofouling.</li>
        </ul>
        </div>:<></>}



        {show=="netcdf"?<div className='p-5'>
        <h1 className='text-2xl font-bold'>NetCDF Data Format Standard</h1>
        <h2 className='text-2xl font-semibold'>3.1 Core Structural Components</h2>
        <ul className='p-2'>
          <li>Dimensions: Define array axes (e.g., time, depth, latitude, longitude). Can be fixed or UNLIMITED.</li>
          <li>Variables: N-dimensional arrays containing numerical physical data points (e.g., float temp(time, depth, lat, lon)).</li>
          <li>Coordinate Variables: One-dimensional arrays matching dimension names, holding coordinate axis values (e.g., depth in meters, exact dates).</li>
          <li>Attributes: Self-describing text/numeric metadata bound globally or to specific variables (e.g., units, standard_name, _FillValue).</li>
        </ul>

        <h2 className='text-2xl font-semibold'>3.2 Metadata Conventions</h2>
        <h3 className='font-semibold'>Climate and Forecast (CF) Conventions</h3>
        <ul className='p-2'>
          <li>Purpose: Standardized naming conventions, standard units, and coordinate attributes ensuring automated interoperability across international ocean science software.</li>
        </ul>

        <h2 className='text-2xl font-semibold'>3.3 Formats &amp; Compression</h2>
        <h3 className='font-semibold'>NetCDF-3 (Classic)</h3>
        <ul className='p-2'>
          <li>Purpose: Legacy lightweight format with structural limits on overall file and array sizes.</li>
        </ul>

        <h3 className='font-semibold'>NetCDF-4 / HDF5</h3>
        <ul className='p-2'>
          <li>Purpose: Modern engine supporting internal zlib compression, chunking for fast array slicing, and complex multi-dimensional data structures.</li>
        </ul>
        </div>:<></>}



        {show=="python"?<div className='p-5'>
        <h1 className='text-2xl font-bold'>Python in Oceanography</h1>
        <h2 className='text-2xl font-semibold'>4.1 Primary Scientific Stack</h2>
        <h3 className='font-semibold'>xarray</h3>
        <ul className='p-2'>
          <li>Purpose: Multi-dimensional, label-aware array handling with native NetCDF integration and dimension-based coordinate slicing.</li>
        </ul>

        <h3 className='font-semibold'>Dask</h3>
        <ul className='p-2'>
          <li>Purpose: Parallel processing engine enabling chunked, out-of-core operations on massive datasets exceeding system RAM.</li>
        </ul>

        <h3 className='font-semibold'>gsw (Gibbs Seawater Engine)</h3>
        <ul className='p-2'>
          <li>Purpose: Implements TEOS-10 thermodynamic standards for calculating absolute salinity, conservative temperature, potential density anomaly ($\sigma_0$), and buoyancy frequency ($N^2$).</li>
        </ul>

        <h3 className='font-semibold'>Cartopy &amp; Matplotlib</h3>
        <ul className='p-2'>
          <li>Purpose: Cartographic mapping, coordinate transformations, coastline overlays, and vector field visualization.</li>
        </ul>
        </div>:<></>}
</div>

      </div>



      
    
  )
}

export default Docs
