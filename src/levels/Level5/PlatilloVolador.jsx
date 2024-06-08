import { useRef, useEffect, useState } from "react";
import { useGLTF, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useGame } from "../../context/GameContext";
import { useFrame } from "@react-three/fiber";
import { useNave } from "../../context/NaveContext";

export default function PlatilloVolador(props) {
  const platilloBodyRef = useRef();
  const { nodes, materials } = useGLTF("/assets/models/PlatilloVolador.glb");
  const { setMessage, togglePause } = useGame();
  const [live, setLive] = useState(100);
  const [position, setPosition] = useState([0, 3.085, -1578.2]);
  const [win, setWin] = useState(false);
  const [shots, setShots] = useState([]);
  const shotIntervalRef = useRef(null);

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

  //función para generar una posición aleatoria
  const generateRandomPosition = () => {
    return [
      Math.floor(Math.random() * 21) - 9,
      Math.floor(Math.random() * 8) + 3,
      -1578.2,
    ];
  };

  //efecto para actualizar la posicion del platillo volador periodicamente
  useEffect(() => {
    if(win){
      return;
    }
    const interval = setInterval(() => {
      setPosition(generateRandomPosition());
    }, 4000);
    return () => clearInterval(interval);
  }, [win]);

  // Efecto para disparar proyectiles periódicamente
  useEffect(() => {
    if (win) {
      return;
    }
    shotIntervalRef.current = setInterval(() => {
      newShot();
    }, 3000);
    return () => clearInterval(shotIntervalRef.current);
  }, [win]);

  // Función para crear un nuevo disparo
  const newShot = () => {
    const projectileId = THREE.MathUtils.generateUUID();
    console.log('positionTorreta', position)
    const projectilePosition = [position[0], position[1] + 1, position[2] + 10];
    const projectileOvni = { id: projectileId, position: projectilePosition, speed: 3 };
    setShots((prev) => [...prev, projectileOvni]);
  };

  const removeShot = (id) => {
    setShots((prev) => prev.filter((shot) => shot.id !== id));
  };


  return (
    <>
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
    {shots.map((shot) => (
      <Shot position={shot.position} id={shot.id} key={shot.id} speed={shot.speed} removeShot={removeShot} />
    ))}
    </>
  );
}

const Shot = ({ position, id, speed, removeShot }) => {
  const ref = useRef();
  const { game, removeLive } = useGame();
  const { nave } = useNave();

  if (!position || !id) {
    console.error("Shot component: Missing required props 'position','id' or 'speed'");
    return null;
  }

  const removeProjectile = () => {
    removeShot(id);
  };

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name === "naveEspacial") {
      removeShot(id);
      nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      removeLive();
    }
  };

  useEffect(() => {
    if (!game.paused) {
      ref.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
    } else {
      ref.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
    }
  }, [game, game.paused]);

  useFrame(() => {
    if (game.paused) {
      ref.current?.setLinvel({ x: 0, y: 0, z: 0 }, true);
    } else {
      ref.current?.setLinvel({ x: 0, y: 0, z: speed }, true);
    }
    const currentTranslation = ref.current?.translation();
    if (currentTranslation?.z < -1050) {
      removeProjectile();
    }
  });

  return (
    <RigidBody
      ref={ref}
      position={position}
      colliders="ball"
      gravityScale={0}
      linearVelocity={[0, 0, speed]}
      restitution={0}
      onCollisionEnter={collisionManager}
      enabledRotations={[false, false, false]}
      name="projectileOvni"
    >
      <Sphere args={[1, 8, 8]}>
        <meshStandardMaterial color="#ADADAD" />
      </Sphere>
    </RigidBody>
  );
};

useGLTF.preload("/assets/models/PlatilloVolador.glb");