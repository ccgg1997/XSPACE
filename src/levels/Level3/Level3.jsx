import { KeyboardControls, OrbitControls, Stars } from "@react-three/drei";
import World from "./Level3Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../../backgrounds/Galaxy";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import useMovements from "../../utils/key-movements";
import { GameProvider } from "../../context/GameContext";
import { handleCollision } from "./ColisionController";
import PauseMenu from "../../components/pause-menu/PauseMenu";
const Level3 = () => {
  const orbitControlsRef = useRef();
  const map = useMovements();
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false);
  return (
    <NaveProvider>
      <GameProvider>
        <PauseMenu onRestart={() => setRestart(true)} />
      <KeyboardControls map={map}>
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 6, 12]} zoom={1} />
          <OrbitControls
            makeDefault
            target={[0, 6, 0]}
            enablePan={true}
            ref={orbitControlsRef}
          />
          <ambientLight />
          <Suspense fallback={null}>
            <Physics >
              <World onLoad={() => setReady(true)} collisionController={handleCollision} collisionCallback={() => setRestart(true)} />
              <Nave />
            </Physics>
          </Suspense>
          {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} />}
        </Canvas>
      </KeyboardControls>
      </GameProvider>
    </NaveProvider>
  );
};

export default Level3;
