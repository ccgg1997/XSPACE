import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
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
        console.log('naveBodyRef', naveBodyRef.current)
        console.log('naveRef', naveRef.current)
        console.log('position', naveRef.current.position)
        setNave({
            ref: naveRef.current,
            body: naveBodyRef.current
        })
    }, [naveBodyRef.current, naveRef.current])
    return (
        <RigidBody ref={naveBodyRef}
            colliders={false}
            // type="fixed"
            gravityScale={0}
            enabledRotations={[false, false, false]}
            restitution={0}
            name="naveEspacial"
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.nave_espacial.geometry}
                material={materials.FrontColor}
                position={[0, 0, -19.468]}
                ref={naveRef}
                frustumCulled={false}
            >
                <CuboidCollider
                    args={[0.25, 2, 2]}
                    position={[0, 2.3, -1]}
                />
                <CuboidCollider
                    args={[3, 0.4, 2]}
                    position={[0, 3.5, -1]}
                />
            </mesh>

        </RigidBody >
    )

}
useGLTF.preload('/assets/models/NaveDefault.glb')