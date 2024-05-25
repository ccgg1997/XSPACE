import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useContext } from 'react';
import { projectilesContext } from '../../context/ProjectilesContext';
import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier"
import { Sphere } from '@react-three/drei';

const Projectile = ({ position, id,limitProjectibles }) => {
  const ref = useRef();
  const { removeProjectile } = useContext(projectilesContext);
  const speed = -50;

  const collisionManager = (event) => {
      removeProjectile(id);
  }

  useFrame(() => {
    ref.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
    //eliminamos el proyectil si cumple cierto limite
    if (ref.current?.translation().z < limitProjectibles) {
      removeProjectile(id);
    }
    //si pasan 5 segundos eliminamos el proyectil
    setTimeout(() => {
      removeProjectile(id);
    }, 5000);

  });

  return (
    <RigidBody ref={ref}
      position={position}
      colliders="ball"
      gravityScale={0}
      linearVelocity={[0, 0, speed]}
      restitution={0}
      onCollisionEnter={collisionManager}
      enabledRotations={[false, false, false]}
      name='projectile'
    >
      <Sphere args={[1, 8, 8]} scale={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="red" />
      </Sphere>
    </RigidBody>
  );
};

export default Projectile;




