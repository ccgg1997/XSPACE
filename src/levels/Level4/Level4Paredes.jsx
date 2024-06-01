import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { RigidBody } from '@react-three/rapier';
import { useGame } from '../../context/GameContext';

function Pared({ args, collisionManager }) {
  const rigidBodyRef = useRef();
  const meshRef = useRef();

  const collisionEvent = (event) => {
    meshRef.current.visible = false;
    collisionManager(event);
  };
  useEffect(() => {
    if (args.userData.active) {
      meshRef.current.visible = true;
    } else {
      meshRef.current.visible = false;
    }
  }, [args])

  useEffect(() => {
    meshRef.current.visible = true;

    return () => {
      rigidBodyRef.current.sleep();
      rigidBodyRef.current.active = false;
      meshRef.current.visible = false;
    }
  }, [])


  return (
    <RigidBody ref={rigidBodyRef} type="fixed" colliders="trimesh" restitution={0} onIntersectionEnter={collisionEvent} name="objetive" sensors={true} sensor={true}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        {...args}
      />
    </RigidBody>
  );

}

export function Level4Paredes({ collisionCallback = () => { }, restart }) {
  const { nodes, materials } = useGLTF('/assets/models/Level4Paredes.glb')
  const material = new THREE.MeshStandardMaterial({ color: "blue" });
  const { game, setGame } = useGame();
  const initialparedes = [
    {
      userData: { id: "1", active: true },
      geometry: nodes.pared1.geometry,
      material: materials.Material,
      position: [-5.548, 5.305, -135.819],
      rotation: [1.542, 0, 0],
      scale: [0.608, 1, 0.874]
    },
    {
      userData: { id: "2", active: true },
      geometry: nodes.pared2.geometry,
      material: materials.Material,
      position: [0.031, 5.305, -234.438],
      rotation: [1.542, 0, 0],
      scale: [0.539, 1, 0.874]

    },
    {
      userData: { id: "3", active: true },
      geometry: nodes.pared3.geometry,
      material: materials.Material,
      position: [-0.041, 5.305, -515.515],
      rotation: [1.542, 0, 0],
      scale: [1.889, 1, 0.862]
    },
    {
      userData: { id: "4", active: true },
      geometry: nodes.pared4.geometry,
      material: materials.Material,
      position: [0.487, 5.305, -760.311],
      rotation: [1.542, 0, 0],
      scale: [0.963, 1, 0.862]
    },
  ];
  const [paredes, setParedes] = useState(initialparedes);

  const startLevel4 = () => {
    setParedes(initialparedes);
  }
  const collisionManager = (event) => {
    const id = event.target.rigidBodyObject.children[0].userData.id;
    if (event.other.rigidBodyObject.name === "projectile") {
      const rigidBody = event.target.rigidBody; // Acceder al objeto RigidBody
      rigidBody.active = false;
      // console.log('id', event.target.rigidBodyObject.children[0].userData.id)
      // console.log('list', paredes)
      // setParedes((prev) => prev.filter((pared) => pared.userData.id !== id));

      const newParedes = [...paredes];

      // Find the element with the given ID
      const elementIndex = newParedes.findIndex(pared => pared.userData.id === id);

      // If the element exists, update its name
      if (elementIndex !== -1) {
        newParedes[elementIndex].userData.active = false;
        // Update the state with the modified array
        setMyArray(newParedes);
      }

    } else if (event.other.rigidBodyObject.name == "naveEspacial" && event.target.rigidBodyObject.children[0].userData.active) {
      setGame({ ...game, paused: true, isCollided: true })
      collisionCallback();
      // startLevel4();
    }
  };

  useEffect(() => {
    if (restart === true) {
      startLevel4();
    }
  }, [restart])


  return paredes.map((pared) => (
    <Pared collisionManager={collisionManager} args={pared} />
  ));
  {/* <group dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onIntersectionEnter={collisionManager} name="objetive" sensors={true} sensor={true}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pared1.geometry}
          material={materials.Material}
          position={[-5.548, 5.305, -135.819]}
          rotation={[1.542, 0, 0]}
          scale={[0.608, 1, 0.874]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onIntersectionEnter={collisionManager} name="objetive" sensors={true} sensor={true}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pared2.geometry}
          material={materials.Material}
          position={[0.031, 5.305, -234.438]}
          rotation={[1.542, 0, 0]}
          scale={[0.539, 1, 0.874]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onIntersectionEnter={collisionManager} name="objetive" sensors={true} sensor={true}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pared3.geometry}
          material={materials.Material}
          position={[-0.041, 5.305, -515.515]}
          rotation={[1.542, 0, 0]}
          scale={[1.889, 1, 0.862]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} onIntersectionEnter={collisionManager} name="objetive" sensors={true} sensor={true}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pared4.geometry}
          material={materials.Material}
          position={[0.487, 5.305, -760.311]}
          rotation={[1.542, 0, 0]}
          scale={[0.963, 1, 0.862]}
        />
      </RigidBody> 
    </group>*/}
  // )
}

useGLTF.preload('/Level4Paredes.glb')