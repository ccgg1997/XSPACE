import { KeyboardControls, OrbitControls, Stars } from "@react-three/drei";
import World from "./Level5Environment";
import { Suspense, useContext, useState } from "react";
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
import Environmentlvl5 from "./Environment";

const Level5 = ({ setCameraPosition }) => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const cameraRef = useRef();
  const canvasRef = useRef();
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false);
  const { addLive, removeLive,togglePause, addLevel } = useGame();
  const { paintProjectiles} = useProjectiles();

  const onEarnLife = () => {
    addLive();
  };


  return (
    <div tabIndex={0}>
    <NaveProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
        <KeyboardControls map={map}>
          <GameStats />
          <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
            ref={canvasRef}
          >
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
              <Environmentlvl5 />
              <ambientLight />
              <Physics>
                <World
                  onLoad={() => setReady(true)}
                  collisionCallback={removeLive}

                />
                <Nave />
                {paintProjectiles(-50)}
                <Live position={[-6.784, 5.555, -335.465]} scale={1.5} onEarnLife={onEarnLife} />
              </Physics>
            </Suspense>
            {ready && (
              <Controls
                orbitControlsRef={orbitControlsRef}
                restart={restart}
                onRestartDone={() => setRestart(false)}
                canvasRef={canvasRef}
              />
            )}
          </Canvas>
        </KeyboardControls>
    </NaveProvider>
  </div>
  );
};

export default Level5;
/*
<Ecctrl
              camInitDis={1}
              camMaxDis={10}
              maxVelLimit={5}
              jumpVel={4}
              position={[0, 10, -30]}
              debug={true}
              disableFollowCam={true}
              disableFollowCamPos={{ x: 0, y: 0, z: 0 }}
            >
              <Nave
              // position={[0, 10, 0]}
              />
            </Ecctrl>
            */