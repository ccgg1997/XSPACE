import React, { useEffect, useRef, useState } from "react";
import { useGame } from "../../context/GameContext";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const generateInitialBombPosition = () => {
  return [ 
    Math.floor(Math.random() * 21) - 9,
    Math.floor(Math.random() * 8) + 3,
    -1585,
  ]
};

export const BombInit = ({ setStart }) => {
  const { game, setGame, setMessage, removeLive } = useGame();
  const [bombs, setBombs] = useState( []);
  const [bombCount, setBombCount] = useState(0);
  const [init, setInit] = useState(true);
  const [bombExploded, setBombExploded] = useState(false);
  useEffect(() => {
    const inter = setInterval(() => {
      if(bombCount > 4) {
        return;
      }
      const newBomb = {
        id: Math.random(), // id único para cada bomba
        posicion: generateInitialBombPosition(),
        explodeTime: Date.now() + 3000,
        key: Math.random(),
      };
      setBombs((prevBombs) => [...prevBombs, newBomb]);
      
    }, 2000);
    return () => clearInterval(inter);

  }, []);

  useEffect(() => {
    const bombTimer = setInterval(() => {
      if (game.paused) {
        return;
      }

      if (bombCount >= 5 ) {
        setStart();
        setMessage("¡Has neutralizado todas las bombas!");
        setGame({ ...game, paused: true });
        setTimeout(() => {
          setMessage("");
        }, 4000);
        return;
      }
    }, 1000);
    return () => clearInterval(bombTimer);
  }
  , [bombCount, bombExploded]);

  useEffect(() => {
    if (init ) {
      setMessage("Neutraliza las bombas antes de que exploten con la tecla 'espacio'");
      setInit(false);
    }
  }, [init]);

  useEffect(() => {
    const explosionTimer = setInterval(() => {
      const now = Date.now();
      const explodedBombs = bombs.filter(bomb => bomb.explodeTime <= now);
      if (explodedBombs.length > 0) {
        setMessage("¡Una bomba ha explotado!, ¡Has perdido!");
        removeLive();
        // Removemos todas las bombas
        setBombs([]);
        setBombExploded(true);
        setGame({ ...game, paused: true, isCollided: true });
        setStart();
        setTimeout(() => {
          setMessage("");
        }, 1500);
      }
      setBombs((prev) => prev.filter((bomb) => bomb.explodeTime > now));
    }, 500);

    return () => clearInterval(explosionTimer);
  }, [bombs, game, setGame, removeLive, setStart]);

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name === "projectile" && bombCount < 5) {
      setMessage("¡Has neutralizado una bomba!");
      setBombs((prev) => prev.filter((bomb) => bomb.id !== event.target.rigidBodyObject.customId));
      setBombCount((prevCount) => prevCount + 1);
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  };

  return (
    <>
      {bombs.map((bomb) => (
        <Bomb
          key={bomb.id}
          position={bomb.posicion}
          id={bomb.id}
          collisionManager={collisionManager}
        />
      ))} 
    </>
  );
};

const Bomb = ({ position, id, collisionManager }) => {
  const { nodes, materials } = useGLTF("/assets/models/items/bomb.glb");
  const ref = useRef();
  const material = new THREE.MeshStandardMaterial({ color: 'green' }); // Cambiamos el color de la bomba a verde

  return (
    <RigidBody
      ref={ref}
      position={position}
      colliders="ball"
      castShadow
      receiveShadow
      enabledRotations={[false, false, false]}
      name="bomb"
      onIntersectionEnter={collisionManager}
      sensor={true}
      gravityScale={0}
      customId={id}
    >
      <mesh geometry={nodes.mesh_0.geometry} material={material} scale={0.03} />
    </RigidBody>
  );
};
