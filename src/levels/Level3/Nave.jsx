import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

export default function Nave(props) {
    const naveBodyRef = useRef();
    const naveRef = useRef();
    const { nave, setNave } = useNave();
    const { nodes, materials, animations } = useGLTF('/assets/models/NaveDefault.glb');
    const { ref, actions, mixer } = useAnimations(animations, naveRef);

    useEffect(() => {
        setNave({
            ...nave,
            ref: naveRef.current,
            body: naveBodyRef.current
        });
    }, [naveBodyRef.current, naveRef.current]);

    useEffect(() => {
        if (nave.animation) {
            actions[nave.animation].setLoop(THREE.LoopOnce);
            actions[nave.animation].clampWhenFinished = true;
            actions[nave.animation]?.reset().play(); // .fadeIn(0.5)
        } else {
            mixer.stopAllAction();
        }

        return () => {
            if (actions[nave.animation])
                actions[nave.animation].fadeOut(0.5);
        };
    }, [nave.animation]);

    return (
        <RigidBody ref={naveBodyRef}
            colliders={false}
            // type="fixed"
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
            name="naveEspacial"
        >
            <group ref={naveRef}>

                <primitive
                    castShadow
                    receiveShadow
                    object={nodes.nave_espacial}

                >
                    <CuboidCollider
                        args={[0.25, 2, 2]}
                        position={[0, 2.3, -1]}
                    />
                    <CuboidCollider
                        args={[3, 0.4, 2]}
                        position={[0, 3.5, -1]}
                    />
                </primitive>
            </group>

        </RigidBody >
    )
}

useGLTF.preload('/assets/models/NaveDefault.glb');
