import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
// import { useBox } from '@react-three/cannon';
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { socket } from "./socket-manager";
import { useProjectiles } from "../../context/ProjectilesContext";
import EnemyProjectile from "./EnemyProjectile";

const url = "https://josem-18.github.io/sourcesPI/models/NaveEnemy.glb"


export default function Nave2({ position }) {
    const naveBodyRef = useRef();
    const naveRef = useRef();
    const groupRef = useRef();
    const { nave, setNave } = useNave();
    const { nodes, materials, animations } = useGLTF(url);
    const { ref, actions, mixer } = useAnimations(animations, naveRef)
    const material = new THREE.MeshStandardMaterial({ color: "blue" });
    const [projectiles, setprojectiles] = useState([])

    const addProjectile = (projectile) => {
        setprojectiles((prev) => [...prev, projectile]);
    }

    const removeProjectile = (id) => {
        console.log('en remove projectile', id)
        console.log('projectiles', projectiles)
        setprojectiles((prev) => prev.filter((projectile) => projectile.id !== id));
    }


    const shootProjectile = (nave, addProjectile) => {
        const projectileId = THREE.MathUtils.generateUUID(); // Generar ID único
        const positionNave = nave.translation(); // Posición de la nave
        const position = [positionNave.x, positionNave.y + 4, positionNave.z - 60]; // Posición del proyectil

        addProjectile({ id: projectileId, position });
    };

    useEffect(() => {
        // Set up the WebSocket event listener for "player-moving"
        console.log("player-shot INITT")
        socket.on("player-shot", (transforms) => {
            shootProjectile(naveBodyRef.current, addProjectile);
        });
        socket.on("player-moving", (t) => {
            naveBodyRef.current.setTranslation({ x: -t.translation.x, y: t.translation.y, z: naveBodyRef.current.translation().z }, true)
        });


        // Clean up the event listener on component unmount
        return () => {
            socket.off("player-shot", (transforms) => console.log('disparo recibido', transforms));
        };
    }, [naveBodyRef]);

    useEffect(() => {
        if (nave.animation) {
            actions[nave.animation].setLoop(THREE.LoopOnce);
            actions[nave.animation].clampWhenFinished = true;
            actions[nave.animation]?.reset().play();//.fadeIn(0.5)
        } else {
            mixer.stopAllAction();
        }

        return () => {
            if (actions[nave.animation])
                actions[nave.animation].fadeOut(0.5);
        }

    }, [nave.animation]);

    return (
        <>
            <RigidBody ref={naveBodyRef}
                colliders={false}
                // type="fixed"
                gravityScale={0}
                enabledRotations={[false, false, false]}
                restitution={0}
            // name="naveEspacial"
            // position={position}
            >
                <group ref={naveRef}>

                    <primitive
                        castShadow
                        receiveShadow
                        object={nodes.nave_espacial}
                        position={position}
                        material={material}
                    >
                        <CuboidCollider
                            args={[0.25, 2, 2]}
                            position={[0, 2.5, -1]}
                        />
                        <CuboidCollider
                            args={[3, 0.4, 2]}
                            position={[0, 3.5, -1]}
                        />
                    </primitive>
                </group>

            </RigidBody >
            {projectiles.map((projectile) => (
                <EnemyProjectile position={projectile.position} id={projectile.id} key={projectile.id} speed={20} removeProjectile={removeProjectile} />
            ))}
        </>
    )

}
// useGLTF.preload('/assets/models/NaveDefault.glb')
