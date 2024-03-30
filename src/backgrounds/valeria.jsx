import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Valeria = () => {
    const cylinderRef = useRef(null);
    let angle = 0; 
    useFrame((state, delta) => {

      cylinderRef.current.rotation.y +=0.2;
  

      let scale = 1 + Math.sin(delta * 3) * 0.1;
      cylinderRef.current.scale.set(scale, scale, 1);
    }); 
  
    return (
      <mesh position={[10, 3, 79]}  ref={cylinderRef}>
        <cylinderGeometry args={[1, 5,6]} />
        <meshPhongMaterial color="purple" emissive={0.2} />
      </mesh>
    );
  };

export default Valeria;
