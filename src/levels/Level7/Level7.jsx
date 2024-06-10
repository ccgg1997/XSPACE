
import { OrbitControls, KeyboardControls, Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from "three";
import { Canvas } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import { NaveProvider, useNave } from "../../context/NaveContext";
import Controls from "./Controls";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import Combat from "./Combat";
import GameStats from "../../components/interface/GameStats";
import Live from "../../components/items/Live";
import { useGame } from "../../context/GameContext";
import BackgroundSound from "../../components/interface/BackgroundSound";
import CheckPointNotif from "../../components/CheckPointNotif";
import Level7Environment from "./Level7Environment";
import Nave1 from "./Nave1";
import Nave2 from "./Nave2";

const Level7 = ({ }) => {
  const map = useMovements();
  const orbitControlsRef = useRef()
  const cameraRef = useRef();
  const canvasRef = useRef()
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false)
  const [initCombat, setInitCombat] = useState(false)
  const [checkpoint, setCheckPoint] = useState(false)
  const { addLive, removeLive, togglePause, stats, addLevel, setMessage, game, setGame } = useGame();

  const onEarnLife = () => {
    addLive();
  }

  const onWinLevel = () => {
    togglePause();
    addLevel();
    setMessage('Ganaste el nivel 2!');
    setTimeout(() => {
      // navigate('/level3');
      window.location.href = 'level3'
    }, 2000)

  }

  useEffect(() => {
    setGame({ ...game, isCollided: true });
  }, [])

  return (
    <div tabIndex={0}>
      <BackgroundSound />
      <NaveProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
        <KeyboardControls map={map} >
          <GameStats />
          <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
            ref={canvasRef}
          >
            {/* <Perf position="top-left" /> */}
            <Environment preset="forest" />
            <PerspectiveCamera makeDefault position={[0, 6, -14]} fov={100} ref={cameraRef} />
            <OrbitControls makeDefault
              camera={cameraRef.current}
              target={[0, 1, -28]}
              enablePan={false}
              ref={orbitControlsRef}
              enableRotate={false}
              enableZoom={true}
            />

            <Suspense fallback={null}>
              <ambientLight
                intensity={1}
              />
              <Physics debug={true}>
                <Level7Environment onLoad={() => setReady(true)} collisionCallback={removeLive} />
                <Nave1 position={[0, 0, 0]}
                />
                <Nave2 position={[0, 0, -70]}
                />
                <Live position={[2, 4.5, -786]} scale={1.5} onEarnLife={onEarnLife} />
              </Physics>
            </Suspense>
            {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} initCombat={(() => setInitCombat(true))} canvasRef={canvasRef} />}
          </Canvas>
        </KeyboardControls>
      </NaveProvider>
      <CheckPointNotif checkpoint={checkpoint} setCheckpoint={setCheckPoint} />
    </div>
  );
};

export default Level7;
