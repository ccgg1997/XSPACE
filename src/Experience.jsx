import { OrbitControls, Stars } from "@react-three/drei";
import World from "./world/World";
import { Perf } from "r3f-perf";
import Galaxy from "./backgrounds/Galaxy";
import Lights from "./lights/Lights";
import EnviromentMap from "./enviroments/EnviromentMap";
import { Suspense } from "react";

const Experience = () => {

  return (
    <>
      <Perf position="top-left" />
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault target={[0, 10, 10]} />

      <Suspense fallback={null}>
        <Lights />
        <World />
        <Galaxy />
      </Suspense>

    </>
  );
};

export default Experience;
