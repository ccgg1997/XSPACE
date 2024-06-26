import { useEffect, useRef } from 'react'
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useFrame } from '@react-three/fiber';
import { useGame } from '../../context/GameContext';
import { useNave } from '../../context/NaveContext';

const url = "https://josem-18.github.io/sourcesPI/models/Level6.glb"
export default function Level6Environment({ args, onLoad, collisionCallback }) {
  const { nodes, materials, scene } = useGLTF(url);
  const { nave } = useNave();
  const { game, setGame } = useGame();
  
  const asteroidsRefs = useRef([]);
  const amplitude = 3.5;

  useEffect(() => {
    onLoad();
    setGame({ ...game });
  }, [scene]);

  const collisionManager = (event) => {
    if (event.other.rigidBodyObject.name === "naveEspacial") {
      setGame({ ...game, paused: true, isCollided: true });
      collisionCallback();
    }
  };


  useFrame((state) => {
    asteroidsRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index % 2 === 0) {
          // Movimiento de lado a lado para índices pares
          ref.position.x = Math.cos(state.clock.getElapsedTime() + index) * amplitude;
        } else {
          // Movimiento circular para índices impares
          ref.position.x = Math.cos(state.clock.getElapsedTime() + index) * amplitude;
          ref.position.y = Math.sin(state.clock.getElapsedTime() + index) * amplitude;
        }
      }
    });
  });

  return (
    <group {...args} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh" restitution={0} frustumCulled={false} name="PARED">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walls.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials['Material.004']}
        />
        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
          <mesh
            ref={(el) => (asteroidsRefs.current[0] = el)}
            castShadow
            receiveShadow
            geometry={nodes.Asteroide002.geometry}
            material={materials['Material.003']}
            position={[-4.014, 2.088, -131.599]}
          />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
          <mesh
            ref={(el) => (asteroidsRefs.current[1] = el)}
            castShadow
            receiveShadow
            geometry={nodes.Asteroide003.geometry}
            material={materials['Material.003']}
            position={[1.335, 4.059, -190.794]}
            rotation={[0.034, -0.027, -0.682]}
          />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
          <group ref={(el) => (asteroidsRefs.current[2] = el)} position={[3.568, 5.537, -256.91]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Asteroide007_1.geometry}
              material={materials['Material.003']}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Asteroide007_2.geometry}
              material={materials['Material.001']}
            />
          </group>
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[3] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide005.geometry}
          material={materials['Material.001']}
          position={[-0.942, 3.293, -330.711]}
        />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[4] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide006.geometry}
          material={materials['Material.003']}
          position={[-0.345, 5.709, -409.259]}
        />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[5] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide007.geometry}
          material={materials['Material.003']}
          position={[3.568, 8.647, -653.768]}
        />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[6] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide008.geometry}
          material={materials['Material.007']}
          position={[1.361, 5.709, -443.885]}
          rotation={[-3.021, 0.26, -2.729]}
        />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[7] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide009.geometry}
          material={materials['Material.011']}
          position={[-0.345, 5.709, -554.364]}
        />
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders="trimesh"
          restitution={0}
          onCollisionEnter={collisionManager}
          name="Asteroide"
        >
        <mesh
          ref={(el) => (asteroidsRefs.current[8] = el)}
          castShadow
          receiveShadow
          geometry={nodes.Asteroide010.geometry}
          material={materials['Material.012']}
          position={[3.568, 8.647, -821.618]}
          rotation={[0, 0, 2.062]}
        />
        </RigidBody>

      </RigidBody>
    </group>
  );
}

useGLTF.preload(url);

