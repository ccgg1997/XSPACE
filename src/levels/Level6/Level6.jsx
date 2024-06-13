import { Environment, OrbitControls, KeyboardControls } from "@react-three/drei";
import World from "./Level6Environment";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import GameStats from "../../components/interface/GameStats";
import * as THREE from 'three';
import { useGame } from "../../context/GameContext";
import { useProjectiles } from "../../context/ProjectilesContext";
import { ACESFilmicToneMapping } from "three";
import Live from "../../components/items/Live";
import Environmentlvl6 from "./Environment";
import Combat from "./Combat";
import CheckPointNotif from "../../components/CheckPointNotif";
import PlatilloVolador from "./PlatilloVolador";

function CustomCamera() {
  const { camera } = useThree();

  useThree(({ camera }) => {
    console.log('aquiii')
    camera.rotation.set(THREE.MathUtils.degToRad(30), 1, 1);
  });

  useEffect(() => {
    // Set the camera position
    // camera.position.set(0, 5, 0);

    // Define the target point the camera should look at
    const target = { x: 1, y: 1, z: -20 };
    // Update the camera to look at the new target
    // camera.lookAt(target.x, target.y, target.z);

    // Update the camera projection matrix
    // camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

const Level6 = () => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false);
  const { addLive, removeLive, togglePause, addLevel, setMessage, game, setGame } = useGame();
  const { paintProjectiles } = useProjectiles();
  const [initCombat, setInitCombat] = useState(false);
  const [checkpoint, setCheckPoint] = useState(false);

  const onWinLevel = () => {
    togglePause();
    addLevel();
    setTimeout(() => {
      window.location.href = "level7";
    }, 3000);
  };

  const onEarnLife = () => {
    addLive();
  };

  useEffect(() => {
    setGame({ ...game, isCollided: true });
  }, []);

  return (
    <div tabIndex={0}>
      <NaveProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
        <KeyboardControls map={map}>
          <GameStats />
          <Canvas
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#231F1F",
            }}
            ref={canvasRef}
            gl={{
              toneMapping: ACESFilmicToneMapping,
              toneMappingExposure: 0.5,
            }}
            shadows={true}
          >
            <PerspectiveCamera
              makeDefault
              position={[0, 5, -14]}
              fov={100}
              ref={cameraRef}
            />
            <OrbitControls
              makeDefault
              camera={cameraRef.current}
              target={[0, 1, -28]}
              enablePan={false}
              ref={orbitControlsRef}
              enableRotate={false}
              enableZoom={false}
            />
            <Suspense fallback={null}>
              <Environmentlvl6 />
              <Environment preset="sunset" />
              <Physics>
                <World
                  onLoad={() => setReady(true)}
                  collisionCallback={removeLive}
                />
                <ambientLight intensity={1} />
                <Nave />
                <PlatilloVolador onWinLevel={onWinLevel} />
                {paintProjectiles(-50)}
                {initCombat && (
                  <Combat
                    canvasRef={canvasRef}
                    orbitControlsRef={orbitControlsRef}
                    collisionCallback={removeLive}
                    onWinLevel={onWinLevel}
                    setCheckPointEvent={setCheckPoint}
                  />
                )}
                <Live
                  position={[-6.784, 5.555, -335.465]}
                  scale={1.5}
                  onEarnLife={onEarnLife}
                />
              </Physics>
            </Suspense>
            {ready && (
              <Controls
                orbitControlsRef={orbitControlsRef}
                restart={restart}
                onRestartDone={() => setRestart(false)}
                canvasRef={canvasRef}
                initCombat={() => setInitCombat(true)}
              />
            )}
          </Canvas>
        </KeyboardControls>
      </NaveProvider>
      <CheckPointNotif checkpoint={checkpoint} setCheckpoint={setCheckPoint} />
    </div>
  );
};

export default Level6;

