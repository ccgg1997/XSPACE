import { OrbitControls, Stars } from "@react-three/drei";
import World from "./Level6Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../../backgrounds/Galaxy";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";


const Level6 = () => {
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
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault target={[0, 10, 10]} />
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
