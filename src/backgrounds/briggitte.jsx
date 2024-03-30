import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Briggite = () => {
  const sphereRef = useRef(null);

  useFrame((state, delta) => {

    sphereRef.current.position.x = 10-7 * Math.cos(state.clock.getElapsedTime());

    sphereRef.current.rotation.y += 0.3 * delta; 
  });

  return (
    <>
      <mesh position={[20, 2, 42]} ref={sphereRef} >
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="green" />
      </mesh>
    </>
  );
};

export default Briggite;
