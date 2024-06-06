import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useGame } from "../../context/GameContext";
import { useState } from "react";

export default function PlatilloVolador(props) {
  const platilloBodyRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/PlatilloVolador.glb"
  );
  const { setMessage,togglePause } = useGame();
  const [live,setLive] = useState(100);
  const [position, setPosition] = useState([0, 3.085, -1578.2]);
  const [win, setWin] = useState(false);

  //evento de colisión
  const onCollision = (event) => {
    if (event.other.rigidBodyObject.name === "projectile" && !win) {
      subtractLife();
    }
  }

  //función para restar vida al ovni
  const subtractLife = () => {
    if (live > 0){
      setLive((prev) => prev - 10);
      setMessage(`Vida restante del ovni: ${live}%`);
    } else{
      setMessage("¡Has derrotado al ovni!");
      setWin(true);
      setPosition([0, 0, 10]);
      setTimeout(() => {
        setMessage("");
      }, 1500);
      togglePause()
    }
  }

  return (
    <RigidBody
      ref={platilloBodyRef}
      gravityScale={0}
      colliders="ball"
      enabledRotations={[false, false, false]}
      restitution={0}
      name="platilloVolador"
      onIntersectionEnter={onCollision}
      castShadow
      receiveShadow
      sensor={true}
    >
        <mesh
          geometry={nodes.Esfera.geometry}
          material={materials["Material.001"]}
          position={position}
          scale={[4.47, 4.471, 4.987]}
        />
    </RigidBody>
  );
}
