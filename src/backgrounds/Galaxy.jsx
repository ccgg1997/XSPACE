import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

// Componente Star para representar una estrella
const Star = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const Galaxy = () => {
  const cameraRef = useRef();
  const [speed, setSpeed] = useState(2); // Velocidad de avance
  const starsRef = useRef();

  const numStars = 1000;
  const stars = Array.from({ length: numStars }, () => {
    return {
      position: new Vector3(Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400),
      velocity: Math.random() * 2,
    };
  });

  useFrame(() => {
    cameraRef.current.position.z -= speed;

    // Actualiza las posiciones de las estrellas
    starsRef.current.children.forEach((star, index) => {
      const { velocity } = stars[index];
      star.position.z += velocity;

      if (star.position.z > 200) {
        star.position.z = -200;
      }
    });
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} />
      <group ref={starsRef}>
        {/* Renderizar cada estrella */}
        {stars.map((star, index) => (
          <Star key={index} position={star.position} />
        ))}
      </group>
    </>
  );
};

export default Galaxy;
