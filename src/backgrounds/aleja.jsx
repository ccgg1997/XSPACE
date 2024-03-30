import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Aleja = () => {
  const sphereRef = useRef(null);

  useFrame((state, delta) => {

    sphereRef.current.position.z = 42+6.5* Math.sin(state.clock.getElapsedTime());

    sphereRef.current.rotation.x += 0.3 * delta; 
  });

  return (
    <>
      <mesh position={[10, 2, 62]} ref={sphereRef} >
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="green" />
      </mesh>
    </>
  );
};

export default Aleja;
