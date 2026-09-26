import React from 'react';
import * as THREE from 'three';

export const Suspension = ({ position, isFront = true, side = 'left' }: { position: [number, number, number], isFront?: boolean, side?: 'left' | 'right' }) => {
  const armMaterial = new THREE.MeshStandardMaterial({ 
    color: '#222222', 
    roughness: 0.4, 
    metalness: 0.8 
  });

  const xOffset = side === 'left' ? -1 : 1;
  const hubX = position[0] * xOffset;
  const chassisX = (position[0] - 0.4) * xOffset;
  const hubZ = position[2];
  const chassisZ = position[2] + (side === 'left' ? 0.2 : -0.2);
  const hubY = position[1];

  // Helper to create a simple arm
  const Arm = ({ start: s, end: e, radius = 0.015 }: { start: [number, number, number], end: [number, number, number], radius?: number }) => {
    const startVec = new THREE.Vector3(...s);
    const endVec = new THREE.Vector3(...e);
    const distance = startVec.distanceTo(endVec);
    const midpoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
    
    return (
      <mesh 
        material={armMaterial} 
        position={midpoint} 
        quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), endVec.clone().sub(startVec).normalize())}
      >
        <cylinderGeometry args={[radius, radius, distance, 8]} />
      </mesh>
    );
  };

  return (
    <group>
      {/* Upper Wishbone */}
      <Arm start={[chassisX, hubY + 0.15, chassisZ]} end={[hubX, hubY + 0.15, hubZ]} />
      <Arm start={[chassisX, hubY + 0.15, chassisZ + (side === 'left' ? 0.1 : -0.1)]} end={[hubX, hubY + 0.15, hubZ]} />
      
      {/* Lower Wishbone */}
      <Arm start={[chassisX, hubY - 0.1, chassisZ]} end={[hubX, hubY - 0.1, hubZ]} />
      <Arm start={[chassisX, hubY - 0.1, chassisZ + (side === 'left' ? 0.1 : -0.1)]} end={[hubX, hubY - 0.1, hubZ]} />

      {/* Pushrod */}
      <Arm 
        start={[chassisX + (side === 'left' ? 0.1 : -0.1), hubY + 0.2, chassisZ]} 
        end={[hubX, hubY - 0.1, hubZ]} 
        radius={0.01} 
      />

      {isFront && (
        <Arm 
          start={[chassisX, hubY, chassisZ + (side === 'left' ? 0.15 : -0.15)]} 
          end={[hubX, hubY, hubZ]} 
          radius={0.01} 
        />
      )}
    </group>
  );
};
