import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody, BallCollider } from '@react-three/rapier';
import React, { useRef } from 'react';

const Live = ({ position , scale , onEarnLife }) => {
    const liveRef = useRef(null);
    const { nodes, materials } = useGLTF('/assets/models/items/lives.glb');
    let yPosition = 0;

    useFrame((state, delta) => {
        yPosition += Math.sin(delta * 1) + yPosition;
        if (liveRef.current) {
            liveRef.current.rotation.y += 0.05;
        }
    });

    const collisionManager = (event) => {
        if (event.other.rigidBodyObject.name === 'naveEspacial') {
            onEarnLife();
            if (liveRef.current) {
                liveRef.current.visible = false; // Ocultar la vida
                setTimeout(() => {
                    liveRef.current.visible = true; // Mostrar la vida después de 2 segundos
                    liveRef.current.position.set(...position); // Resetear la posición a la original
                }, 2000);
            }
        }
    };


    return (
        <RigidBody
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
            name="live"
            type="fixed"
            shape={'ball'}
            colliders={'ball'}
            sensors={true}
            sensor={true}
            // onIntersectionExit={() => { console.log('collision exit') }}
            onIntersectionEnter={collisionManager}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lives.geometry}
                material={materials.lives}
                position={position}
                scale={scale}
                ref={liveRef}
            >
            </mesh>


        </RigidBody >
    );
};

export default Live;