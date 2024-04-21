
import { OrbitControls, Stars } from "@react-three/drei";
import Level2Environment from "../components/Level2Environment";
import { Perf } from "r3f-perf";
import Galaxy from "../backgrounds/Galaxy";
import Lights from "../lights/Lights";
import { Suspense, useState, useEffect } from "react";
import { PerspectiveCamera } from '@react-three/drei';

const Level2 = ({ setCameraPosition }) => {

  useEffect(() => {
    setCameraPosition([50, 50, 50]);

    return () => {
      console.log('cleanup Level2');
    }
  }, [])


  return (
    <>
      <Perf position="top-left" />
      <PerspectiveCamera makeDefault position={[0, 10, 20]} />
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault target={[0, 10, 0]} />

      <Suspense fallback={null}>
        <Lights />
        <Level2Environment />
        {/* <Galaxy /> */}
      </Suspense>

    </>
  );
};

export default Level2;
