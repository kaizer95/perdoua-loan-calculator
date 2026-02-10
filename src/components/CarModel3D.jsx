import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';

// 3D Model component with auto-rotation
const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  
  // Auto-rotate the model (medium speed: ~10 seconds per rotation)
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.6; // 360° in ~10 seconds
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1}
      position={[0, 0, 0]}
    />
  );
};

// Loading spinner component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }}>
    <div className="loading-spinner" />
  </div>
);

// Main 3D Viewer component
const CarModel3D = ({ url }) => {
  return (
    <div className="car-3d-container">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 45 }}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true 
        }}
      >
        <Suspense fallback={null}>
          {/* Default lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          
          {/* Environment for better material reflections */}
          <Environment preset="city" />
          
          {/* The 3D model */}
          <Model url={url} />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Preload the model
useGLTF.preload('/src/assets/traz.glb');

export default CarModel3D;
