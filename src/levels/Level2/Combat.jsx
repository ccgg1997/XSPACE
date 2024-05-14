import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from "@react-three/fiber";
import { useNave } from '../../context/NaveContext';
import { useGame } from '../../context/GameContext';
import { Vector3 } from 'three';

const Star = ({ position }) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#ADADAD" />
        </mesh>
    );
};

const Combat = ({ canvasRef, setMensaje }) => {
    const { nave, setNave } = useNave();
    const { game, setGame } = useGame();
    const [init, setInit] = useState(false)
    const [stars, setstars] = useState([])

    const starsRef = useRef();

    const numStars = 20;


    useFrame((state, delta) => {
        if (game.paused) return;
        const currentTranslation = nave.body?.translation()
        if (currentTranslation?.z < -907) {
            setInit(true)
            starsRef?.current.children.forEach((star, index) => {
                const { velocity } = stars[index];
                star.position.z += velocity;

                if (star.position.z > -900) {
                    star.position.x = Math.floor(Math.random() * 41) - 20
                    star.position.y = Math.floor(Math.random() * 41) - 20
                    star.position.z = -1040;
                    // set(new Vector3(Math.random() * 600 - 400, Math.random() * 600 - 400, -1030));
                }
            });
        }

    })

    useEffect(() => {
        if (init) {
            console.log('INICIOOOOO', game.wallsRef)
            setMensaje("!Esquiva los meteoritos!")

            canvasRef.current.style.background = 'black';
            if (game.wallsRef) {
                game.wallsRef.current.visible = false;
            }

            const generatedStars = Array.from({ length: numStars }, () => {
                return {
                    position: new Vector3(Math.floor(Math.random() * 41) - 20, Math.floor(Math.random() * 41) - 20, -1040),
                    velocity: Math.random() * 2,
                };
            });
            setstars(generatedStars)
        }
    }, [init, game])

    return (
        <group ref={starsRef}>
            {/* Renderizar cada estrella */}
            {stars.map((star, index) => (
                <Star key={index} position={star.position} />
            ))}
        </group>
    );
};

export default Combat;