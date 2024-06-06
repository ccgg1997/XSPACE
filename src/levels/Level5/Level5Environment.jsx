import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useGame } from "../../context/GameContext";
import { Color, RepeatWrapping, MeshBasicMaterial } from 'three';

export default function Level5Environment({ args, onLoad, collisionCallback }) {
  const { nodes, materials, scene } = useGLTF("/assets/models/Level5.glb");
  const { game, setGame,togglePause } = useGame();
  useEffect(() => {
    onLoad();
  }, [scene]);

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name == "naveEspacial") {
      setGame({ ...game, paused: true, isCollided: true });
      collisionCallback();
    }
  };


  return (
    <group {...args} dispose={null}>
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
          geometry={nodes.Walls.geometry}
          material={nodes.Walls.material}
          position={[0, 5.015, -787.746]}
          scale={[0.369, 0.154, 24.571]}
        />
      </RigidBody>
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
          geometry={nodes.Floor.geometry}
          position={[0, 4.947, -786.929]}
          scale={[0.369, 0.154, 24.606]}
        >
        </mesh>
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
          geometry={nodes.Asteroide001.geometry}
          material={nodes.Asteroide001.material}
          position={[5.454, 2.938, -47.655]}
        >
        </mesh>
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
          geometry={nodes.Asteroide002.geometry}
          material={nodes.Asteroide002.material}
          position={[-4.014, 2.088, -109.803]}
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
          geometry={nodes.Asteroide003.geometry}
          material={nodes.Asteroide003.material}
          position={[1.335, 4.059, -190.794]}
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
          geometry={nodes.Asteroide004.geometry}
          material={nodes.Asteroide004.material}
          position={[3.568, 8.647, -256.91]}
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
          geometry={nodes.Asteroide005.geometry}
          material={nodes.Asteroide005.material}
          position={[-0.942, 3.293, -330.711]}
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
          geometry={nodes.Asteroide006.geometry}
          material={nodes.Asteroide006.material}
          position={[3.206, 5.709, -445.83]}
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
        geometry={nodes.Esfera.geometry}
        material={materials['Material.001']}
        position={[-12.803, 5.767, -630.071]}
        scale={16.766}
        onCollisionEnter={collisionManager}
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
      geometry={nodes.Esfera001.geometry}
      material={materials['Material.007']}
      position={[-12.803, 5.767, -630.071]}
      scale={16.766}
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
      geometry={nodes.Esfera002.geometry}
      material={materials['Material.008']}
      position={[53.009, 8.403, -807.081]}
      scale={52.776}
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
      geometry={nodes.Esfera003.geometry}
      material={materials['Material.009']}
      position={[-12.803, 5.767, -630.071]}
      scale={16.766}
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
      geometry={nodes.Esfera004.geometry}
      material={materials['Material.010']}
      position={[-31.148, 9.235, -1064.73]}
      scale={28.71}
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
      geometry={nodes.Esfera005.geometry}
      material={materials['Material.011']}
      position={[-4.331, 6.746, -1251.582]}
      scale={7.274}
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
      geometry={nodes.Esfera006.geometry}
      material={materials['Material.012']}
      position={[14.619, 7.707, -1417.354]}
      scale={16.766}
    />
    </RigidBody>

    </group>
  );
}

useGLTF.preload("/assets/models/Level5.glb");