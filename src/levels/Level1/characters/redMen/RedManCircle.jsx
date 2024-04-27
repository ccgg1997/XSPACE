import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RigidBody, BallCollider } from '@react-three/rapier';

export default function RedManCircle(props) {
  const redManCircleRef = useRef(null);
  const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManCircle.glb');

  const radius = 3.5;
  const speed = 1.5;
  const blackMaterial = { color: "black" };

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const angle = elapsedTime * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // Calcular el ángulo de rotación en función de la posición
    const newAngle = Math.atan2(z, x);

    redManCircleRef.current.setNextKinematicTranslation({ 
      x: props.position[0] != null ? props.position[0] + x : x, 
      y: props.position[1] != null ? props.position[1]:0, 
      z: props.position[2] != null ? props.position[2] + z : z 
    });
    redManCircleRef.current.setNextKinematicRotation({ y: newAngle }); 
  });

  return (
    <>
      <RigidBody 
        ref={redManCircleRef}
        colliders={false} // Desactivamos los colisionadores automáticos
        type="kinematicPosition" // Indicamos que la posición será cinemática
      >
        <BallCollider args={[1]} /> {/* Ajusta el radio según el tamaño del objeto */}
        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="Rigid">
              <skinnedMesh
                name="RedManCircle"
                geometry={nodes.RedManCircle.geometry}
                material={materials.redManCircleMaterial}
                skeleton={nodes.RedManCircle.skeleton}
              />
              <primitive object={nodes.root} />
            </group>
          </group>
        </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload('/assets/models/red-mens/RedManCircle.glb');