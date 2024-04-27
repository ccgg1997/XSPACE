import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Level5Environment(props) {
  const { nodes, materials } = useGLTF('/assets/models/Level5.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/Level5.glb')