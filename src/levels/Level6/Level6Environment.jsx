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
        scale={[0.3692, 0.1538, 7.5385]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[0, 5, -245]}
        scale={[0.3692, 0.1538, 7.5385]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nave_espacial.geometry}
        material={materials.FrontColor}
        scale={[1.0986, 1.0085, 0.9377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst001.geometry}
        material={materials['Concrete Obstacle']}
        position={[6.1841, 1.8312, -52.6708]}
        scale={[0.7409, 0.2757, 0.0402]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst008.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.8481, 6.0118, -66.8359]}
        scale={[0.5719, 0.3001, 0.2795]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst014.geometry}
        material={materials['Concrete Obstacle']}
        position={[3.9996, 7.5883, -79.6308]}
        scale={[1, 0.3125, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst002.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.748, 1.6595, -86.3956]}
        scale={[0.5719, 0.3001, 0.2795]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst003.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.3261, 2.4921, -98.5203]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst004.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.3724, 1.1127, -95.093]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst005.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[9.6225, 5.7281, -98.9628]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst006.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.0029, 1.0464, -94.1011]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst007.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[3.264, 8.0781, -98.5773]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst009.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.1667, 8.7101, -107.5072]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst010.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.9313, 0.7981, -107.4382]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst011.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.8092, 8.2136, -109.9506]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst012.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.9641, 5.8417, -109.9506]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst013.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.2327, 3.499, -109.6865]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst015.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.7803, 2.6378, -111.907]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo003.geometry}
        material={materials['Material.004']}
        position={[-3.1815, 6.0626, -143.9014]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo005.geometry}
        material={materials['Material.005']}
        position={[1.0202, 6.142, -144.326]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo006.geometry}
        material={materials['Material.003']}
        position={[-8.9105, 6.013, -151.7369]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo007.geometry}
        material={materials['Material.007']}
        position={[-1.6511, 5.1449, -151.6516]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo008.geometry}
        material={materials['Material.006']}
        position={[-4.7088, 6.0924, -152.1615]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst016.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.3261, 2.4921, -98.5203]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst017.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.3724, 1.1127, -95.093]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst018.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[9.6225, 5.7281, -98.9628]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst019.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.0029, 1.0464, -94.1011]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst020.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[3.264, 8.0781, -98.5773]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst021.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.1667, 8.7101, -107.5072]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst022.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-0.9313, 0.7981, -107.4382]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst023.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.8092, 8.2136, -109.9506]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst024.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.9641, 5.8417, -109.9506]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst025.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.2327, 3.499, -109.6865]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst026.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.7803, 2.6378, -111.907]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst027.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.9037, 2.788, -173.2045]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst028.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.0961, 0.9768, -169.8849]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst029.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.2873, 2.8301, -175.3674]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst030.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.5805, 1.3423, -168.7853]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst031.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.6865, 8.374, -173.2615]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst032.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-7.2803, 7.5572, -182.1914]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst033.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.6757, 4.5614, -182.1224]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst034.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.4075, 5.9719, -186.2899]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst035.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.9869, 7.8585, -184.6349]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst036.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.8103, 0.4725, -184.3707]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst037.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[8.3734, 1.5406, -185.8266]}
        scale={[0.13, 0.0591, 0.1172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst038.geometry}
        material={materials['Concrete Obstacle']}
        position={[1.3856, 3.3106, -207.518]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-1.5552, -0.2331, -0.1913]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst039.geometry}
        material={materials['Concrete Obstacle']}
        position={[1.342, 8.4771, -225.9266]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-1.5552, -0.2331, -0.1913]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst040.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.8262, 7.8794, -242.806]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-1.5549, -0.2049, -0.1726]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst041.geometry}
        material={materials['Concrete Obstacle']}
        position={[-5.5518, 2.8742, -243.0944]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-0.7556, -0.2331, -0.1912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst042.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.8161, 3.2551, -263.6593]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-1.5552, -0.2331, -0.1913]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst043.geometry}
        material={materials['Concrete Obstacle']}
        position={[6.4493, 7.9805, -263.4263]}
        rotation={[0.7363, 0.045, 0.0008]}
        scale={[-0.7556, -0.2331, -0.1912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst044.geometry}
        material={materials['Concrete Obstacle']}
        position={[-0.0571, 6.4687, -297.2464]}
        rotation={[-0.173, 0.0755, 0.4165]}
        scale={[-1.5552, -0.2331, -0.1913]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst045.geometry}
        material={materials['Concrete Obstacle']}
        position={[0.2308, 5.8294, -280.3463]}
        rotation={[-2.5666, 0.1221, 0.5142]}
        scale={[-1.5552, -0.2331, -0.1913]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo004.geometry}
        material={materials.Material}
        position={[1.3347, 6.0212, -330.7756]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo009.geometry}
        material={materials['Material.002']}
        position={[8.5941, 5.1531, -330.6904]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo010.geometry}
        material={materials['Material.001']}
        position={[5.5364, 6.1006, -331.2002]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo011.geometry}
        material={materials['Material.004']}
        position={[-3.1815, 5.9863, -348.4313]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo012.geometry}
        material={materials['Material.005']}
        position={[1.0202, 6.0657, -348.8558]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo013.geometry}
        material={materials['Material.003']}
        position={[-8.9105, 5.8856, -356.2668]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo014.geometry}
        material={materials['Material.007']}
        position={[-1.6511, 5.0176, -356.1815]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo015.geometry}
        material={materials['Material.006']}
        position={[-4.7088, 5.9651, -356.6913]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst046.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-2.2466, 3.0648, -417.2135]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst047.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[6.5825, 0.3835, -413.894]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst048.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[7.7776, 3.1069, -419.3765]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst049.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-1.3223, 1.6191, -412.7943]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst050.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[1.9446, 8.6508, -417.2705]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst051.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-6.0221, 7.834, -426.2004]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst052.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-9.5137, 4.8382, -426.1315]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst053.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[4.7917, 1.9344, -430.2989]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst054.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-1.7287, 8.1353, -428.6439]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst055.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-6.6304, 0.7493, -428.3797]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst056.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[9.6316, 1.8174, -429.8356]}
        scale={[0.13, 0.0591, 0.1172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst057.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[0.2685, 2.0158, -442.6439]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst058.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.4376, 1.4239, -439.3244]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst059.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-5.9977, 4.1473, -444.8069]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst060.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[-3.1517, 2.6595, -438.2247]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_obst061.geometry}
        material={materials['Concrete Obstacle.001']}
        position={[5.1006, 4.0244, -442.7009]}
        scale={[0.1637, 0.0744, 0.1475]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo024.geometry}
        material={nodes.Cubo024.material}
        position={[-3.2066, 2.7193, -348.3997]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo025.geometry}
        material={nodes.Cubo025.material}
        position={[0.8449, 2.4783, -348.6598]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo026.geometry}
        material={nodes.Cubo026.material}
        position={[-1.6836, 2.7629, -356.1897]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo027.geometry}
        material={nodes.Cubo027.material}
        position={[-4.5138, 2.7054, -356.2618]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo028.geometry}
        material={nodes.Cubo028.material}
        position={[-8.9381, 2.9193, -356.2577]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo029.geometry}
        material={nodes.Cubo029.material}
        position={[-1.6836, 2.7629, -356.1897]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo030.geometry}
        material={nodes.Cubo030.material}
        position={[-4.5138, 2.7054, -356.2618]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo031.geometry}
        material={nodes.Cubo031.material}
        position={[-8.9381, 2.9193, -356.2577]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo032.geometry}
        material={nodes.Cubo032.material}
        position={[8.2748, 2.7629, -330.6]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo033.geometry}
        material={nodes.Cubo033.material}
        position={[5.4446, 2.7054, -330.6721]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo034.geometry}
        material={nodes.Cubo034.material}
        position={[1.0203, 2.9193, -330.668]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo035.geometry}
        material={nodes.Cubo035.material}
        position={[8.2748, 2.7629, -330.6]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo036.geometry}
        material={nodes.Cubo036.material}
        position={[5.4446, 2.7054, -330.6721]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo037.geometry}
        material={nodes.Cubo037.material}
        position={[1.0203, 2.9193, -330.668]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo038.geometry}
        material={nodes.Cubo038.material}
        position={[-1.6121, 2.9193, -151.6138]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo039.geometry}
        material={nodes.Cubo039.material}
        position={[-4.928, 2.9193, -151.9241]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo040.geometry}
        material={nodes.Cubo040.material}
        position={[-8.8703, 2.9193, -151.9241]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001.geometry}
        material={materials['Material.003']}
        position={[0.6988, 5.8756, -126.1496]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo002.geometry}
        material={materials['Material.007']}
        position={[7.9582, 5.0076, -126.0643]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo041.geometry}
        material={materials['Material.006']}
        position={[4.9005, 5.9551, -126.5742]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo042.geometry}
        material={nodes.Cubo042.material}
        position={[7.9972, 2.7819, -126.0265]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo043.geometry}
        material={nodes.Cubo043.material}
        position={[4.6812, 2.7819, -126.3368]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo044.geometry}
        material={nodes.Cubo044.material}
        position={[0.739, 2.7819, -126.3368]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo045.geometry}
        material={nodes.Cubo045.material}
        position={[-3.2988, 2.6497, -143.8031]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo046.geometry}
        material={nodes.Cubo046.material}
        position={[0.9367, 2.6497, -144.1936]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo047.geometry}
        material={materials['Material.003']}
        position={[2.503, 5.7976, -371.4846]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo048.geometry}
        material={materials['Material.007']}
        position={[9.7624, 4.9296, -371.3994]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo049.geometry}
        material={materials['Material.006']}
        position={[6.7047, 5.8771, -371.9092]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo050.geometry}
        material={nodes.Cubo050.material}
        position={[9.7298, 2.6749, -371.4076]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo051.geometry}
        material={nodes.Cubo051.material}
        position={[6.8996, 2.6174, -371.4796]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo052.geometry}
        material={nodes.Cubo052.material}
        position={[2.4753, 2.8313, -371.4755]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo053.geometry}
        material={nodes.Cubo053.material}
        position={[9.7298, 2.6749, -371.4076]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo054.geometry}
        material={nodes.Cubo054.material}
        position={[6.8996, 2.6174, -371.4796]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo055.geometry}
        material={nodes.Cubo055.material}
        position={[2.4753, 2.8313, -371.4755]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo016.geometry}
        material={materials['Material.004']}
        position={[-8.6964, 5.9863, -383.2667]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo017.geometry}
        material={materials['Material.005']}
        position={[-4.4947, 6.0657, -383.6913]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo018.geometry}
        material={nodes.Cubo018.material}
        position={[-8.7216, 2.7193, -383.2352]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo056.geometry}
        material={nodes.Cubo056.material}
        position={[-4.67, 2.4783, -383.4952]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo019.geometry}
        material={materials['Material.003']}
        position={[-3.9012, 5.5288, -392.4337]}
        scale={[0.4623, 0.7695, 0.3181]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo020.geometry}
        material={materials['Material.007']}
        position={[3.3582, 4.6607, -392.3484]}
        scale={[0.3572, 0.6005, 0.2458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo057.geometry}
        material={materials['Material.006']}
        position={[0.3005, 5.6082, -392.8582]}
        rotation={[-0.0006, 0, -0.0002]}
        scale={[0.432, 0.7192, 0.2974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo058.geometry}
        material={nodes.Cubo058.material}
        position={[3.3256, 2.406, -392.3566]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo059.geometry}
        material={nodes.Cubo059.material}
        position={[0.4955, 2.3485, -392.4287]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo060.geometry}
        material={nodes.Cubo060.material}
        position={[-3.9289, 2.5624, -392.4245]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo061.geometry}
        material={nodes.Cubo061.material}
        position={[3.3256, 2.406, -392.3566]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo062.geometry}
        material={nodes.Cubo062.material}
        position={[0.4955, 2.3485, -392.4287]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo063.geometry}
        material={nodes.Cubo063.material}
        position={[-3.9289, 2.5624, -392.4245]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.5028, -0.8507, -0.5587]}
      />
    </group>
  );
}

