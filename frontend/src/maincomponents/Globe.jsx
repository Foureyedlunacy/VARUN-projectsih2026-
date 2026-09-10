import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';


function EarthMesh() {
  const meshRef = useRef();

  
  const [colorMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
  ]);


  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
 
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      
      <mesh>
        <sphereGeometry args={[2.08, 64, 64]} />
        <meshBasicMaterial
          color="#4299e1"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}


export default function Globe() {
  return (
    <div style={{ width: '100', height: '60vh', background: '#050816' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true }}
      >
     
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 3, 5]} intensity={2.5} />
        <pointLight position={[-5, -3, -5]} intensity={0.5} />

      
        <React.Suspense fallback={null}>
          <EarthMesh />
        </React.Suspense>

       
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          rotateSpeed={0.8}
          zoomSpeed={0.8}
          minDistance={3.2}  
          maxDistance={12}  
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}