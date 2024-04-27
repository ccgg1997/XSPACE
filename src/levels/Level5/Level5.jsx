import { KeyboardControls, OrbitControls, Stars } from "@react-three/drei";
import Level5Environment from "./Level5Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../../backgrounds/Galaxy";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import useMovements from "../../utils/key-movements";

const level5 = () => {
  const orbitControlsRef = useRef();
  const map = useMovements();
  return (
    
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Perf position="top-left" />
        <PerspectiveCamera makeDefault position={[0, 6, 12]} zoom={1} />
        {/* <Lights />
      <EnviromentMap /> */}
        <OrbitControls
          makeDefault
          target={[0, 6, 0]}
          enablePan={true}
          ref={orbitControlsRef}
        />
        <ambientLight />
        <Suspense fallback={null}>
          
            <Level5Environment />
          
        </Suspense>
      </Canvas>

  );
};

export default level5;