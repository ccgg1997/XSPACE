
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import Level2Environment from "./Level2Environment";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from "three";
import { Canvas } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import { handleCollision } from "./ColisionController";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import { GameProvider } from "../../context/GameContext";


const Level2 = ({ }) => {
  const map = useMovements();
  const orbitControlsRef = useRef()
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false)


  return (
    <div tabIndex={0}>
      <NaveProvider>
        <GameProvider>
          <PauseMenu onRestart={() => setRestart(true)} />
          <KeyboardControls map={map} >
            <Canvas
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
            >
              <Perf position="top-left" />
              <PerspectiveCamera makeDefault position={[0, 5, 12]} zoom={1.3} />

              <OrbitControls makeDefault
                target={[0, 3, 0]}
                enablePan={true}
                ref={orbitControlsRef}
              />

              <Suspense fallback={null}>
                <ambientLight
                  color={new Color("#FFFFFF")}
                  intensity={1.4}
                />
                <Physics debug={false}>
                  <Level2Environment onLoad={() => setReady(true)} collisionController={handleCollision} collisionCallback={() => setRestart(true)} />
                  <Nave
                  />

                </Physics>
              </Suspense>
              {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} />}
            </Canvas>
          </KeyboardControls>
        </GameProvider>
      </NaveProvider>
    </div>
  );
};

export default Level2;
