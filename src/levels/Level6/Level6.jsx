
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import Level6Environment from "./Level6Environment";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from "three";
import { Canvas, useThree } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import { handleCollision } from "./ColisionController";
import PauseMenu from "../../components/pause-menu/PauseMenu";
import { GameProvider } from "../../context/GameContext";
import Combat from "./Combat";
import GameStats from "../../components/interface/GameStats";
import * as THREE from 'three';

function CustomCamera() {
  const { camera } = useThree();

  useThree(({ camera }) => {
    console.log('aquiii')
    camera.rotation.set(THREE.MathUtils.degToRad(30), 1, 1);
  });

  useEffect(() => {
    // Set the camera position
    // camera.position.set(0, 5, 0);

    // Define the target point the camera should look at
    const target = { x: 1, y: 1, z: -20 };

    // Update the camera to look at the new target
    // camera.lookAt(target.x, target.y, target.z);

    // Update the camera projection matrix
    // camera.updateProjectionMatrix();
  }, [camera]);

  // return (<PerspectiveCamera makeDefault position={[0, 5, 1]} fov={100} />);
  return null;
}


const Level6 = ({ }) => {
  const map = useMovements();
  const orbitControlsRef = useRef()
  const cameraRef = useRef();
  const canvasRef = useRef()
  const [ready, setReady] = useState(false);
  const [restart, setRestart] = useState(false)
  const [mensaje, setMensaje] = useState("");
  const [initCombat, setInitCombat] = useState(false)
  const [cohete, setCohete] = useState("🔹");

  const lives = "♥".repeat(3);
  return (
    <div tabIndex={0}>
      <NaveProvider>
        <GameProvider>
          <PauseMenu onRestart={() => setRestart(true)} />
          <KeyboardControls map={map} >
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
              <div style={{ color: 'red', fontSize: '39px', zIndex: "1", marginLeft: "1rem" }}>{cohete}</div>
              {mensaje && <div style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '30px', color: 'white', zIndex: "1" }}>{mensaje}</div>}
              <div style={{ color: 'red', fontSize: '49px', zIndex: "1" }}>{lives}</div>
            </div> */}
            <GameStats />
            <Canvas
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#231F1F' }}
              ref={canvasRef}
            >
              {/* <Perf position="top-left" /> */}
              <PerspectiveCamera makeDefault position={[0, 5, -14]} fov={100} ref={cameraRef} />
              {/* <CustomCamera /> */}
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
                <Physics debug={false}>
                  <Level6Environment onLoad={() => setReady(true)} collisionController={handleCollision} collisionCallback={() => setRestart(true)} />
                  <Nave
                  />
                  {initCombat && <Combat setMensaje={setMensaje} canvasRef={canvasRef} />}

                </Physics>
              </Suspense>
              {ready && <Controls orbitControlsRef={orbitControlsRef} restart={restart} onRestartDone={() => setRestart(false)} initCombat={(() => setInitCombat(true))} canvasRef={canvasRef} />}
            </Canvas>
          </KeyboardControls>
        </GameProvider>
      </NaveProvider>
    </div>
  );
};

export default Level6;
