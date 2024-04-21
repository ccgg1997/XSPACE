import { OrbitControls, Stars } from "@react-three/drei";
import World from "../components/Level1Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../backgrounds/Galaxy";
import Lights from "../lights/Lights";
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from "react";

const Level1 = () => {
  const logOrbitControlsProps = (controls) => {
    console.log('OrbitControls Properties:', controls);
  };
  return (
    <>
      <Perf position="top-left" />
      <PerspectiveCamera makeDefault position={[0, 10, 20]} />
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault target={[0, 10, 0]} onUpdate={logOrbitControlsProps} />

      <Suspense fallback={null}>
        <Lights />
        <World />
        <Galaxy />
      </Suspense>

    </>
  );
};

export default Level1;
