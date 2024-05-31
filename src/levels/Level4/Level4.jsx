import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Level4Environment from "./Level4Environment";
import { Perf } from "r3f-perf";
import { Suspense, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { Color } from "three";
import { useRef } from "react";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import useMovements from "../../utils/key-movements";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import { projectilesContext } from "../../context/ProjectilesContext";
import Projectile from "../../components/shipSkills/projectile";
import { useGame } from "../../context/GameContext";
import CheckPointNotif from "../../components/CheckPointNotif";
import BackgroundSound from "../../components/interface/BackgroundSound";
import GameStats from "../../components/interface/GameStats";
import { Level4Paredes } from "./Level4Paredes";

const Level4 = () => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const [ready, setReady] = useState(false);
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [restart, setRestart] = useState(false);
  const { projectiles } = useContext(projectilesContext);
  const { addLive, removeLive, togglePause, stats, addLevel, setMessage, game, setGame } = useGame();
  const [checkpoint, setCheckPoint] = useState(false)

  return (
    <div tabIndex={0}>
      <BackgroundSound />
      <NaveProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
        <KeyboardControls map={map}>
          <GameStats />
          <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#5F6699' }}
            ref={canvasRef}
          >
            <Perf position="top-left" />
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
                <Level4Environment onLoad={() => setReady(true)} collisionCallback={removeLive} />
                <Level4Paredes/>
                <Nave />
                {projectiles.map((projectile) => (
                  <Projectile
                    key={projectile.id}
                    position={projectile.position}
                    id={projectile.id}
                    limitProjectibles={-1590}
                  />

                ))}
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

export default Level4;