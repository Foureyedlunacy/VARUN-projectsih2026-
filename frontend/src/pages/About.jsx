import React from 'react'

function About() {
  return (
    <div>
      <div className='flex-5 mt-24 md:mt-16 flex-col flex h-full '>
        <div className='p-5'>
        <h1 className='text-2xl font-bold'>Project Overview &amp; Solution: VARUN</h1>
        <h2 className='text-2xl font-semibold'>5.1 Problem Statement &amp; Problem Overview</h2>
        <h3 className='p-2'>Title: Develop a web-based interactive 3D visualization platform that integrates numerical ocean model outputs and in-situ observations[cite: 3].</h3>
        <h3 className='p-2'>National Disaster Management Authority: Lack unified interactive, visualized platform to monitor ocean data[cite: 3].</h3>
        <h3 className='p-2'>Local Disaster Management Authority: Majority of staff at lower level departments have a hard time navigating through complex datasets by themselves[cite: 3].</h3>
        <h3 className='p-2'>Educational Institutes &amp; Researchers: Have a hard time focusing on research with all the manual data handling and utilization overhead[cite: 3].</h3>

        <h2 className='text-2xl font-semibold'>5.2 Proposed Solution (VARUN)</h2>
        <h3 className='p-2'>Definition: Virtual And Real ocean data UNified (VARUN) — an interactive 3D visualization platform for ocean model outputs and in-situ observations[cite: 3].</h3>
        <ul className='p-2'>
          <li>Provides 3D interactive visualizations of ocean physical variables (temperature, salinity, current vectors, pressure)[cite: 3].</li>
          <li>Integrates near-real-time observations and future predicted datasets from numerical ocean models[cite: 3].</li>
          <li>Includes an automated alert system for ocean-driven hazards such as tsunamis and storm surges/high tides[cite: 3].</li>
          <li>Features complimentary tools: ship route optimization based on current flows, fishing fleet guidance, marine life monitoring, and El Niño/La Niña tracking[cite: 3].</li>
        </ul>

        <h2 className='text-2xl font-semibold'>5.3 Tech Stack &amp; Implementation Architecture</h2>
        <h3 className='font-semibold'>Frontend Stack</h3>
        <ul className='p-2'>
          <li>React.js for modular user interface component architecture[cite: 3].</li>
          <li>3D Data Visualization powered by React Three Fiber (R3F) and Cesium 3D integration[cite: 3].</li>
        </ul>

        <h3 className='font-semibold'>Backend &amp; Processing</h3>
        <ul className='p-2'>
          <li>FastAPI framework for high-performance RESTful API services[cite: 3].</li>
          <li>Python numerical stack (xarray, NumPy, NetCDF4) for multidimensional array processing[cite: 3].</li>
          <li>MongoDB for metadata, spatial indexing, and configuration persistence[cite: 3].</li>
        </ul>

        <h3 className='font-semibold'>Data Sources</h3>
        <ul className='p-2'>
          <li>Global Ocean Physics Reanalysis &amp; In-Situ NRT Data from Copernicus Marine Service[cite: 3].</li>
          <li>Oceanographic observation datasets &amp; advisories from INCOIS (Ministry of Earth Sciences, India)[cite: 3].</li>
        </ul>

        <h2 className='text-2xl font-semibold'>5.4 Key Benefits &amp; Impact</h2>
        <h3 className='font-semibold'>Social Impact</h3>
        <ul className='p-2'>
          <li>Enhances coastal emergency response and early disaster preparedness through automated hazard alerting[cite: 3].</li>
        </ul>

        <h3 className='font-semibold'>Economic &amp; Operational Impact</h3>
        <ul className='p-2'>
          <li>Optimizes shipping routes and fishing fleet operations via ocean current analysis, lowering operational costs[cite: 3].</li>
          <li>Utilizes open-source data pipelines and low-cost architecture[cite: 3].</li>
        </ul>

        <h3 className='font-semibold'>Environmental &amp; Research Impact</h3>
        <ul className='p-2'>
          <li>Assists marine biologists in tracking marine ecosystems, heatwaves, and ocean deposits[cite: 3].</li>
          <li>Provides researchers and oceanographers with intuitive 3D multidimensional data exploration without data-handling friction[cite: 3].</li>
        </ul>
        </div>
</div>
    </div>
  )
}

export default About
