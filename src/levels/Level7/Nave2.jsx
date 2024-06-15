import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
// import { useBox } from '@react-three/cannon';
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { socket } from "./socket-manager";
import { shootProjectile } from "../../utils/shootProjectile";
import { useProjectiles } from "../../context/ProjectilesContext";

const url = "https://josem-18.github.io/sourcesPI/models/NaveEnemy.glb"
export default function Nave2({ position }) {
    const naveBodyRef = useRef();
    const naveRef = useRef();
    const groupRef = useRef();
    const { nave, setNave } = useNave();
    const { nodes, materials, animations } = useGLTF(url);
    const { ref, actions, mixer } = useAnimations(animations, naveRef)
    const material = new THREE.MeshStandardMaterial({ color: "blue" }); // Cambiamos el color de la bomba a verde
    const { addProjectile, paintProjectiles } = useProjectiles();

    // useEffect(() => {
    //     setNave({
    //         ...nave,
    //         ref: naveRef.current,
    //         body: naveBodyRef.current
    //     })
    // }, [naveBodyRef.current, naveRef.current])

    useEffect(() => {
        // Set up the WebSocket event listener for "player-moving"
        socket.on("player-shot", (transforms) => {
            console.log('disparo recibido', transforms);
            console.log('naveBodyRef', naveBodyRef.current)
            shootProjectile({ body: naveBodyRef.current }, addProjectile);
            console.log('disparo pintado', transforms);
        });
        //movePlayer(transforms));

        // Clean up the event listener on component unmount
        return () => {
            socket.off("player-shot", (transforms) => console.log('disparo recibido', transforms));
        };
    }, [naveBodyRef, naveBodyRef.current, addProjectile]);

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
            {paintProjectiles(20)}
        </>
    )

}
// useGLTF.preload('/assets/models/NaveDefault.glb')
