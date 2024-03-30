import React from 'react';

const Cristian = () => {
    return (
        <>
            <mesh position={[10, 7.52, 10]}>
                <coneGeometry args={[2, 15, 5]}
                 castsShadow={true}
                />
                <meshLambertMaterial color="brown" flatShading={true} />
            </mesh>
            <mesh position={[10, 14, 10]}>
                <sphereGeometry args={[5, 32, 32]} 
                 castsShadow={true}
                />
                <meshToonMaterial color="green" />
            </mesh>
        </>
    );
};

export default Cristian;
