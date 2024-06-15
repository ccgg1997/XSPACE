import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody, BallCollider } from '@react-three/rapier';
import React, { useEffect, useRef } from 'react';
import { socket } from "./socket-manager";

const url = "https://josem-18.github.io/sourcesPI/models/items/lives.glb"
const LivesGeneration = ({ position, scale, onEarnLife }) => {
    const liveRef = useRef(null);
    const liveBodyRef = useRef(null);
    const { nodes, materials } = useGLTF(url);
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

    useEffect(() => {
        socket.on("generate-live", (data) => {
            console.log('VIDA GENERADAAAA', data)
            liveBodyRef.current.setLinvel({ x: 0, y: 0, z: 18 }, true);
            console.log('liveBodyRef.current', liveBodyRef.current)
            //     setMessage('GANASTE!')

            //     setTimeout(() => {
            //         window.location.href = 'menu'
            //     }, 3000);
        });

        const interval = setInterval(() => {
            // console.log('generando vidaa')
            socket.emit("generate-live", {
                id: socket.id
            });
        }, 5000);

        return () => {
            socket.off("generate-live");
            clearInterval(interval);
        }
    }, [])



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
            onIntersectionEnter={collisionManager}
            // linearVelocity={[0, 0, velocity]}
            ref={liveBodyRef}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lives.geometry}
                material={materials.lives}
                position={[2, 4.5, -45]}
                scale={scale}
                ref={liveRef}
            >
            </mesh>


        </RigidBody >
    );
};

export default LivesGeneration;