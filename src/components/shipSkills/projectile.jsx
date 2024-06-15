import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { projectilesContext, useProjectiles } from '../../context/ProjectilesContext';
import * as THREE from 'three';
import { RigidBody } from "@react-three/rapier"
import { Sphere } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useGame } from '../../context/GameContext';

const Projectile = ({ position, id, speed, color = "red" }) => {
  const ref = useRef();
  const { removeProjectile } = useProjectiles(projectilesContext);
  const creationProjectileTimeRef = useRef(Date.now());
  const { game } = useGame();
  // //verificacion de los parametros
  if (position === undefined || id === undefined || id === null || position === null || speed === undefined || speed === null) {
    console.error("Projectile component: Missing required props 'position','id' or 'speed'");
    return null; // Retornar null para no renderizar nada
  }

  const collisionManager = (event) => {
    removeProjectile(id);
  }

  useFrame(() => {
    if (!game.paused) {
      ref.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
      //si pasan 5 segundos eliminamos el proyectil
      const currentTime = Date.now();
      const elapsed = (currentTime - creationProjectileTimeRef.current) / 1000;
      if (elapsed > 5000) {
        removeProjectile(id);
      }
    } else {
      ref.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
    }

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
        <meshStandardMaterial color={color} />
      </Sphere>
    </RigidBody>
  );
};

// //verificacion de proporcion de los parametros
// Projectile.propTypes = {
//   position: PropTypes.arrayOf(PropTypes.number).isRequired,
//   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// }

export default Projectile;





