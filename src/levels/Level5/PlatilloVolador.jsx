import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function PlatilloVolador(props) {
  const platilloRef = useRef();
  const platilloBodyRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/PlatilloVolador.glb"
  );
  const { ref, actions, mixer } = useAnimations(animations, platilloRef);
  console.log(nodes);

  return (
    <RigidBody
      ref={platilloBodyRef}
      colliders={false}
      // type="fixed"
      gravityScale={0}
      enabledRotations={[false, false, false]}
      restitution={0}
      name="platilloVolador"
    >
      <group {...props} dispose={null} ref={platilloRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera.geometry}
          material={materials["Material.001"]}
          position={[0, 3.085, -1578.2]}
          scale={[4.47, 4.471, 4.987]}
        />
      </group>
    </RigidBody>
  );
}
