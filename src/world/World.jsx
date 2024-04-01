import { useGLTF, useTexture } from "@react-three/drei"
import { Color, RepeatWrapping, MeshBasicMaterial } from 'three';

export default function World(props) {
  // const {nodes, materials} =useGLTF('/assets/models/world/squisgame.glb');
  const { nodes, materials } = useGLTF('/assets/models/world/nave_espacial.glb');
  const { nodes: nodesSG, materials: materialsSG } = useGLTF("/assets/models/world/SquidGamesMaik.glb");
  const PATH = "/assets/textures/moon_floor/";
  const propsTexture = useTexture({
    map: PATH + "rock_boulder_dry_diff_1k.jpg",
    normalMap: PATH + "rock_boulder_dry_nor_gl_1k.jpg",
    roughnessMap: PATH + "rock_boulder_dry_rough_1k.jpg",
    displacementMap: PATH + "rock_boulder_dry_disp_1k.png",
  });

  propsTexture.map.repeat.set(4, 64);
  propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

  propsTexture.normalMap.repeat.set(4, 64);
  propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;

  propsTexture.roughnessMap.repeat.set(4, 64);
  propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;

  propsTexture.displacementMap.repeat.set(4, 64);
  propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nave_espacial.geometry}
        material={new MeshBasicMaterial({ color: new Color("red") })}
        scale={0.25}
        position={[0, 0, 0]}
      />
      <mesh name="Floor"
        geometry={nodesSG.Floor.geometry}
        material={materialsSG.Material}
        position={[0, 0, -120]}
      >
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/assets/models/world/squisgame.glb')
useGLTF.preload("/assets/models/world/SquidGamesMaik.glb");