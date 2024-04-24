
import { OrbitControls, KeyboardControls } from "@react-three/drei";
import Level2Environment from "./Level2Environment";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useRef } from "react";
import { PerspectiveCamera } from '@react-three/drei';
import { Color } from "three";
import { Canvas } from '@react-three/fiber';
import useMovements from "../../utils/key-movements";
import Nave from "./Nave";
import { useFrame } from "@react-three/fiber";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
// import Ecctrl, { EcctrlAnimation } from "ecctrl";

const Level2 = ({ setCameraPosition }) => {
  const map = useMovements();
  const naveRef = useRef();
  const orbitControlsRef = useRef()


  return (
    <NaveProvider>
      <KeyboardControls map={map} >
        <Canvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#BFBFBF' }}
        >
          <Perf position="top-left" />
          <PerspectiveCamera makeDefault position={[0, 7, 10]} zoom={1.8} />

          <OrbitControls makeDefault
            target={[0, 6, 0]}
            enablePan={true}
            ref={orbitControlsRef}
          />

          <Suspense fallback={null}>
            <ambientLight
              color={new Color("#FFFFFF")}
              intensity={1.4}
            />
            <Physics debug={true}>
              <Level2Environment />
              <Nave
              />

            </Physics>
          </Suspense>
          <Controls orbitControlsRef={orbitControlsRef} />
        </Canvas>
      </KeyboardControls>
    </NaveProvider>
  );
};

export default Level2;
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