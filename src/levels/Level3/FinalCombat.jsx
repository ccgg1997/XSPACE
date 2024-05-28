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
  ];
};

export const BombInit = ({ setStart }) => {
  const { game, setGame, setMessage, removeLive } = useGame();
  const [bombs, setBombs] = useState([]);
  const [bombCount, setBombCount] = useState(0);
  const [init, setInit] = useState(true);
  useEffect(() => {
    if (game.paused) {
      return;
    }
    const now = Date.now();
    const explodedBombs = bombs.filter((bomb) => bomb.explodeTime <= now);
    const inter = setInterval(() => {
      if (bombCount < 5 && explodedBombs.length === 0) {
        setMessage(
          "Neutraliza las bombas antes de que exploten con la tecla 'espacio'"
        );
      }
      if (bombCount > 4) {
        allBombsNeutralized();
        return;
      }
      if (explodedBombs.length > 0) {
        bombExploded();
        return;
      }

      createBomb();
    }, 2000);
    return () => clearInterval(inter);
  }, [game.paused, bombCount, bombs, init]);

  // Función para crear una bomba
  const createBomb = () => {
    const newBomb = {
      posicion: generateInitialBombPosition(),
      explodeTime: Date.now() + 3000,
      id: Math.random(),
    };
    setBombs((prevBombs) => [...prevBombs, newBomb]);
  };

  // Función para neutralizar una bomba
  const bombNeutralized = (id) => {
    setMessage("¡Has neutralizado una bomba!");
    setBombs((prev) => prev.filter((bomb) => bomb.id !== id));
    setBombCount((prevCount) => prevCount + 1);
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  // Función para neutralizar todas las bombas
  const allBombsNeutralized = () => {
    setMessage("¡Has neutralizado todas las bombas!");
    setBombs([]);
    setGame({ ...game, paused: true });
    setStart();
    setInit(false);
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  // Función para cuando una bomba explota
  const bombExploded = () => {
    setMessage("¡Una bomba ha explotado!, ¡Has perdido!");
    removeLive();
    setBombs([]);
    setGame({ ...game, paused: true, isCollided: true });
    setStart();
    setInit(false);
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name === "projectile" && bombCount < 5) {
      bombNeutralized(event.other.rigidBodyObject.customId);
    }
  };

  return (
    <>
      {bombs.map((bomb) => (
        <Bomb
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
  const material = new THREE.MeshStandardMaterial({ color: "green" }); // Cambiamos el color de la bomba a verde

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
