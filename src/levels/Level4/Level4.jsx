import {
  KeyboardControls,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import Level4Environment from "./Level4Environment";
import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import useMovements from "../../utils/key-movements";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import {
  projectilesContext,
  useProjectiles,
} from "../../context/ProjectilesContext";
import { useGame } from "../../context/GameContext";
import CheckPointNotif from "../../components/CheckPointNotif";
import BackgroundSound from "../../components/interface/BackgroundSound";
import GameStats from "../../components/interface/GameStats";
import { Level4Paredes } from "./Level4Paredes";
import Live from "../../components/items/Live";
import { GunsInit } from "./FinalCombat";
import Loading from "../../components/interface/loading/Loading";

const Level4 = () => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const [ready, setReady] = useState(false);
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [restart, setRestart] = useState(false);
  const {
    addLive,
    removeLive,
    togglePause,
    stats,
    addLevel,
    setMessage,
    game,
    setGame,
    setPartIcon,
    setCheckPoint,
  } = useGame();
  const [checkpoint, setCheckPointEvent] = useState(false);
  const { paintProjectiles } = useProjectiles();
  const [initCombat, setInitCombat] = useState(false);

  const onEarnLife = () => {
    addLive();
  };
  const onWinLevel = () => {
    setMessage("¡GANASTE!");
    togglePause();
    addLevel();
    setTimeout(() => {
      window.location.href = "level5";
    }, 3000);
  };

  useEffect(() => {
    setPartIcon("🔹");
    setMessage('¡Dispara a las 🔹 con el boton "ESPACIO"​!');
  }, []);

  useEffect(() => {
    if (initCombat) {
      setMessage("¡Destruye los cañones enemigos!");
      setCheckPointEvent(true);
      setCheckPoint([0, 0, -907.2]);
    }
  }, [initCombat]);

  return (
    <div tabIndex={0}>
      <BackgroundSound />
      <NaveProvider>
        {!ready && <Loading />}
        {ready && <PauseMenu onRestart={() => setRestart(true)} />}
        <KeyboardControls map={map}>
          {ready && <GameStats />}
          <Canvas
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#000000",
            }}
            ref={canvasRef}
            shadows={true}
          >
            {/* <Perf position="top-left" /> */}
            <Environment preset="forest" />
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
              <ambientLight intensity={1} />

              <Physics debug={false}>
                <Level4Environment
                  onLoad={() => setReady(true)}
                  collisionCallback={removeLive}
                />
                <Level4Paredes
                  collisionCallback={removeLive}
                  restart={restart}
                />
                <Nave />
                <Live
                  position={[2, 4.5, -791]}
                  scale={1.5}
                  onEarnLife={onEarnLife}
                />
                {initCombat && (
                  <GunsInit
                    setStart={() => setInitCombat(false)}
                    onWinLevel={onWinLevel}
                  />
                )}
                {paintProjectiles(-50)}
              </Physics>
            </Suspense>

            {ready && (
              <Controls
                orbitControlsRef={orbitControlsRef}
                restart={restart}
                onRestartDone={() => setRestart(false)}
                initCombat={() => setInitCombat(true)}
                canvasRef={canvasRef}
              />
            )}
          </Canvas>
        </KeyboardControls>
      </NaveProvider>
      <CheckPointNotif
        checkpoint={checkpoint}
        setCheckpoint={setCheckPointEvent}
      />
    </div>
  );
};

export default Level4;
