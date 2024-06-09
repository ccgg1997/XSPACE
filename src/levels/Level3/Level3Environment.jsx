import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useGame } from "../../context/GameContext";
import { useRef } from "react";
import { useNave } from "../../context/NaveContext";

export default function Level3({
  args,
  onLoad = () => {},
  collisionCallback = () => {},
}) {
  const { nodes, materials, scene } = useGLTF("/assets/models/Level3.glb");
  const { game, setGame } = useGame();
  const { nave } = useNave();
  const wallsRef = useRef();

  useEffect(() => {
    // console.log('Model loaded:', scene);
    onLoad();
  }, [scene]); //

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name == "naveEspacial") {
      setGame({ ...game, paused: true, isCollided: true });
      collisionCallback();
    }
  };

  useEffect(() => {
    setGame({ ...game, wallsRef: wallsRef });
  }, []);

  return (
    <group {...args} dispose={null}>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        frustumCulled={false}
        name="PISO"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials.ConcreteWall}
          position={[0, 5.015, -787.746]}
          scale={[0.369, 0.154, 24.571]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        frustumCulled={false}
        name="PARED"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, 4.947, -786.929]}
          scale={[0.369, 0.154, 24.606]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst001.geometry}
          material={materials["Concrete Obstacle"]}
          position={[6.754, 3.225, -74.355]}
          scale={[0.741, 0.276, 0.04]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst008.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.848, 6.012, -111.764]}
          scale={[0.572, 0.3, 0.279]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst014.geometry}
          material={materials["Concrete Obstacle"]}
          position={[4, 7.588, -178.418]}
          scale={[1, 0.313, 0.25]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst002.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.748, 1.66, -242.279]}
          scale={[0.572, 0.3, 0.279]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst009.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.167, 8.71, -324.647]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst011.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[5.809, 8.214, -327.091]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst013.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-3.233, 3.499, -326.826]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo003.geometry}
          material={materials["Material.004"]}
          position={[-5.342, 6.063, -453.456]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo005.geometry}
          material={materials["Material.005"]}
          position={[-1.14, 6.142, -453.881]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo006.geometry}
          material={materials["Material.003"]}
          position={[-11.071, 6.013, -515.77]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo007.geometry}
          material={materials["Material.007"]}
          position={[-3.811, 5.145, -515.684]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo008.geometry}
          material={materials["Material.006"]}
          position={[-6.869, 6.092, -516.194]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst018.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[8.337, 5.728, -309.925]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst021.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.167, 8.71, -324.647]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst023.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[5.809, 8.214, -327.091]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst025.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-3.233, 3.499, -326.826]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst027.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.904, 2.788, -573.143]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst028.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[4.096, 0.977, -427.116]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst029.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[7.287, 2.83, -552.191]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst030.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-2.58, 1.342, -426.016]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst031.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[0.686, 8.374, -573.2]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst032.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-7.28, 7.557, -616.735]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst033.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[0.676, 4.561, -616.666]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst034.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[4.408, 5.972, -620.834]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst035.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-2.987, 7.858, -619.179]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst036.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-5.81, 0.472, -395.746]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst037.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[8.373, 1.541, -454.521]}
          scale={[0.13, 0.059, 0.117]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst038.geometry}
          material={materials["Concrete Obstacle"]}
          position={[1.386, 3.311, -669.617]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-1.555, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst040.geometry}
          material={materials["Concrete Obstacle"]}
          position={[0.826, 7.879, -802.15]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-1.555, -0.205, -0.173]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst041.geometry}
          material={materials["Concrete Obstacle"]}
          position={[-5.552, 2.874, -802.438]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-0.756, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst042.geometry}
          material={materials["Concrete Obstacle"]}
          position={[0.816, 3.255, -868.937]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-1.555, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst043.geometry}
          material={materials["Concrete Obstacle"]}
          position={[6.449, 7.981, -868.704]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-0.756, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst044.geometry}
          material={materials["Concrete Obstacle"]}
          position={[-0.057, 6.469, -1000.98]}
          rotation={[-0.173, 0.076, 0.417]}
          scale={[-1.555, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst045.geometry}
          material={materials["Concrete Obstacle"]}
          position={[0.231, 5.829, -937.43]}
          rotation={[-2.567, 0.122, 0.514]}
          scale={[-1.555, -0.233, -0.191]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo004.geometry}
          material={materials["Material.002"]}
          position={[1.335, 6.021, -1059.93]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo009.geometry}
          material={materials["Material.002"]}
          position={[8.594, 5.153, -1059.845]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo010.geometry}
          material={materials["Material.001"]}
          position={[5.536, 6.101, -1060.355]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo011.geometry}
          material={materials["Material.004"]}
          position={[-3.181, 5.986, -1120.405]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo012.geometry}
          material={materials["Material.005"]}
          position={[1.02, 6.066, -1120.83]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo013.geometry}
          material={materials["Material.003"]}
          position={[-8.91, 5.886, -1182.469]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo014.geometry}
          material={materials["Material.007"]}
          position={[-1.651, 5.018, -1182.384]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo015.geometry}
          material={materials["Material.006"]}
          position={[-4.709, 5.965, -1182.894]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst046.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-2.247, 3.065, -1444.709]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst047.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[6.583, 0.384, -767.49]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst048.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[7.778, 3.107, -1496.987]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst049.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-1.322, 1.619, -1425.462]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst050.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[1.945, 8.651, -1444.766]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst051.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-6.022, 7.834, -1503.811]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst052.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-9.514, 4.838, -1503.742]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst053.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[4.792, 1.934, -1493.081]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst054.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-1.729, 8.135, -1506.254]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst055.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-6.63, 0.749, -1308.248]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst056.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[9.632, 1.817, -1433.216]}
          scale={[0.13, 0.059, 0.117]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst057.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[0.269, 2.016, -1497.423]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst058.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[5.438, 1.424, -1434.701]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst059.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-5.998, 4.147, -1514.413]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst060.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-3.152, 2.66, -1501.007]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst061.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[5.101, 4.024, -1430.191]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo024.geometry}
          material={nodes.Cubo024.material}
          position={[-3.207, 2.719, -1120.374]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo025.geometry}
          material={nodes.Cubo025.material}
          position={[0.845, 2.478, -1120.634]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo026.geometry}
          material={nodes.Cubo026.material}
          position={[-1.684, 2.763, -1182.392]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo027.geometry}
          material={nodes.Cubo027.material}
          position={[-4.514, 2.705, -1182.464]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo028.geometry}
          material={nodes.Cubo028.material}
          position={[-8.938, 2.919, -1182.46]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo029.geometry}
          material={nodes.Cubo029.material}
          position={[-1.684, 2.763, -1182.392]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo030.geometry}
          material={nodes.Cubo030.material}
          position={[-4.514, 2.705, -1182.464]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo031.geometry}
          material={nodes.Cubo031.material}
          position={[-8.938, 2.919, -1182.46]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo032.geometry}
          material={nodes.Cubo032.material}
          position={[8.275, 2.763, -1059.754]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo033.geometry}
          material={nodes.Cubo033.material}
          position={[5.445, 2.705, -1059.827]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo034.geometry}
          material={nodes.Cubo034.material}
          position={[1.02, 2.919, -1059.822]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo035.geometry}
          material={nodes.Cubo035.material}
          position={[8.275, 2.763, -1059.754]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo036.geometry}
          material={nodes.Cubo036.material}
          position={[5.445, 2.705, -1059.827]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo037.geometry}
          material={nodes.Cubo037.material}
          position={[1.02, 2.919, -1059.822]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo038.geometry}
          material={nodes.Cubo038.material}
          position={[-3.772, 2.919, -515.647]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo039.geometry}
          material={nodes.Cubo039.material}
          position={[-7.088, 2.919, -515.957]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo040.geometry}
          material={nodes.Cubo040.material}
          position={[-11.031, 2.919, -515.957]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo001.geometry}
          material={materials["Material.003"]}
          position={[2.205, 5.876, -388.405]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo002.geometry}
          material={materials["Material.007"]}
          position={[9.464, 5.008, -388.319]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo041.geometry}
          material={materials["Material.006"]}
          position={[6.407, 5.955, -388.829]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo042.geometry}
          material={nodes.Cubo042.material}
          position={[9.503, 2.782, -388.282]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo043.geometry}
          material={nodes.Cubo043.material}
          position={[6.187, 2.782, -388.592]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo044.geometry}
          material={nodes.Cubo044.material}
          position={[2.245, 2.782, -388.592]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo045.geometry}
          material={nodes.Cubo045.material}
          position={[-5.459, 2.65, -453.358]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo046.geometry}
          material={nodes.Cubo046.material}
          position={[-1.224, 2.65, -453.748]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo047.geometry}
          material={materials["Material.003"]}
          position={[2.503, 5.798, -1244.883]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo048.geometry}
          material={materials["Material.007"]}
          position={[9.762, 4.93, -1244.798]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo049.geometry}
          material={materials["Material.006"]}
          position={[6.705, 5.877, -1245.308]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo050.geometry}
          material={nodes.Cubo050.material}
          position={[9.73, 2.675, -1244.806]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo051.geometry}
          material={nodes.Cubo051.material}
          position={[6.9, 2.617, -1244.878]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo052.geometry}
          material={nodes.Cubo052.material}
          position={[2.475, 2.831, -1244.874]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo053.geometry}
          material={nodes.Cubo053.material}
          position={[9.73, 2.675, -1244.806]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo054.geometry}
          material={nodes.Cubo054.material}
          position={[6.9, 2.617, -1244.878]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo055.geometry}
          material={nodes.Cubo055.material}
          position={[2.475, 2.831, -1244.874]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo016.geometry}
          material={materials["Material.004"]}
          position={[-8.696, 5.986, -1306.514]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo017.geometry}
          material={materials["Material.005"]}
          position={[-4.495, 6.066, -1306.938]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo018.geometry}
          material={nodes.Cubo018.material}
          position={[-8.722, 2.719, -1306.482]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo056.geometry}
          material={nodes.Cubo056.material}
          position={[-4.67, 2.478, -1306.742]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo019.geometry}
          material={materials["Material.003"]}
          position={[-3.901, 5.529, -1368.272]}
          scale={[0.462, 0.77, 0.318]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo020.geometry}
          material={materials["Material.007"]}
          position={[3.358, 4.661, -1368.187]}
          scale={[0.357, 0.601, 0.246]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo057.geometry}
          material={materials["Material.006"]}
          position={[0.3, 5.608, -1368.696]}
          rotation={[-0.001, 0, 0]}
          scale={[0.432, 0.719, 0.297]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo058.geometry}
          material={nodes.Cubo058.material}
          position={[3.326, 2.406, -1368.195]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo059.geometry}
          material={nodes.Cubo059.material}
          position={[0.495, 2.349, -1368.267]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo060.geometry}
          material={nodes.Cubo060.material}
          position={[-3.929, 2.562, -1368.263]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo061.geometry}
          material={nodes.Cubo061.material}
          position={[3.326, 2.406, -1368.195]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo062.geometry}
          material={nodes.Cubo062.material}
          position={[0.495, 2.349, -1368.267]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo063.geometry}
          material={nodes.Cubo063.material}
          position={[-3.929, 2.562, -1368.263]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.503, -0.851, -0.559]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst062.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-4.82, 2.738, -309.471]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst003.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-0.633, 1.136, -290.173]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst006.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[7.819, 0.652, -252.749]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst004.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[3.299, 8.137, -309.084]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst005.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[-0.74, 0.744, -309.486]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst007.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[1.735, 2.731, -328.806]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst010.geometry}
          material={materials["Concrete Obstacle.001"]}
          position={[1.04, 6.665, -327.279]}
          scale={[0.164, 0.074, 0.148]}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        restitution={0}
        onCollisionEnter={collisionManager}
        name="obstaculo"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_obst012.geometry}
          material={materials["Concrete Obstacle"]}
          position={[0.826, 8.508, -731.791]}
          rotation={[0.736, 0.045, 0.001]}
          scale={[-1.555, -0.205, -0.173]}
        />
      </RigidBody>
      
    </group>
  );
}
