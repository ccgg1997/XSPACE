import { useEffect, useRef, useState } from 'react'
import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"
import { useFrame, useThree } from '@react-three/fiber';
import { useGame } from '../../context/GameContext';
import { useNave } from '../../context/NaveContext';

const url = "https://josem-18.github.io/sourcesPI/models/Level2.glb"
export default function Level2Environment({ args, onLoad = () => { }, collisionCallback = () => { } }) {
  const { nodes, materials, scene } = useGLTF(url);
  const { nave } = useNave();
  const { game, setGame } = useGame();
  const wallsRef = useRef();

  useEffect(() => {
    onLoad();
  }, [scene]);

  const collisionManager = (event) => {

    if (event.other.rigidBodyObject.name == "naveEspacial") {
      setGame({ ...game, paused: true, isCollided: true })
      collisionCallback();
    }

  };

  useEffect(() => {
    setGame({ ...game })
  }, [])

  useFrame(() => {
    const currentTranslation = nave.body?.translation()
    if (currentTranslation?.z < -907) {
      wallsRef.current.visible = false;
    } else {
      wallsRef.current.visible = true;
    }
  });


  return (
    <group {...args} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PARED">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials.ConcreteWall}
          position={[0, 5, -500]}
          scale={[0.369, 0.154, 15.385]}
          frustumCulled={true}
          ref={wallsRef}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PISO">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, 5, -500]}
          scale={[0.369, 0.154, 15.385]}
          frustumCulled={false}
        />
      </RigidBody>
      <RigidBody type="fixed" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst.geometry}
          material={materials['Concrete Obstacle']}
          position={[4, 5, -111.053]}
          scale={[1, 0.625, 0.25]}
          frustumCulled={true}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onCollisionEnter={collisionManager} name="obstaculo">
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
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst002.geometry}
          material={materials['Metal Obstacle']}
          position={[-4, 7.5, -163.657]}
          scale={[1, 0.313, 0.25]}
          frustumCulled={true}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst003.geometry}
          material={materials['Concrete Obstacle']}
          position={[-4, 2.5, -199.376]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst004.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -231.898]}
          scale={[0.5, 0.625, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst006.geometry}
          material={materials['Metal Obstacle']}
          position={[8, 5, -279.922]}
          scale={[0.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst005.geometry}
          material={materials['Concrete Obstacle']}
          position={[0, 2.5, -327.066]}
          scale={[1.5, 0.313, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst007.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 7.5, -410.938]}
          scale={[1.5, 0.313, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst009.geometry}
          material={materials['Concrete Obstacle']}
          position={[0, 5, -500.841]}
          scale={[1.5, 0.625, 0.25]}
        />

      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst010.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -697.953]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst011.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -595.461]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst013.geometry}
          material={materials['Metal Obstacle']}
          position={[4, 2.5, -803.294]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" onCollisionEnter={collisionManager} name="obstaculo">

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst012.geometry}
          material={materials['Metal Obstacle']}
          position={[0, 5, -908]}
          scale={[1.5, 0.625, 0.25]}
        />
      </RigidBody>
    </group>
  )

}
useGLTF.preload(url)