import { OrbitControls, Stars } from "@react-three/drei";
import World from "./Level6Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../../backgrounds/Galaxy";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";



const Level6 = () => {
  const orbitControlsRef = useRef();
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
      <PerspectiveCamera makeDefault position={[0, 7, 10]} zoom={1.8} />
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault
            target={[0, 6, 0]}
            enablePan={true}
            ref={orbitControlsRef}
          />
      <ambientLight/>
      <Suspense fallback={null}>
        <Physics>
        <World />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Level6;
