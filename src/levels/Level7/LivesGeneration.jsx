import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody, BallCollider } from '@react-three/rapier';
import React, { useEffect, useRef, useState } from 'react';
import { socket } from "./socket-manager";
import { useGame } from '../../context/GameContext';
import * as THREE from 'three';

const url = "https://josem-18.github.io/sourcesPI/models/items/lives.glb"
const generateLiveFrecuency = 10000;

const EnemyLive = ({ id, speed, removeEnemyLive, position }) => {
    const material = new THREE.MeshStandardMaterial({ color: "blue" });
    const { nodes, materials } = useGLTF(url);
    const ref = useRef();
    const { game } = useGame();
    const liveRef = useRef(null);
    const liveBodyRef = useRef(null);

    useFrame(() => {
        if (!game.paused) {
            liveBodyRef.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
        } else {
            liveBodyRef.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
        }

    });

    useEffect(() => {
        const timer = setTimeout(() => {
            removeEnemyLive(id);
        }, generateLiveFrecuency);

        return () => clearTimeout(timer);
    }, []);

    const collisionManager = (event) => {
        removeEnemyLive(id);
        console.log('vida enemiga colisiona con ', event.other.rigidBodyObject.name);
        // if (event.other.rigidBodyObject.name === 'naveEspacial') {
        //     onEarnLife();
        //     if (liveRef.current) {
        //         liveRef.current.visible = false; // Ocultar la vida
        //     }
        // }
    };

    useFrame((state, delta) => {
        // yPosition += Math.sin(delta * 1) + yPosition;
        if (liveRef.current) {
            liveRef.current.rotation.y += 0.05;
        }
    });

    return (
        <RigidBody
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
            name="live"
            // type="fixed"
            shape={'ball'}
            colliders={'ball'}
            sensors={true}
            sensor={true}
            linearVelocity={[0, 0, speed]}
            onIntersectionEnter={collisionManager}
            // linearVelocity={[0, 0, velocity]}
            ref={liveBodyRef}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lives.geometry}
                material={material}
                position={position}
                scale={1}
                ref={liveRef}
            >
            </mesh>


        </RigidBody >
    );
}

const FriendlyLive = ({ id, speed, removeFriendlyLive, position }) => {
    const { nodes, materials } = useGLTF(url);
    const ref = useRef();
    const { game } = useGame();
    const liveRef = useRef(null);
    const liveBodyRef = useRef(null);
    const { addLive } = useGame();

    useFrame(() => {
        if (!game.paused) {
            liveBodyRef.current?.setLinvel(new THREE.Vector3(0, 0, speed), true);
        } else {
            liveBodyRef.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
        }

    });

    useEffect(() => {
        const timer = setTimeout(() => {
            removeFriendlyLive(id);
        }, generateLiveFrecuency);

        return () => clearTimeout(timer);
    }, []);

    const collisionManager = (event) => {
        removeFriendlyLive(id);
        addLive();
        console.log('vida OK colisiona con ', event.other.rigidBodyObject.name);
        // if (event.other.rigidBodyObject.name === 'naveEspacial') {
        //     onEarnLife();
        //     if (liveRef.current) {
        //         liveRef.current.visible = false; // Ocultar la vida
        //     }
        // }
    };

    useFrame((state, delta) => {
        // yPosition += Math.sin(delta * 1) + yPosition;
        if (liveRef.current) {
            liveRef.current.rotation.y += 0.05;
        }
    });

    return (
        <RigidBody
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
            name="live"
            // type="fixed"
            shape={'ball'}
            colliders={'ball'}
            sensors={true}
            sensor={true}
            linearVelocity={[0, 0, speed]}
            onIntersectionEnter={collisionManager}
            // linearVelocity={[0, 0, velocity]}
            ref={liveBodyRef}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.lives.geometry}
                material={materials.lives}
                position={position}
                scale={1}
                ref={liveRef}
            >
            </mesh>


        </RigidBody >
    );
}

const LivesGeneration = ({ position, scale, onEarnLife }) => {
    const liveRef = useRef(null);
    const liveBodyRef = useRef(null);
    // let yPosition = 0;
    const [enemyLives, setenemyLives] = useState([])
    const [friendlyLives, setfriendlyLives] = useState([])
    const { setMessage } = useGame();

    const addEnemyLive = (enemyLive) => {
        setenemyLives((prev) => [...prev, enemyLive]);
    }

    const removeEnemyLive = (id) => {
        console.log('en remove enemyLive', id)
        console.log('enemyLives', enemyLives)
        setenemyLives((prev) => prev.filter((enemyLive) => enemyLive.id !== id));
    }

    const addFriendlyLive = (friendlyLive) => {
        setfriendlyLives((prev) => [...prev, friendlyLive]);
    }

    const removeFriendlyLive = (id) => {
        console.log('en remove friendlyLive', id)
        console.log('friendlyLives', friendlyLives)
        setfriendlyLives((prev) => prev.filter((friendlyLive) => friendlyLive.id !== id));
    }

    useEffect(() => {
        socket.on("generate-live", (data) => {
            console.log('VIDA GENERADAAAA', data)
            // liveBodyRef.current.setLinvel({ x: 0, y: 0, z: 18 }, true);
            // console.log('liveBodyRef.current', liveBodyRef.current)

            const projectileId = THREE.MathUtils.generateUUID(); // Generar ID único

            addEnemyLive({ id: projectileId, position: data.position });
        });

        const interval = setInterval(() => {
            const randomX = Math.random() * (10 - (-10)) + (-10);
            const randomY = Math.floor(Math.random() * 8) + 1;
            const emitLivePosition = [randomX, randomY, -50]
            socket.emit("generate-live", {
                id: socket.id,
                position: [-emitLivePosition[0], emitLivePosition[1], emitLivePosition[2]]
            });
            const projectileId = THREE.MathUtils.generateUUID(); // Generar ID único
            addFriendlyLive({ id: projectileId, position: emitLivePosition });
        }, generateLiveFrecuency);

        return () => {
            socket.off("generate-live");
            clearInterval(interval);
        }
    }, [])



    return (
        <>
            {enemyLives.map((enemyLive) => (
                <EnemyLive id={enemyLive.id} key={enemyLive.id} position={enemyLive.position} speed={-8} removeEnemyLive={removeEnemyLive} />
            ))}
            {friendlyLives.map((friendlyLive) => (
                <FriendlyLive id={friendlyLive.id} key={friendlyLive.id} position={friendlyLive.position} speed={8} removeFriendlyLive={removeFriendlyLive} />
            ))}
        </>
    );
};

export default LivesGeneration;