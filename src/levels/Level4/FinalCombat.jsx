import React, { useEffect, useRef, useState } from "react";
import { useGame } from "../../context/GameContext";
import { RigidBody } from "@react-three/rapier";
import { Sphere, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useNave } from "../../context/NaveContext";

const generateInitialBombPosition = () => {
  return [
    Math.floor(Math.random() * 21) - 9,
    Math.floor(Math.random() * 8) + 3,
    -1585,
  ];
};

export const GunsInit = ({ setStart, onWinLevel }) => {
  const { game, setGame, setMessage, removeLive } = useGame();
  const [init, setInit] = useState(true);
  const [torretas, setTorretas] = useState({ "1": true, "2": true, "3": true, "4": true });

  const disableTorreta = (key) => {
    setTorretas((prev) => ({ ...prev, [key]: false }));
  };

  useEffect(() => {
    if (!(torretas["1"] || torretas["2"] || torretas["3"] || torretas["4"])) {
      onWinLevel();
    }
  }, [, torretas]);

  return (
    <>
      {torretas["1"] &&
        <Torreta
          shotTime={4000}
          args={{
            key: "1",
            position: [4, 3.025, -990],
            scale: [0.9, 1.027, 0.8],
            rotation: [Math.PI / 2, 0, 0]
          }}
          disableTorreta={disableTorreta}
        />
      }
      {torretas["2"] &&
        <Torreta
          shotTime={2600}
          args={{
            key: "2",
            position: [-4, 3.025, -990],
            scale: [0.9, 1.027, 0.8],
            rotation: [Math.PI / 2, 0, 0]
          }}
          disableTorreta={disableTorreta}
        />
      }
      {
        torretas["3"] &&
        <Torreta
          shotTime={2900}
          args={{
            key: "3",
            position: [-8, 7.025, -990],
            scale: [0.9, 1.027, 0.8],
            rotation: [Math.PI / 2, 4.7, 0]
          }}
          disableTorreta={disableTorreta}
        />
      }
      {torretas["4"] &&
        <Torreta
          shotTime={3000}
          args={{
            key: "4",
            position: [8, 7.025, -990],
            scale: [0.9, 1.027, 0.8],
            rotation: [Math.PI / 2, Math.PI / 2, 0]
          }}
          disableTorreta={disableTorreta}
        />
      }

    </>
  );
};
const url = "https://josem-18.github.io/sourcesPI/models/items/canon.glb"
const Torreta = ({ args, shotTime = 3, disableTorreta }) => {
  const { nodes, materials } = useGLTF(url)
  const { nave } = useNave();
  const { game, setGame, setMessage } = useGame();
  const [shots, setShots] = useState([]);
  const [shooting, isShooting] = useState(false);
  const torreta = useRef();

  if (!args.position) {
    console.error("Torreta component: Missing required props 'args.position'");
    return null; // Retornar null para no renderizar nada
  }


  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name == "projectile") {
      disableTorreta(args.key)
      // nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      // nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      // setGame({ ...game, paused: true, isCollided: true })
      // collisionCallback();
    }
  }

  useEffect(() => {

    const timer = setTimeout(() => {
      // console.log('Torreta ', args.key, ' disparando')
      isShooting(true);
    }, shotTime);
    return () => {
      console.log('fin torreta ', args.key)
    }
  }, []);

  useEffect(() => {
    if (game.paused)
      return;
    const interval = setInterval(() => {
      newShot();
    }, shotTime);

    // Cleanup del interval cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [shooting, game, game.paused]);

  const newShot = () => {
    const projectileId = THREE.MathUtils.generateUUID();
    const positionTorreta = torreta.current?.position;
    if (positionTorreta == null)
      return;
    console.log('positionTorreta', positionTorreta)
    const position = [positionTorreta.x, positionTorreta.y + 0.9, positionTorreta.z + 3];

    const projectile = { id: projectileId, position: position, speed: 25 };
    setShots((prev) => [...prev, projectile]);
  };

  const removeShot = (id) => {
    setShots((prev) => prev.filter((shot) => shot.id !== id));
  }



  return (
    <>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="cannon" onCollisionEnter={collisionManager}>
        <mesh
          ref={torreta}
          {...args}
          name="Canon"
          castShadow
          receiveShadow
          geometry={nodes.Canon.geometry}
          material={materials['Material.001']}
        />
      </RigidBody>
      {shots.map((shot) => (
        <Shot position={shot.position} id={shot.id} key={shot.id} speed={shot.speed} removeShot={removeShot} />
      ))}
    </>
  )
}

const Shot = ({ position, id, speed, removeShot }) => {
  const ref = useRef();

  const creationProjectileTimeRef = useRef(Date.now());
  const { game, setGame, removeLive } = useGame();
  const { nave } = useNave();
  // //verificacion de los parametros
  if (!position || !id) {
    console.error("Projectile component: Missing required props 'position','id' or 'speed'");
    return null; // Retornar null para no renderizar nada
  }
  const removeProjectile = () => {
    removeShot(id);
  }
  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name == "naveEspacial") {
      removeShot(id);
      // setGame({ ...game, paused: true, isCollided: true })
      nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      removeLive();
    }
  }

  useEffect(() => {
    return () => {
      // console.log('fin disparo ', id)
    }
  }, []);

  useEffect(() => {
    if (!game.paused) {
      // console.log('position shot3 ', position)
      ref.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
      //si pasan 5 segundos eliminamos el proyectil
      // removeProjectile(id);
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
    const currentTranslation = ref.current?.translation()
    if (currentTranslation?.z > -920) {
      removeProjectile();

    }
  });

  return (
    <RigidBody ref={ref}
      position={position}
      colliders="ball"
      gravityScale={0}
      linearVelocity={[0, 0, speed]}
      restitution={0}
      onCollisionEnter={collisionManager}
      enabledRotations={[false, false, false]}
      name='projectile'
    >
      <Sphere args={[1, 8, 8]} >
        <meshStandardMaterial color="#ADADAD" />
      </Sphere>
    </RigidBody>
  );
};

useGLTF.preload(url)


