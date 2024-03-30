import {useGLTF, useTexture} from "@react-three/drei"
import { Color, RepeatWrapping,MeshBasicMaterial } from 'three';

export default function World(props){
    // const {nodes, materials} =useGLTF('/assets/models/world/squisgame.glb');
    const {nodes, materials} =useGLTF('/assets/models/world/nave_espacial.glb');
    console.log("hola")
    console.log(nodes)
    const PATH = '/assets/textures/floor/';
    // const propsTexture =  useTexture({
    //     map : PATH + 'gray_rocks_diff_1k.jpg',
    //     displacementMap: PATH + 'gray_rocks_disp_1k.png',
    //     normalMap: PATH + 'gray_rocks_nor_dx_1k.jpg',
    //     roughnessMap: PATH + 'gray_rocks_rough_1k.jpg',
    // }
    // ) 
    // console.log(propsTexture)
    
    // propsTexture.map.repeat.set(4,64);
    // propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    // propsTexture.displacementMap.repeat.set(4,64);
    // propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

    // propsTexture.normalMap.repeat.set(4,64);
    // propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;

    // propsTexture.roughnessMap.repeat.set(4,64);
    // propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;

    return (
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.nave_espacial.geometry}
            material={new MeshBasicMaterial({ color: new Color("red") })}
            scale={0.25}
          />
        </group>
      )
}

useGLTF.preload('/assets/models/world/squisgame.glb')
