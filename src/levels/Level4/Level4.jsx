import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Level4Environment from "./Level4Environment";
import { Perf } from "r3f-perf";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { Color } from "three";
import { useRef } from "react";
import Nave from "./Nave";
import { NaveProvider } from "../../context/NaveContext";
import Controls from "./Controls";
import useMovements from "../../utils/key-movements";

const Level4 = () => {
  const map = useMovements();
  const orbitControlsRef = useRef();
  const [ready, setReady] = useState(false);

  return (
    <NaveProvider>
      <KeyboardControls map={map}>
        <Canvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#5F6699' }}
        >
          <Perf position="top-left" />
          <PerspectiveCamera makeDefault position={[0, 7, 10]} zoom={1.5} />

          <OrbitControls
            makeDefault
            target={[0, 6, 0]}
            enablePan={true}
            ref={orbitControlsRef}
          />


          <Suspense fallback={null}>
            <ambientLight
              color={new Color("#FFFFFF")}
              intensity={1.4}
            />

            <Physics>
              <Level4Environment onLoad={() => setReady(true)} />
              <Nave />
            </Physics>

          </Suspense>

          <Controls orbitControlsRef={orbitControlsRef} ready={ready} />
        </Canvas>
      </KeyboardControls>
    </NaveProvider>
  );
};

export default Level4;