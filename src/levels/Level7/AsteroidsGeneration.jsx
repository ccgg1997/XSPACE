import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { useNave } from '../../context/NaveContext';
import { useGame } from '../../context/GameContext';
import { Vector3 } from 'three';
import { RigidBody } from "@react-three/rapier"
import { Sphere } from '@react-three/drei';
import { patchUser } from '../../db/user-collection';
import { useAuth } from '../../context/AuthContext';

const generateInitialStarPosition = () => {
    return {
        x: Math.floor(Math.random() * 30) - 20,
        y: Math.floor(Math.random() * 14) - 2,
        z: -72
    }
}


const Star = ({ position, velocity, collisionCallback }) => {
    const refBody = useRef();
    const { nave } = useNave();
    const { game, setGame, setMessage, removeLive } = useGame();


    const collisionManager = (event) => {
        if (event.other.rigidBodyObject.name == "naveEspacial") {
            removeLive();
            collisionCallback();
        }
        refBody.current.setTranslation(generateInitialStarPosition(), true)
    }

    useFrame(() => {
        if (game.paused) {
            refBody.current?.setLinvel({ x: 0, y: 0, z: 0 }, true);
        } else {
            refBody.current?.setLinvel({ x: 0, y: 0, z: velocity }, true);
        }
        const currentTranslation = refBody.current?.translation()
        if (currentTranslation?.z > 5) {
            refBody.current.setTranslation(generateInitialStarPosition(), true)

        }
    });

    return (
        <RigidBody ref={refBody}
            position={position}
            colliders="ball"
            gravityScale={0}
            linearVelocity={[0, 0, velocity]}
            restitution={0}
            name="star"
            onCollisionEnter={collisionManager}
            enabledRotations={[false, false, false]}
        >
            <Sphere args={[1, 8, 8]}>
                <meshStandardMaterial color="#ADADAD" />
            </Sphere>
        </RigidBody>
    );
};

const AsteroidsGeneration = ({ canvasRef, orbitControlsRef }) => {
    const { nave } = useNave();
    const { game } = useGame();
    const [init, setInit] = useState(true)
    const [stars, setstars] = useState([])
    const starsRef = useRef(null);

    const numStars = 1;

    const generateNewStars = () => {
        const newStars = Array.from({ length: numStars }, () => {
            const position = generateInitialStarPosition();
            return {
                id: Date.now(),
                position: new Vector3(position.x, position.y, position.z),
                velocity:
                    Math.floor(Math.random() * (35 - 24 + 1)) + 24
            };
        });
        setstars(newStars);
    }



    useEffect(() => {
        //meteoritos
        generateNewStars();


    }, [])


    return (
        <>
            {init && <group ref={starsRef}>

                {stars.map((star, index) => (
                    <Star key={star.id + index} position={star.position} velocity={star.velocity} collisionCallback={generateNewStars} />
                ))}
            </group>}
        </>
    );
};

export default AsteroidsGeneration;