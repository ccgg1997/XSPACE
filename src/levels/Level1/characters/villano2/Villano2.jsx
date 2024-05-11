import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export default function ddVillano2(props) {
    const { nodes, materials } = useGLTF('/assets/models/villano2/villano2.glb')
    return (
        <group {...props} dispose={null}>
            <RigidBody type="fixed" colliders="trimesh" >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ch34.geometry}
                    material={materials.phong1}
                    position={[-1.687, 0.056, -50.694]}
                    rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.014}
                /></RigidBody>
        </group>
    )
}

useGLTF.preload('/assets/models/villano2/villano2.glb')
