import React from 'react';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Andres = () => {
    const boxRef = useRef(null)

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1*delta
        boxRef.current.rotation.y += 1*delta
    })

    return (
        
        <>
            <mesh position={[0,1,45]} ref={boxRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshLambertMaterial color="blue" />
            </mesh>
        </>
    );
};

export default Andres;
