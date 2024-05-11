import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/level1.glb")
  const liveRef = useRef(null);
  let mostraVida = props.mostrarVidaExtra

  let yPosition = 0;

  useFrame((state, delta) => {
    yPosition += Math.sin(delta * 1) + yPosition; 
    if (liveRef.current) {
      liveRef.current.rotation.y += 0.01;
    }
  });
  

  return (
    <group {...props} dispose={null}>
      <RigidBody type="dynamic" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.roca.geometry}
        material={materials.roca}
        position={[-0.13, 18.645, -15.036]}
      /></RigidBody>
      <RigidBody name="ball" >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[0.33, 26, -13.132]}
        /></RigidBody>
      <RigidBody name="ball" >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[0.45, 65, -13.132]}
        /></RigidBody>
      <RigidBody name="ball">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[0, 20, -13.132]}
        /></RigidBody>

      <RigidBody name="ball" >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[0.13, 16, -13.132]}
        /></RigidBody>

      <RigidBody name="ball">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[-2.13, 16, -13.132]}
        /></RigidBody>
      <RigidBody name="ball" >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball.geometry}
          material={materials.Mball}
          position={[-2.13, 36, -16.132]}
        /></RigidBody>
      <RigidBody ><mesh
        castShadow
        receiveShadow
        geometry={nodes.roca2.geometry}
        material={materials.roca2}
        position={[1.286, 13.759, -21.584]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.floorMaterial}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.wallMaterial}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Lowerbox.geometry}
        material={materials.Upperbox}
        position={[3.541, 0, -21.124]}
        rotation={[0, 1.568, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Upperbox.geometry}
        material={materials.Upperbox}
        position={[2.503, 0.756, -21.127]}
        rotation={[0, 1.568, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Upperbox001.geometry}
        material={materials['Upperbox.001']}
        position={[2.503, 0.756, -46.49]}
        rotation={[0, 1.568, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Lowerbox001.geometry}
        material={materials['Upperbox.001']}
        position={[3.541, 0, -46.487]}
        rotation={[0, 1.568, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Upperbox002.geometry}
        material={materials['Upperbox.002']}
        position={[-1.377, 0.756, -70.785]}
        rotation={[0, 1.007, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Lowerbox002.geometry}
        material={materials['Upperbox.002']}
        position={[-0.5, 0, -70.23]}
        rotation={[0, 1.007, 0]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave.geometry}
        material={materials.piezaNave}
        position={[-4.217, 0.641, -41.272]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave001.geometry}
        material={materials['piezaNave.001']}
        position={[-4.217, 0.641, -43.235]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave002.geometry}
        material={materials['piezaNave.002']}
        position={[-4.217, 0.641, -45.346]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave003.geometry}
        material={materials['piezaNave.003']}
        position={[-4.217, 0.641, -47.123]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave004.geometry}
        material={materials['piezaNave.004']}
        position={[-4.217, 0.641, -48.633]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave005.geometry}
        material={materials['piezaNave.005']}
        position={[-2.899, 0.641, -47.123]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave006.geometry}
        material={materials['piezaNave.006']}
        position={[-2.899, 0.641, -45.346]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave007.geometry}
        material={materials['piezaNave.007']}
        position={[-2.899, 0.641, -43.235]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave008.geometry}
        material={materials['piezaNave.008']}
        position={[-2.899, 0.641, -41.272]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave009.geometry}
        material={materials['piezaNave.009']}
        position={[-1.419, 0.641, -41.272]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave010.geometry}
        material={materials['piezaNave.010']}
        position={[-1.419, 0.641, -43.235]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave011.geometry}
        material={materials['piezaNave.011']}
        position={[-1.419, 0.641, -45.346]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave012.geometry}
        material={materials['piezaNave.012']}
        position={[-1.419, 0.641, -47.123]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave013.geometry}
        material={materials['piezaNave.013']}
        position={[0.031, 0.641, -47.123]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave014.geometry}
        material={materials['piezaNave.014']}
        position={[0.031, 0.641, -45.346]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave015.geometry}
        material={materials['piezaNave.015']}
        position={[0.031, 0.641, -43.235]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave016.geometry}
        material={materials['piezaNave.016']}
        position={[0.031, 0.641, -41.272]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave017.geometry}
        material={materials['piezaNave.017']}
        position={[4.443, 0.641, -53.365]}
        rotation={[0, -0.02, -Math.PI]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave018.geometry}
        material={materials['piezaNave.018']}
        position={[4.402, 0.641, -51.254]}
        rotation={[0, -0.02, -Math.PI]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave019.geometry}
        material={materials['piezaNave.019']}
        position={[4.367, 0.641, -49.478]}
        rotation={[0, -0.02, -Math.PI]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.corazon.geometry}
        material={materials['Material.001']}
        position={[-3.931, 0.348, -52.982]}
        scale={[1, 3.715, 1]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave020.geometry}
        material={materials['piezaNave.020']}
        position={[0.031, 0.641, -48.613]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave021.geometry}
        material={materials['piezaNave.021']}
        position={[-1.419, 0.641, -48.613]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.piezaNave022.geometry}
        material={materials['piezaNave.022']}
        position={[-2.899, 0.641, -48.613]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.075, 4.174, 0.339]}
      /></RigidBody>
      {mostraVida && <RigidBody type="fixed" colliders="trimesh" name="live"><mesh
        castShadow
        receiveShadow
        geometry={nodes.live.geometry}
        material={materials.live}
        position={[-2.729, 0.948, -78.455]}
        ref={liveRef}
      /></RigidBody>}
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair.geometry}
          material={materials['Material.003']}
          position={[-1.687, 0.449, -50.709]}
          rotation={[-Math.PI, 1.543, -Math.PI]}
          scale={[0.10, 0.05, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['Material.002']}
            position={[0, 2, -0.282]}
            scale={[5.126, 0.228, 1.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.002']}
            position={[0, 10.358, 1.248]}
            scale={[5.076, 7.594, 0.131]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.003']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials['Material.003']}
            position={[0, -4.58, 0]}
            scale={[0.457, 4.58, 0.164]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials['Material.003']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={nodes.Cylinder007.material}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials['Material.003']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={nodes.Cylinder011.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials['Material.003']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015.geometry}
            material={nodes.Cylinder015.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder017.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials['Material.003']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={nodes.Cylinder019.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials.plastic}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={nodes.Cylinder023.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials.plastic}
            position={[0, -1.048, -0.749]}
            rotation={[0.282, 0, 0]}
            scale={[0.741, 0.634, 0.304]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025.geometry}
            material={materials['Material.003']}
            position={[1.001, 1.02, -0.34]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.164, 0.011, 0.045]}
          />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair001.geometry}
          material={materials['Material.007']}
          position={[-3, 1, -87.279]}
          scale={[0.1, 0.05, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Material.008']}
            position={[0, 10.358, 1.248]}
            scale={[5.076, 7.594, 0.131]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Material.008']}
            position={[0, 2, -0.282]}
            scale={[5.126, 0.228, 1.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials['Material.007']}
            position={[1.001, 1.02, -0.34]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.164, 0.011, 0.045]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['plastic.001']}
            position={[0, -1.048, -0.749]}
            rotation={[0.282, 0, 0]}
            scale={[0.741, 0.634, 0.304]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={nodes.Cylinder004.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026.geometry}
            material={nodes.Cylinder026.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027.geometry}
            material={materials['Material.007']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={nodes.Cylinder030.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031.geometry}
            material={materials['Material.007']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder034.geometry}
            material={nodes.Cylinder034.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035.geometry}
            material={materials['Material.007']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder037.geometry}
            material={nodes.Cylinder037.material}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038.geometry}
            material={materials['Material.007']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039.geometry}
            material={materials['plastic.001']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040.geometry}
            material={materials['Material.007']}
            position={[0, -4.58, 0]}
            scale={[0.457, 4.58, 0.164]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041.geometry}
            material={materials['Material.007']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair002.geometry}
          material={materials['Material.009']}
          position={[3.415, 1, -87.279]}
          scale={[0.1, 0.05, 0.2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials['Material.010']}
            position={[0, 2, -0.282]}
            scale={[5.126, 0.228, 1.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials['Material.010']}
            position={[0, 10.358, 1.248]}
            scale={[5.076, 7.594, 0.131]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042.geometry}
            material={materials['Material.009']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043.geometry}
            material={materials['Material.009']}
            position={[0, -4.58, 0]}
            scale={[0.457, 4.58, 0.164]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder044.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045.geometry}
            material={materials['Material.009']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046.geometry}
            material={nodes.Cylinder046.material}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            rotation={[0, -0.55, 0]}
            scale={[0.67, 0.96, 0.414]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048.geometry}
            material={materials['Material.009']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049.geometry}
            material={nodes.Cylinder049.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052.geometry}
            material={materials['Material.009']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053.geometry}
            material={nodes.Cylinder053.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056.geometry}
            material={materials['Material.009']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder057.geometry}
            material={nodes.Cylinder057.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder058.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059.geometry}
            material={materials['plastic.002']}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder060.geometry}
            material={nodes.Cylinder060.material}
            position={[0, -10.819, 0]}
            scale={[0.741, 0.96, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061.geometry}
            material={materials['plastic.002']}
            position={[0, -1.048, -0.749]}
            rotation={[0.282, 0, 0]}
            scale={[0.741, 0.634, 0.304]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062.geometry}
            material={materials['Material.009']}
            position={[1.001, 1.02, -0.34]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.164, 0.011, 0.045]}
          />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh" >
        <group
          position={[-3.43, 0.219, -92.327]}
          rotation={[-Math.PI, 0.526, -Math.PI]}
          scale={[0.103, 0.923, 0.072]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070.geometry}
            material={nodes.Cylinder070.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070_1.geometry}
            material={materials['Material.011']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pc3.geometry}
          material={materials['PC.002']}
          position={[-1.614, 2.836, -95.62]}
          rotation={[Math.PI, -1.559, Math.PI]}
          scale={[0.1, 4, 4]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pc4.geometry}
          material={materials.pc4}
          position={[3.343, 2.836, -95.62]}
          rotation={[Math.PI, -1.559, Math.PI]}
          scale={[0.1, 4, 4]}
        />
      </RigidBody>



      <RigidBody type="fixed" colliders="trimesh" > <mesh
        castShadow
        receiveShadow
        geometry={nodes.pc.geometry}
        material={materials.PC}
        position={[-2.72, 1.633, -50.751]}
        scale={[0.1, 3, 5]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh" > <mesh
        castShadow
        receiveShadow
        geometry={nodes.pc2.geometry}
        material={materials['PC.001']}
        position={[0.818, 2.836, -95.62]}
        rotation={[Math.PI, -1.559, Math.PI]}
        scale={[0.1, 4, 4]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh" >
        <group
          position={[-1.849, 0.304, -49.371]}
          rotation={[Math.PI, -1.023, Math.PI]}
          scale={[0.033, 0.3, 0.023]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069.geometry}
            material={nodes.Cylinder069.material}
          />
          <RigidBody type="fixed" colliders="trimesh"><mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069_1.geometry}
            material={materials.Material}
          /></RigidBody>
        </group></RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[0.235, 1.75, -11.367]}
          scale={[1, 0.694, 1]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[0.079, 2.89, -26.279]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[0.079, 2.89, -30.943]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[0.079, 2.89, -33.599]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.pared}
          position={[0.087, 0.332, -56.875]}
          scale={[1.061, 0.401, 1]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.pared}
          position={[0.087, 0.666, -61.214]}
          scale={[1.061, 0.809, 1]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials.pared}
        position={[0.087, 0.976, -65.9]}
        scale={[1.061, 2.708, 1]}
      /></RigidBody>

      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.roca}
        position={[0.065, 1.652, -24.073]}
        rotation={[Math.PI / 2, 0.005, -Math.PI / 2]}
      />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.pared}
          position={[2.147, 2.657, -27.29]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[1.18, 2.756, 1]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.pared}
          position={[-2.124, 2.843, -28.394]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['pared.002']}
        position={[0.079, 2.89, -35.645]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['pared.003']}
        position={[0.142, 2.89, -38.64]}
      /></RigidBody>
    </group>
  );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

