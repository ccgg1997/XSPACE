import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Level4Environment({ args, onLoad = () => { } }) {
  const { nodes, materials, scene } = useGLTF('/assets/models/Level4.glb')

  useEffect(() => {
    onLoad();
  }, [scene]);

  return (
    <group {...args} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.Walls}
        position={[0, 5, -245]}
        scale={[0.369, 0.154, 7.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0, 5, -245]}
        scale={[0.369, 0.154, 7.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst001.geometry}
        material={materials.Bridge}
        position={[0, 5, -35.309]}
        scale={[1.5, 0.625, 0.938]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst002.geometry}
        material={materials.Wall}
        position={[7.093, 6.328, -82.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst003.geometry}
        material={materials.Wall}
        position={[-4.465, 6.328, -98.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst004.geometry}
        material={materials.Wall}
        position={[6.954, 6.328, -118.817]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst005.geometry}
        material={materials.Wall2}
        position={[7.235, 7.446, -132.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst007.geometry}
        material={materials.Wall2}
        position={[7.235, 7.446, -177.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst006.geometry}
        material={materials.Wall2}
        position={[-4.506, 2.397, -156.922]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst008.geometry}
        material={materials.Wall2}
        position={[-4.506, 2.397, -203.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst009.geometry}
        material={materials.Bridge}
        position={[0, 5, -243.856]}
        scale={[1.5, 0.625, 0.938]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst011.geometry}
        material={materials.Cones}
        position={[-6.655, 4.607, -287.565]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst012.geometry}
        material={materials.Cones}
        position={[-7.357, 4.607, -322.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst013.geometry}
        material={materials.Cones}
        position={[8.515, 4.607, -301.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst014.geometry}
        material={materials.Cones}
        position={[6.401, 4.607, -343.86]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst010.geometry}
        material={materials.Cones}
        position={[4.513, 4.607, -269.444]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst015.geometry}
        material={materials.Cones}
        position={[-4.287, 4.607, -364.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.obst016.geometry}
        material={materials.Cones}
        position={[6.426, 4.607, -387.299]}
      />
    </group>
  )
}

// useGLTF.preload('/assets/models/Level4.glb')