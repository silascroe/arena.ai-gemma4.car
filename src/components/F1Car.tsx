import React from 'react';
import * as THREE from 'three';
import { Wheel } from './Wheel';
import { Suspension } from './Suspension';

export const F1Car = () => {
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: '#004d40', // Deep Emerald Green
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
  });

  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    roughness: 0.4,
    metalness: 0.6,
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: '#d4af37', // Metallic Gold
    metalness: 1.0,
    roughness: 0.2,
  });

  // Helper to create a tapered box
  const TaperedBox = ({ pos, args, rot = [0, 0, 0], mat }) => (
    <mesh position={pos} rotation={rot} material={mat}>
      <boxGeometry args={args} />
    </mesh>
  );

  return (
    <group position={[0, 0, 0]}>
      {/* MAIN CHASSIS */}
      <group position={[0, 0.4, 0]}>
        {/* Tub */}
        <mesh material={bodyMaterial}>
          <boxGeometry args={[0.7, 0.4, 2.8]} />
        </mesh>
        {/* Tapered Nose Section */}
        <mesh material={bodyMaterial} position={[0, -0.1, 1.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.1, 1.2, 16]} />
        </mesh>
        {/* Nose Tip */}
        <mesh material={bodyMaterial} position={[0, -0.2, 2.4]}>
          <boxGeometry args={[0.5, 0.1, 0.3]} />
        </mesh>
        {/* Cockpit Surround */}
        <mesh material={carbonMaterial} position={[0, 0.2, 0.2]}>
          <boxGeometry args={[0.6, 0.3, 0.8]} />
        </mesh>
        {/* Halo */}
        <group position={[0, 0.4, 0.3]} rotation={[0, 0, 0]}>
          <mesh material={carbonMaterial} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.2, 0.03, 16, 32]} />
          </mesh>
          <mesh material={carbonMaterial} position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
          </mesh>
        </group>
      </group>

      {/* SIDEPODS - Sculpted */}
      <group position={[0.4, 0.4, 0.5]}>
        <mesh material={bodyMaterial}>
          <boxGeometry args={[0.3, 0.4, 1.2]} />
        </mesh>
        <mesh material={bodyMaterial} position={[0, -0.1, 0.3]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.3, 0.2, 0.6]} />
        </mesh>
      </group>
      <group position={[-0.4, 0.4, 0.5]}>
        <mesh material={bodyMaterial}>
          <boxGeometry args={[0.3, 0.4, 1.2]} />
        </mesh>
        <mesh material={bodyMaterial} position={[0, -0.1, 0.3]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.3, 0.2, 0.6]} />
        </mesh>
      </group>

      {/* ENGINE COVER & FIN */}
      <mesh material={bodyMaterial} position={[0, 0.7, -0.5]}>
        <boxGeometry args={[0.2, 0.5, 1.6]} />
      </mesh>
      <mesh material={bodyMaterial} position={[0, 0.9, -0.6]}>
        <boxGeometry args={[0.05, 0.3, 0.8]} />
      </mesh>

      {/* FLOOR & DIFFUSER */}
      <mesh material={carbonMaterial} position={[0, 0.15, 0.5]}>
        <boxGeometry args={[1.7, 0.1, 3.2]} />
      </mesh>
      <mesh material={carbonMaterial} position={[0, 0.2, -1.5]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.4, 0.2, 0.5]} />
      </mesh>

      {/* FRONT WING - Detailed */}
      <group position={[0, 0.15, 2.9]}>
        {/* Main Plane */}
        <mesh material={carbonMaterial}>
          <boxGeometry args={[2.2, 0.04, 0.6]} />
        </mesh>
        {/* Upper Flaps */}
        <mesh material={bodyMaterial} position={[0, 0.08, 0.1]}>
          <boxGeometry args={[2.2, 0.03, 0.2]} />
        </mesh>
        <mesh material={bodyMaterial} position={[0, 0.15, 0.2]} rotation={[0, 0, 0.1]}>
          <boxGeometry args={[1.8, 0.03, 0.1]} />
        </mesh>
        {/* Endplates */}
        <mesh material={carbonMaterial} position={[1.1, 0.1, 0]}>
          <boxGeometry args={[0.04, 0.3, 0.6]} />
        </mesh>
        <mesh material={carbonMaterial} position={[-1.1, 0.1, 0]}>
          <boxGeometry args={[0.04, 0.3, 0.6]} />
        </mesh>
      </group>

      {/* REAR WING - Detailed */}
      <group position={[0, 0.9, -1.6]}>
        {/* Main Plane */}
        <mesh material={carbonMaterial}>
          <boxGeometry args={[1.2, 0.06, 0.5]} />
        </mesh>
        {/* DRS Flap */}
        <mesh material={carbonMaterial} position={[0, 0.12, 0.05]}>
          <boxGeometry args={[1.2, 0.04, 0.4]} />
        </mesh>
        {/* Supports */}
        <mesh material={carbonMaterial} position={[0.5, -0.2, 0]}>
          <boxGeometry args={[0.04, 0.4, 0.1]} />
        </mesh>
        <mesh material={carbonMaterial} position={[-0.5, -0.2, 0]}>
          <boxGeometry args={[0.04, 0.4, 0.1]} />
        </mesh>
        {/* Endplates */}
        <mesh material={carbonMaterial} position={[0.6, 0, 0]}>
          <boxGeometry args={[0.04, 0.4, 0.5]} />
        </mesh>
        <mesh material={carbonMaterial} position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.04, 0.4, 0.5]} />
        </mesh>
      </group>

      {/* WHEELS */}
      <Wheel position={[0.9, 0.34, 2.2]} isFront />
      <Wheel position={[-0.9, 0.34, 2.2]} isFront />
      <Wheel position={[0.9, 0.34, -1.3]} />
      <Wheel position={[-0.9, 0.34, -1.3]} />

      {/* SUSPENSION */}
      <Suspension position={[0.9, 0.34, 2.2]} isFront side="right" />
      <Suspension position={[-0.9, 0.34, 2.2]} isFront side="left" />
      <Suspension position={[0.9, 0.34, -1.3]} isFront={false} side="right" />
      <Suspension position={[-0.9, 0.34, -1.3]} isFront={false} side="left" />
      
      {/* ACCENTS - Gold pinstripes */}
      <mesh material={accentMaterial} position={[0, 0.42, 0.5]}>
        <boxGeometry args={[0.75, 0.01, 2.5]} />
      </mesh>
    </group>
  );
};
