
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import Level2Environment from "./Level2Environment";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from "three";
import { Canvas } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import Nave from "./Nave";
import { NaveProvider, useNave } from "../../context/NaveContext";
import Controls from "./Controls";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import Combat from "./Combat";
import GameStats from "../../components/interface/GameStats";
import Live from "../../components/items/Live";
import { useGame } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";
import { patchUser } from "../../db/user-collection";
import { useAuth } from "../../context/AuthContext";

const Level2 = ({ }) => {
  const map = useMovements();
  const orbitControlsRef = useRef()
  const cameraRef = useRef();
  const canvasRef = useRef()
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false)
  const [initCombat, setInitCombat] = useState(false)
  const { addLive, removeLive, togglePause, stats, addLevel, setMessage, game, setGame } = useGame();
  const { userLogged } = useAuth();
  const navigate = useNavigate();

  const onEarnLife = () => {
    addLive();
  }

  const onWinLevel = () => {
    togglePause();
    patchUser(userLogged.email, { level: stats.level + 1, checkPoint: [] })
    addLevel();
    setMessage('Ganaste el nivel 2!');
    setTimeout(() => {
      navigate('/level3');
    }, 2000)

  }

  useEffect(() => {
    setGame({ ...game, isCollided: true });
  }, [])

  return (
    <div tabIndex={0}>
      <NaveProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
        <KeyboardControls map={map} >
          <GameStats />
          <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
            ref={canvasRef}
          >
            {/* <Perf position="top-left" /> */}
            <PerspectiveCamera makeDefault position={[0, 5, -14]} fov={100} ref={cameraRef} />
            <OrbitControls makeDefault
              camera={cameraRef.current}
              target={[0, 1, -28]}
              enablePan={false}
              ref={orbitControlsRef}
              enableRotate={false}
              enableZoom={false}
            />

            <Suspense fallback={null}>
              <ambientLight
                color={new Color("#FFFFFF")}
                intensity={1.4}
              />
              <Physics debug={true}>
                <Level2Environment onLoad={() => setReady(true)} collisionCallback={removeLive} />
                <Nave
                />
                {initCombat && <Combat canvasRef={canvasRef} orbitControlsRef={orbitControlsRef} collisionCallback={removeLive} onWinLevel={onWinLevel} />}
                <Live position={[2, 4.5, -786]} scale={1.5} onEarnLife={onEarnLife} />
              </Physics>
            </Suspense>
            {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} initCombat={(() => setInitCombat(true))} canvasRef={canvasRef} />}
          </Canvas>
        </KeyboardControls>
      </NaveProvider>
    </div>
  );
};

export default Level2;
