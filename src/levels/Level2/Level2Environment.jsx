import { useEffect } from 'react'
import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function Level2Environment({ args, onLoad = () => { } }) {
  // const {nodes, materials} =useGLTF('/assets/models/world/squisgame.glb');
  const { nodes, materials, scene } = useGLTF('/assets/models/Level2.glb');
  useEffect(() => {
    onLoad();
  }, [scene]);
  return (
    <group {...args} dispose={null} frustumCulled={false}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials.ConcreteWall}
          position={[0, 5, -245]}
          scale={[0.369, 0.154, 7.538]}
          frustumCulled={true}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, 5, -245]}
          scale={[0.369, 0.154, 7.538]}
          frustumCulled={false}
        />
      </RigidBody>
      <RigidBody type="fixed" restitution={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst.geometry}
          material={materials['Concrete Obstacle']}
          position={[4, 5, -132.19]}
          scale={[1, 0.625, 0.25]}
          frustumCulled={true}
        />
      </RigidBody>
      <RigidBody type="fixed" restitution={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst001.geometry}
          material={materials['Concrete Obstacle']}
          position={[4, 2.5, -74.167]}
          scale={[1, 0.313, 0.25]}
          frustumCulled={true}
        />

      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst002.geometry}
          material={materials['Metal Obstacle']}
          position={[-4, 7.5, -102.53]}
          scale={[1, 0.313, 0.25]}
          frustumCulled={true}
        />
      </RigidBody>
      <RigidBody type="fixed">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst003.geometry}
          material={materials['Concrete Obstacle']}
          position={[-4, 2.5, -159.322]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst004.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -186.243]}
          scale={[0.5, 0.625, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst006.geometry}
          material={materials['Metal Obstacle']}
          position={[8, 5, -214.568]}
          scale={[0.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst005.geometry}
          material={materials['Concrete Obstacle']}
          position={[0, 2.5, -240.934]}
          scale={[1.5, 0.313, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst007.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 7.5, -270.591]}
          scale={[1.5, 0.313, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst009.geometry}
          material={materials['Concrete Obstacle']}
          position={[0, 5, -298.775]}
          scale={[1.5, 0.625, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst010.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -362.937]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst011.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -328.823]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst013.geometry}
          material={materials['Metal Obstacle']}
          position={[4, 2.5, -400.642]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst012.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -438.033]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
    </group>
  )

}
// useGLTF.preload('/assets/models/Level2.glb')