import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
// import { useBox } from '@react-three/cannon';
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef } from "react";

export default function Nave(props) {
    const naveBodyRef = useRef();
    const naveRef = useRef();
    const { setNave } = useNave();
    const { nodes, materials } = useGLTF('/assets/models/NaveDefault.glb');
    // const [ref] = useBox(() => ({
    //     type: 'Dynamic',
    //     position,
    //     gravityScale: 0, // Ignora la gravedad
    // }));

    useEffect(() => {
        setNave({
            ref: naveRef.current,
            body: naveBodyRef.current
        })
    }, [naveBodyRef.current, naveRef.current])
    return (
        <RigidBody ref={naveBodyRef} colliders="cuboid"
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
        >
            <mesh
                name="nave_espacial"
                castShadow
                receiveShadow
                geometry={nodes.nave_espacial.geometry}
                material={materials.FrontColor}
            />
        </RigidBody >
    )

}
useGLTF.preload('/assets/models/NaveDefault.glb')