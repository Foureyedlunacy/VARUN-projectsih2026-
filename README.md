# VARUN: Virtual And Real Ocean Data UNified 🌊🛰️

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Framework](https://img.shields.io/badge/Frontend-React%20%7C%20Three.js-blue)
![Backend](https://img.shields.io/badge/Backend-FastAPI%20%7C%20Python-emerald)
![License](https://img.shields.io/badge/License-MIT-green)

**VARUN** is a web-based, interactive 3D visualization and analysis platform designed to unify multi-dimensional numerical ocean model outputs with real-time in-situ observational datasets. Built for disaster management authorities, oceanographers, and maritime operators, VARUN simplifies spatial-temporal ocean data exploration while delivering automated early warning alerts for marine hazards.

---

## 📌 Key Architectural Capabilities

* **Interactive 3D Geospatial Engine:** Render multi-layered 3D global ocean grids with volumetric rendering, bathymetry, depth-level slicing, and vector field streamlines.
* **Unified Data Model:** Ingests and standardizes both grid-based numerical outputs (OGCMs) and point-based in-situ profiles (Argo floats, gliders, buoys).
* **Near Real-Time (NRT) & Predictive Analytics:** Stream live observational feeds and forward-looking model forecasts to track ocean heatwaves, current vectors, salinity anomalies, and sea surface temperature (SST).
* **Automated Ocean Hazard Detection:** Algorithmic event triggering for rapid physical anomalies (e.g., tsunami surges, storm tides, extreme upwelling events).
* **Maritime Decision Support Tools:** Built-in module routing algorithms optimized for ship drift, fishing fleet advisories, and marine ecosystem monitoring.

---

## 🛠️ Tech Stack & System Architecture

### **Frontend**
* **Framework:** React.js (Component-driven UI framework)
* **3D & Spatial Engine:** React Three Fiber (R3F) / Three.js + Cesium 3D (Hybrid rendering pipeline for high-performance WebGL geographic and volumetric rendering)
* **Styling:** Tailwind CSS

### **Backend & Scientific Processing Engine**
* **API Framework:** FastAPI (Asynchronous Python REST API)
* **Multidimensional Data Engine:** `xarray`, `NumPy`, `NetCDF4` (Optimized indexing, lazy evaluation, and array operations on high-dimensional gridded datasets)
* **Thermodynamic Ocean Calculations:** `gsw` (Gibbs Seawater TEOS-10 Library for potential density, absolute salinity, and conservative temperature calculations)

### **Database & Data Pipeline**
* **Database:** MongoDB (Spatial-temporal indexing, metadata caching, and user configuration persistence)
* **Ingestion Pipelines:** Automated pipeline interfacing with Copernicus Marine Service (CMEMS) APIs and INCOIS data services.

---

## 📁 System Data Flow Architecture
