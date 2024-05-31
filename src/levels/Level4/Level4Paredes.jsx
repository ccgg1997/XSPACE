import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";

export function Level4Paredes(props) {
  const { nodes, materials } = useGLTF('/assets/models/Level4Paredes.glb')
  const material = new THREE.MeshStandardMaterial({ color: "blue" });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pared1.geometry}
        material={materials.Material}
        position={[-5.548, 5.305, -135.819]}
        rotation={[1.542, 0, 0]}
        scale={[0.608, 1, 0.874]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pared2.geometry}
        material={materials.Material}
        position={[0.031, 5.305, -234.438]}
        rotation={[1.542, 0, 0]}
        scale={[0.539, 1, 0.874]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pared3.geometry}
        material={materials.Material}
        position={[-0.041, 5.305, -515.515]}
        rotation={[1.542, 0, 0]}
        scale={[1.889, 1, 0.862]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pared4.geometry}
        material={materials.Material}
        position={[0.487, 5.305, -760.311]}
        rotation={[1.542, 0, 0]}
        scale={[0.963, 1, 0.862]}
      />
    </group>
  )
}

useGLTF.preload('/Level4Paredes.glb')