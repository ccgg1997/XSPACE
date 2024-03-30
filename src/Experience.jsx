import { OrbitControls, Stars } from "@react-three/drei";
import World from "./world/World";
import {Perf} from "r3f-perf";
import Galaxy from "./backgrounds/Galaxy";
import EnviromentMap from "./enviroments/EnviromentMap";

const Experience = () => {
  
  return (
    <>
      <Perf position="top-left" />
      {/* <Lights />
      <EnviromentMap /> */}
      <OrbitControls makeDefault />
      <World  />
      <Galaxy/>
      
    </>
  );
};

export default Experience;
