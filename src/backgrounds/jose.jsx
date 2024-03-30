import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";

const Jose = () => {
  const dodecahedronRef = useRef(null);
  let yPosition = 0; // Bouncing position

  useFrame((state, delta) => {
    yPosition += Math.sin(delta * 5) + yPosition; 
    dodecahedronRef.current.rotation.y+=0.1;
  });

  return (
    <mesh position={[10,1,152]} ref={dodecahedronRef}>
      <dodecahedronGeometry args={[1]} />
      <meshPhongMaterial color="orange" />
    </mesh>
  );
};

export default Jose;
