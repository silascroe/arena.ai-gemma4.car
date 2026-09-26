import React from 'react';
import * as THREE from 'three';

export const Wheel = ({ position, isFront = false }: { position: [number, number, number], isFront?: boolean }) => {
  const tireMaterial = new THREE.MeshStandardMaterial({ 
    color: '#111111', 
    roughness: 0.8, 
    metalness: 0.2 
  });
  const rimMaterial = new THREE.MeshStandardMaterial({ 
    color: '#333333', 
    roughness: 0.3, 
    metalness: 0.9 
  });

  return (
    <group position={position}>
      {/* Tire */}
      <mesh material={tireMaterial} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.34, 0.34, 0.4, 32]} />
      </mesh>
      {/* Rim Outer */}
      <mesh material={rimMaterial} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.38, 32]} />
      </mesh>
      {/* Rim Spokes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} material={rimMaterial} rotation={[0, (i * Math.PI * 2) / 5, Math.PI / 2]}>
          <boxGeometry args={[0.4, 0.05, 0.1]} />
        </mesh>
      ))}
      {/* Brake Disc */}
      <mesh material={rimMaterial} rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
      </mesh>
    </group>
  );
};
