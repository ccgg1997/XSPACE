import { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"
import { useFrame, useThree } from '@react-three/fiber';
import { Color, RepeatWrapping, MeshBasicMaterial } from 'three';
import { useGame } from '../../context/GameContext';
import { useNave } from '../../context/NaveContext';

export default function Level7Environment({ args, onLoad = () => { } }) {
  // const {nodes, materials} =useGLTF('/assets/models/world/squisgame.glb');
  const { nodes, materials, scene } = useGLTF('/assets/models/world/SquidGamesMaik.glb');
  const { nave } = useNave();
  const { game, setGame } = useGame();
  const wallsRef = useRef();

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

  useEffect(() => {
    onLoad();
  }, [scene]);

  useEffect(() => {
    setGame({ ...game })
  }, [])


  return (
    <group {...args} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PISO">
        <mesh name="Floor"
          geometry={nodes.Floor.geometry}
          material={materials.Material}
          position={[0, 0, -120]}
        >
          <meshStandardMaterial {...propsTexture} />
        </mesh>
      </RigidBody>
    </group>
  )

}
useGLTF.preload('/assets/models/Level7.glb')