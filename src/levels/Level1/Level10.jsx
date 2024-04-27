import { OrbitControls, Stars } from "@react-three/drei";
import World from "../../components/Level1Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../../backgrounds/Galaxy";
import Lights from "../../lights/Lights";
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';

const Level1 = () => {
  const logOrbitControlsProps = (controls) => {
    console.log('OrbitControls Properties:', controls);
  };
  return (
    <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
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


      </Canvas>
  );
};

export default Level1;
