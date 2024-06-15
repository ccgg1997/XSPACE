import {
  OrbitControls,
  KeyboardControls,
  Environment,
  Stars,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useMovements from "../../utils/key-movements";
import { NaveProvider, useNave } from "../../context/NaveContext";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import GameStats from "../../components/interface/GameStats";
import { useGame } from "../../context/GameContext";
import BackgroundSound from "../../components/interface/BackgroundSound";
import Level7Environment from "./Level7Environment";
import Nave1 from "./Nave1";
import Nave2 from "./Nave2";
import Loading from "../../components/interface/loading/Loading";

const Level7 = ({}) => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false);
  const [initCombat, setInitCombat] = useState(false);
  const [checkpoint, setCheckPoint] = useState(false);
  const { addLive, togglePause, stats, addLevel, setMessage, game, setGame } =
    useGame();

  const onEarnLife = () => {
    addLive();
  };

  const onWinLevel = () => {
    togglePause();
    // addLevel();
    setMessage("Ganaste el nivel 7!");
    setTimeout(() => {
      // navigate('/level3');
      window.location.href = "menu";
    }, 2000);
  };

  // useEffect(() => {
  //   setGame({ ...game, isCollided: true });
  // }, [])

  return (
    <div tabIndex={0}>
      <BackgroundSound />
      <NaveProvider>
        {!ready && <Loading />}
        {ready && <PauseMenu onRestart={() => console.log("en restart")} />}
        <KeyboardControls map={map}>
          {ready && <GameStats />}
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
          >
            {/* <Perf position="top-left" /> */}
            <Environment preset="forest" />
            <PerspectiveCamera
              makeDefault
              position={[0, 6, -14]}
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
              enableZoom={true}
            />

            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              {/* <directionalLight position={[-10, 20, 10]} intensity={1.5} /> */}
              <Stars
                radius={100}
                depth={0}
                count={3000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
              <Physics debug={false}>
                <Level7Environment onLoad={() => setReady(true)} />
                <Nave1 orbitControlsRef={orbitControlsRef} />
                <Nave2 position={[0, 0, -70]} />
                {/* <Live position={[2, 4.5, -786]} scale={1.5} onEarnLife={onEarnLife} /> */}
              </Physics>
            </Suspense>
            {/* {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} initCombat={(() => setInitCombat(true))} canvasRef={canvasRef} />} */}
          </Canvas>
        </KeyboardControls>
      </NaveProvider>
      {/* <CheckPointNotif checkpoint={checkpoint} setCheckpoint={setCheckPoint} /> */}
    </div>
  );
};

export default Level7;
