import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
// import { useBox } from '@react-three/cannon';
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

const url = "https://josem-18.github.io/sourcesPI/models/NaveDefault.glb"
export default function Nave(props) {
    const naveBodyRef = useRef();
    const naveRef = useRef();
    const groupRef = useRef();
    const { nave, setNave } = useNave();
    const { nodes, materials, animations } = useGLTF(url);
    const { ref, actions, mixer } = useAnimations(animations, naveRef)

    useEffect(() => {
        setNave({
            ...nave,
            ref: naveRef.current,
            body: naveBodyRef.current
        })
    }, [naveBodyRef.current, naveRef.current])

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
                // material={materials.FrontColor}
                // position={[0, 0, -19.468]}
                // ref={naveRef}
                //frustumCulled={false}
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
useGLTF.preload(url)
