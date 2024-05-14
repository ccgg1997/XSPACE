
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import Level2Environment from "./Level2Environment";
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
import Combat from "./Combat";


const Level2 = ({ }) => {
  const map = useMovements();
  const orbitControlsRef = useRef()
  const canvasRef = useRef()
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false)
  const [mensaje, setMensaje] = useState("");
  const [initCombat, setInitCombat] = useState(false)


  return (
    <div tabIndex={0}>
      <NaveProvider>
        <GameProvider>
          <PauseMenu onRestart={() => setRestart(true)} />
          <KeyboardControls map={map} >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
              {mensaje && <div style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '30px', color: 'white', zIndex: "1" }}>{mensaje}</div>}
            </div>
            <Canvas
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
              ref={canvasRef}
            >
              {/* <Perf position="top-left" /> */}
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
                  {initCombat && <Combat setMensaje={setMensaje} canvasRef={canvasRef} />}

                </Physics>
              </Suspense>
              {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} initCombat={(() => setInitCombat(true))} />}
            </Canvas>
          </KeyboardControls>
        </GameProvider>
      </NaveProvider>
    </div>
  );
};

export default Level2;
