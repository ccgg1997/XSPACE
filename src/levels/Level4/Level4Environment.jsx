import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import { useGame } from '../../context/GameContext';



export default function Level4Environment({ args, onLoad = () => { }, collisionCallback = () => { } }) {
  const { nodes, materials, scene } = useGLTF('/assets/models/Level4.glb')
  const { game, setGame } = useGame();

  useEffect(() => {
    onLoad();
  }, [scene]);

  const collisionManager = (event) => {

    if (event.other.rigidBodyObject.name == "naveEspacial") {
      setGame({ ...game, paused: true, isCollided: true })
      collisionCallback();
    }

  };

  return (
    <group dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PARED">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials.Walls}
          position={[0, 5, -499.729]}
          scale={[0.369, 0.154, 15.385]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PISO">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, 5, -499.729]}
          scale={[0.369, 0.154, 15.385]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst001.geometry}
          material={materials.Bridge}
          position={[0, 5, -42.569]}
          scale={[1.5, 0.625, 0.938]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst002.geometry}
          material={materials.Wall}
          position={[7.093, 6.328, -89.801]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst003.geometry}
          material={materials.Wall}
          position={[-4.465, 6.328, -106.024]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst004.geometry}
          material={materials.Wall}
          position={[6.954, 6.328, -126.077]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst005.geometry}
          material={materials.Wall2}
          position={[7.235, 7.446, -139.78]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst007.geometry}
          material={materials.Wall2}
          position={[7.235, 7.446, -184.89]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst006.geometry}
          material={materials.Wall2}
          position={[-4.506, 2.397, -164.182]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst008.geometry}
          material={materials.Wall2}
          position={[-4.506, 2.397, -210.442]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst009.geometry}
          material={materials.Bridge}
          position={[0, 5, -251.116]}
          scale={[1.5, 0.625, 0.938]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst011.geometry}
          material={materials.Cones}
          position={[-6.655, 4.607, -294.825]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst012.geometry}
          material={materials.Cones}
          position={[-7.357, 4.607, -329.664]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst013.geometry}
          material={materials.Cones}
          position={[8.515, 4.607, -308.467]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst014.geometry}
          material={materials.Cones}
          position={[6.401, 4.607, -351.12]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst010.geometry}
          material={materials.Cones}
          position={[4.513, 4.607, -276.704]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst015.geometry}
          material={materials.Cones}
          position={[-4.287, 4.607, -371.32]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst016.geometry}
          material={materials.Cones}
          position={[6.426, 4.607, -394.559]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst017.geometry}
          material={materials['Metal Obstacle']}
          position={[4, 2.5, -417.705]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst018.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 7.5, -473.979]}
          scale={[1.5, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst019.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -567.247]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst020.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 2.391, -627.48]}
          scale={[1.5, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst021.geometry}
          material={materials.Wall}
          position={[-4.465, 6.328, -513.265]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst022.geometry}
          material={materials.Wall}
          position={[6.878, 6.328, -462.638]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst023.geometry}
          material={materials.Wall2}
          position={[7.235, 7.446, -674.151]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst024.geometry}
          material={materials.Wall2}
          position={[-4.341, 7.446, -718.779]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst025.geometry}
          material={materials.Bridge}
          position={[0, 5, -891.465]}
          scale={[1.5, 0.625, 0.938]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.obst026.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -824.542]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/Level4.glb')