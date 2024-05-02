import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/level1.glb")

  return (
    <group {...props} dispose={null}>
      {/* <group>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders="trimesh"><mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roca.geometry}
                    material={materials.roca}
                    position={[-2.13, 1.09, -8.547]}
                /></RigidBody>
                <RigidBody type="fixed" colliders="trimesh"><mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.roca2.geometry}
                    material={materials.roca2}
                    position={[3.929, 1.09, -8.547]}
                /></RigidBody>
            </group> */}

      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.roca.geometry}
        material={materials.roca}
        position={[-2.13, 1.09, -8.547]}
      /></RigidBody>
      <RigidBody type="fixed" colliders="trimesh"><mesh
        castShadow
        receiveShadow
        geometry={nodes.roca2.geometry}
        material={materials.roca2}
        position={[3.929, 1.09, -8.547]}
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
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair.geometry}
          material={materials['Material.003']}
          position={[-1.687, 0.449, -50.709]}
          rotation={[-Math.PI, 1.543, -Math.PI]}
          scale={[0.05, 0.025, 0.1]}>
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
          material={materials.PC4}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_1.geometry}
          material={materials.Material}
        />
      </group></RigidBody>
    </group>
  );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

