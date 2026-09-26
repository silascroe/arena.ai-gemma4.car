import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing';
import { F1Car } from './F1Car';
import { ControlsGuide } from './ControlsGuide';

export const Experience = () => {
  return (
    <div className="w-full h-screen bg-neutral-900">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={40} />
        <color attach="background" args={['#0a0a0a']} />
        
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment="city" adjustCamera={false}>
            <F1Car />
          </Stage>
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -0.01, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
          <EffectComposer>
            <SSAO intensity={1.5} radius={0.2} />
            <Bloom luminanceThreshold={1} intensity={0.5} />
          </EffectComposer>
        </Suspense>

        <OrbitControls 
          makeDefault 
          minPolarAngle={0} 
          maxPolarAngle={Math.PI / 2.1} 
          minDistance={3} 
          maxDistance={10}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
      <ControlsGuide />
    </div>
  );
};
