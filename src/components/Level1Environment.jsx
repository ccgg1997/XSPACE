import { useGLTF, useTexture } from "@react-three/drei"
import { Color, RepeatWrapping, MeshBasicMaterial } from 'three';

const url = "https://josem-18.github.io/sourcesPI/models/world/nave_espacial.glb"
const url2 = "https://josem-18.github.io/sourcesPI/models/world/SquidGamesMaik.glb"
const url3 = "https://josem-18.github.io/sourcesPI/textures/moon_floor/"
export default function Level1(props) {
  // const {nodes, materials} =useGLTF('/assets/models/world/squisgame.glb');
  const { nodes, materials } = useGLTF(url);
  const { nodes: nodesSG, materials: materialsSG } = useGLTF(url2);
  const PATH = url3;
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

useGLTF.preload(url)
useGLTF.preload(url2);