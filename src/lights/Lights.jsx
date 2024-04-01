import { useControls } from "leva";
import { useMemo } from "react";
import { Color } from "three";

const Lights = () => {
  const optionsSpotLight = useMemo(() => {
    return {
      intensitySL: { value: 1000, min: 0, max: 1000, step: 1 },
      colorSL: { value: '#bfff00' },
    }
  }
    , []);

  // const { intensitySL, colorSL } = useControls('SpotLight', optionsSpotLight);

  return (
    <>
      <ambientLight
        color={new Color("#FFFFFF")}
        intensity={0.5}
      />

      {/* esta luz es */}
      {/* <directionalLight
        castShadow={true}
        position={[2, 10, 0]}
        color={new Color("#FFF700")}
        intensity={2}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}

      {/* esta luz es una luz puntual pero es costosa a nivel de rendimiento */}
      {/* <pointLight position={[0, 10, 40]} 
        color={new Color('#8f00ff')}
        intensity={1000} /> */}

      {/* <spotLight position={[0, 5, 40]}
        angle={Math.PI / 3}
        color={colorSL}
        intensity={intensitySL}
      ></spotLight>

      <hemisphereLight
        position={[2, 10, -2]}
        intensity={3}
        color={"red"}
        skyColor={"blue"}
      /> */}

    </>
  );
}

export default Lights;