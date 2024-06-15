import {
  Environment,
  KeyboardControls,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import World from "./Level3Environment";
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
import { useGame } from "../../context/GameContext";
import GameStats from "../../components/interface/GameStats";
import Live from "../../components/items/Live";
import { useProjectiles } from "../../context/ProjectilesContext";
import { BombInit } from "./FinalCombat";
import { ACESFilmicToneMapping, CineonToneMapping } from "three";
import Loading from "../../components/interface/loading/Loading";

const Level3 = () => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false);
  const { addLive, removeLive, togglePause, addLevel } = useGame();
  const { paintProjectiles } = useProjectiles();
  const [initCombat, setInitCombat] = useState(false);

  const onEarnLife = () => {
    addLive();
  };

  const onWinLevel = () => {
    togglePause();
    addLevel();
    setTimeout(() => {
      window.location.href = "level4";
    }, 3000);
  };

  return (
    <div tabIndex={0}>
      <NaveProvider>
        {!ready && <Loading />}
        <KeyboardControls map={map}>
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
            <Suspense fallback={null}>
              <Environment preset="sunset" />
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
              <Physics>
                <World
                  onLoad={() => setReady(true)}
                  collisionCallback={removeLive}
                />
                <ambientLight intensity={1} />
                <Nave />
                {paintProjectiles(-50)}
                {initCombat && (
                  <BombInit
                    setStart={() => setInitCombat(false)}
                    onWinLevel={onWinLevel}
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
          {ready && <PauseMenu onRestart={() => setRestart(true)} />}
          {ready && <GameStats />}
        </KeyboardControls>
      </NaveProvider>
    </div>
  );
};

export default Level3;
