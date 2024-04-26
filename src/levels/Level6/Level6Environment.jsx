import React from 'react';
import { useGLTF, useTexture } from "@react-three/drei"


export default function Level6(props) {
  const { nodes, materials } = useGLTF('/assets/models/Level6.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.ConcreteWall}
        position={[0, 5, -245]}
        scale={[0.369, 0.154, 7.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0, 5, -245]}
        scale={[0.369, 0.154, 7.538]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nave_espacial.geometry}
        material={materials.FrontColor}
        scale={[1.099, 1.008, 0.938]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst001.geometry}
        material={materials['Concrete Obstacle']}
        position={[6.754, 3.225, -53.608]}
        scale={[0.741, 0.276, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst008.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.848, 6.012, -66.836]}
        scale={[0.572, 0.3, 0.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst014.geometry}
        material={materials['Concrete Obstacle']}
        position={[4, 7.588, -79.631]}
        scale={[1, 0.313, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst002.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.748, 1.66, -86.396]}
        scale={[0.572, 0.3, 0.279]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst009.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.167, 8.71, -107.507]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst011.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.809, 8.214, -109.951]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst013.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.233, 3.499, -109.686]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo003.geometry}
        material={materials['Material.004']}
        position={[-3.181, 6.063, -143.901]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo005.geometry}
        material={materials['Material.005']}
        position={[1.02, 6.142, -144.326]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo006.geometry}
        material={materials['Material.003']}
        position={[-8.91, 6.013, -151.737]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo007.geometry}
        material={materials['Material.007']}
        position={[-1.651, 5.145, -151.652]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo008.geometry}
        material={materials['Material.006']}
        position={[-4.709, 6.092, -152.161]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst018.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[8.337, 5.728, -98.963]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst021.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.167, 8.71, -107.507]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst023.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.809, 8.214, -109.951]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst025.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.233, 3.499, -109.686]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst027.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.904, 2.788, -173.204]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst028.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.096, 0.977, -169.885]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst029.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.287, 2.83, -175.367]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst030.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.58, 1.342, -168.785]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst031.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.686, 8.374, -173.261]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst032.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.28, 7.557, -182.191]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst033.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.676, 4.561, -182.122]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst034.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.408, 5.972, -186.29]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst035.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.987, 7.858, -184.635]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst036.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.81, 0.472, -184.371]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst037.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[8.373, 1.541, -185.827]}
        scale={[0.13, 0.059, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst038.geometry}
        material={materials['Concrete Obstacle']}
        position={[1.386, 3.311, -207.518]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-1.555, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst039.geometry}
        material={materials['Concrete Obstacle']}
        position={[1.342, 8.477, -225.927]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-1.555, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst040.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.826, 7.879, -242.806]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-1.555, -0.205, -0.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst041.geometry}
        material={materials['Concrete Obstacle']}
        position={[-5.552, 2.874, -243.094]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-0.756, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst042.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.816, 3.255, -263.659]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-1.555, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst043.geometry}
        material={materials['Concrete Obstacle']}
        position={[6.449, 7.981, -263.426]}
        rotation={[0.736, 0.045, 0.001]}
        scale={[-0.756, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst044.geometry}
        material={materials['Concrete Obstacle']}
        position={[-0.057, 6.469, -297.246]}
        rotation={[-0.173, 0.076, 0.417]}
        scale={[-1.555, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst045.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.231, 5.829, -280.346]}
        rotation={[-2.567, 0.122, 0.514]}
        scale={[-1.555, -0.233, -0.191]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo004.geometry}
        material={materials.Material}
        position={[1.335, 6.021, -330.776]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo009.geometry}
        material={materials['Material.002']}
        position={[8.594, 5.153, -330.69]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo010.geometry}
        material={materials['Material.001']}
        position={[5.536, 6.101, -331.2]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo011.geometry}
        material={materials['Material.004']}
        position={[-3.181, 5.986, -348.431]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo012.geometry}
        material={materials['Material.005']}
        position={[1.02, 6.066, -348.856]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo013.geometry}
        material={materials['Material.003']}
        position={[-8.91, 5.886, -356.267]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo014.geometry}
        material={materials['Material.007']}
        position={[-1.651, 5.018, -356.182]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo015.geometry}
        material={materials['Material.006']}
        position={[-4.709, 5.965, -356.691]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst046.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.247, 3.065, -417.214]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst047.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[6.583, 0.384, -413.894]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst048.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.778, 3.107, -419.376]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst049.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-1.322, 1.619, -412.794]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst050.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.945, 8.651, -417.271]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst051.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-6.022, 7.834, -426.2]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst052.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-9.514, 4.838, -426.131]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst053.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.792, 1.934, -430.299]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst054.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-1.729, 8.135, -428.644]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst055.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-6.63, 0.749, -428.38]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst056.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[9.632, 1.817, -429.836]}
        scale={[0.13, 0.059, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst057.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.269, 2.016, -442.644]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst058.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.438, 1.424, -439.324]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst059.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.998, 4.147, -444.807]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst060.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.152, 2.66, -438.225]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst061.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.101, 4.024, -442.701]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo024.geometry}
        material={nodes.Cubo024.material}
        position={[-3.207, 2.719, -348.4]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo025.geometry}
        material={nodes.Cubo025.material}
        position={[0.845, 2.478, -348.66]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo026.geometry}
        material={nodes.Cubo026.material}
        position={[-1.684, 2.763, -356.19]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo027.geometry}
        material={nodes.Cubo027.material}
        position={[-4.514, 2.705, -356.262]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo028.geometry}
        material={nodes.Cubo028.material}
        position={[-8.938, 2.919, -356.258]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo029.geometry}
        material={nodes.Cubo029.material}
        position={[-1.684, 2.763, -356.19]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo030.geometry}
        material={nodes.Cubo030.material}
        position={[-4.514, 2.705, -356.262]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo031.geometry}
        material={nodes.Cubo031.material}
        position={[-8.938, 2.919, -356.258]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo032.geometry}
        material={nodes.Cubo032.material}
        position={[8.275, 2.763, -330.6]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo033.geometry}
        material={nodes.Cubo033.material}
        position={[5.445, 2.705, -330.672]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo034.geometry}
        material={nodes.Cubo034.material}
        position={[1.02, 2.919, -330.668]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo035.geometry}
        material={nodes.Cubo035.material}
        position={[8.275, 2.763, -330.6]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo036.geometry}
        material={nodes.Cubo036.material}
        position={[5.445, 2.705, -330.672]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo037.geometry}
        material={nodes.Cubo037.material}
        position={[1.02, 2.919, -330.668]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo038.geometry}
        material={nodes.Cubo038.material}
        position={[-1.612, 2.919, -151.614]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo039.geometry}
        material={nodes.Cubo039.material}
        position={[-4.928, 2.919, -151.924]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo040.geometry}
        material={nodes.Cubo040.material}
        position={[-8.87, 2.919, -151.924]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001.geometry}
        material={materials['Material.003']}
        position={[0.699, 5.876, -126.15]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo002.geometry}
        material={materials['Material.007']}
        position={[7.958, 5.008, -126.064]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo041.geometry}
        material={materials['Material.006']}
        position={[4.9, 5.955, -126.574]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo042.geometry}
        material={nodes.Cubo042.material}
        position={[7.997, 2.782, -126.027]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo043.geometry}
        material={nodes.Cubo043.material}
        position={[4.681, 2.782, -126.337]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo044.geometry}
        material={nodes.Cubo044.material}
        position={[0.739, 2.782, -126.337]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo045.geometry}
        material={nodes.Cubo045.material}
        position={[-3.299, 2.65, -143.803]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo046.geometry}
        material={nodes.Cubo046.material}
        position={[0.937, 2.65, -144.194]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo047.geometry}
        material={materials['Material.003']}
        position={[2.503, 5.798, -371.485]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo048.geometry}
        material={materials['Material.007']}
        position={[9.762, 4.93, -371.399]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo049.geometry}
        material={materials['Material.006']}
        position={[6.705, 5.877, -371.909]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo050.geometry}
        material={nodes.Cubo050.material}
        position={[9.73, 2.675, -371.408]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo051.geometry}
        material={nodes.Cubo051.material}
        position={[6.9, 2.617, -371.48]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo052.geometry}
        material={nodes.Cubo052.material}
        position={[2.475, 2.831, -371.476]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo053.geometry}
        material={nodes.Cubo053.material}
        position={[9.73, 2.675, -371.408]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo054.geometry}
        material={nodes.Cubo054.material}
        position={[6.9, 2.617, -371.48]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo055.geometry}
        material={nodes.Cubo055.material}
        position={[2.475, 2.831, -371.476]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo016.geometry}
        material={materials['Material.004']}
        position={[-8.696, 5.986, -383.267]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo017.geometry}
        material={materials['Material.005']}
        position={[-4.495, 6.066, -383.691]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo018.geometry}
        material={nodes.Cubo018.material}
        position={[-8.722, 2.719, -383.235]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo056.geometry}
        material={nodes.Cubo056.material}
        position={[-4.67, 2.478, -383.495]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo019.geometry}
        material={materials['Material.003']}
        position={[-3.901, 5.529, -392.434]}
        scale={[0.462, 0.77, 0.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo020.geometry}
        material={materials['Material.007']}
        position={[3.358, 4.661, -392.348]}
        scale={[0.357, 0.601, 0.246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo057.geometry}
        material={materials['Material.006']}
        position={[0.3, 5.608, -392.858]}
        rotation={[-0.001, 0, 0]}
        scale={[0.432, 0.719, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo058.geometry}
        material={nodes.Cubo058.material}
        position={[3.326, 2.406, -392.357]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo059.geometry}
        material={nodes.Cubo059.material}
        position={[0.495, 2.349, -392.429]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo060.geometry}
        material={nodes.Cubo060.material}
        position={[-3.929, 2.562, -392.425]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo061.geometry}
        material={nodes.Cubo061.material}
        position={[3.326, 2.406, -392.357]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo062.geometry}
        material={nodes.Cubo062.material}
        position={[0.495, 2.349, -392.429]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo063.geometry}
        material={nodes.Cubo063.material}
        position={[-3.929, 2.562, -392.425]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.503, -0.851, -0.559]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst062.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-4.82, 2.738, -98.509]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst003.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.633, 1.136, -94.039]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst006.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.819, 0.652, -95.052]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst004.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[3.299, 8.137, -98.123]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst005.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.74, 0.744, -107.174]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst007.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.735, 2.731, -111.666]}
        scale={[0.164, 0.074, 0.148]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst010.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.04, 6.665, -110.139]}
        scale={[0.164, 0.074, 0.148]}
      />
    </group>
  );
}

