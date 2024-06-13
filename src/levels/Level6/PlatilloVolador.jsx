import { useRef, useEffect, useState } from "react";
import { useGLTF, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useGame } from "../../context/GameContext";
import { useFrame } from "@react-three/fiber";
import { useNave } from "../../context/NaveContext";

export default function PlatilloVolador({onWinLevel}) {
  const platilloBodyRef = useRef();
  const { setMessage, togglePause, game } = useGame();
  const [live, setLive] = useState(100);
  const [position, setPosition] = useState([0,0,0]);
  const [win, setWin] = useState(false);
  const [shots, setShots] = useState([]);

  //evento de colisión
  const onCollision = (event) => {
    if (event.other.rigidBodyObject.name === "projectile" && !win) {
      subtractLife();
    }
  }

  //función para restar vida al ovni
  const subtractLife = () => {
      setLive((prev) => prev - 10);
      setMessage(`Vida restante del ovni: ${live}%`);
  }

  useEffect(() => {
    if (live <= 0) {
      setWin(true);
      setMessage('Has derrotado al ovni');
      togglePause();
      setTimeout(() => {
        setMessage('');
      } , 1500);
      onWinLevel();
    }
    if (live === 100) {
      setMessage('cuidado con las estrellas en movimiento y los disparos del ovni');
    }
  }, [live]);

  //función para generar una posición aleatoria
  const generateRandomPosition = () => {
    return [
      Math.floor(Math.random() * 21) - 9,
      Math.floor(Math.random() * 8) + 1,
      -1000,
    ];
  };

  //efecto para actualizar la posicion del platillo volador periodicamente
  useEffect(() => {
    if(win || game.paused){
      return;
    }
    const interval = setInterval(() => {
      setPosition(generateRandomPosition());
    }, 3000);
    return () => clearInterval(interval);
  }, [win, game.paused]);

  useEffect(() => {
    if (win) {
      return;
    }
    newShot(position);
  }, [position]);

  // Función para crear un nuevo disparo
  const newShot = (position) => {
    const projectileId = THREE.MathUtils.generateUUID();
    //console.log('positionTorreta', position)
    const projectilePosition = [position[0], position[1], position[2] + 5];
    const projectileOvni = { id: projectileId, position: projectilePosition, speed: 30 };
    setShots((prev) => [...prev, projectileOvni]);
  };

  const removeShot = (id) => {
    setShots((prev) => prev.filter((shot) => shot.id !== id));
  };


  return (
    <>
    <Platillo position={position} collisionManager={onCollision} />
    {shots.map((shot) => (
      <Shot position={shot.position} id={shot.id} key={shot.id} speed={shot.speed} removeShot={removeShot} />
    ))}
    </>
  );
}

const Platillo = ({position, collisionManager}) => {
  const { nodes, materials } = useGLTF("/assets/models/PlatilloVolador.glb");
  return (
    <RigidBody
      position={position}
      colliders="ball"
      castShadow
      receiveShadow
      enabledRotations={[false, false, false]}
      name="platillo"
      onIntersectionEnter={collisionManager}
      sensor={true}
      gravityScale={0}
    >
      <mesh geometry={nodes.Esfera.geometry} material={materials["Material.001"]} scale={[4.47, 4.471, 4.987]}/>
    </RigidBody>
  );
};

const Shot = ({ position, id, speed, removeShot }) => {
  const ref = useRef();
  const { game, removeLive } = useGame();
  const { nave } = useNave();

  if (!position || !id) {
    console.error("Shot component: Missing required props 'position','id' or 'speed'");
    return null;
  }

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
  });

  return (
    <RigidBody
      ref={ref}
      position={position}
      colliders="ball"
      gravityScale={0}
      linearVelocity={[0, 0, speed]}
      restitution={0}
      onIntersectionEnter={collisionManager}
      enabledRotations={[false, false, false]}
      name="projectileOvni"
      sensor={true}

    >
      <Sphere args={[1, 8, 8]}>
        <meshStandardMaterial color="#ADADAD" />
      </Sphere>
    </RigidBody>
  );
};

useGLTF.preload("/assets/models/PlatilloVolador.glb");