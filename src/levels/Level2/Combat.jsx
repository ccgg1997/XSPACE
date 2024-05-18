import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from "@react-three/fiber";
import { useNave } from '../../context/NaveContext';
import { useGame } from '../../context/GameContext';
import { Vector3 } from 'three';
import { RigidBody } from "@react-three/rapier"
import { Sphere } from '@react-three/drei';

const generateInitialStarPosition = () => {
    return {
        x: Math.floor(Math.random() * 30) - 20,
        y: Math.floor(Math.random() * 18) - 2,
        z: -1040
    }
}
const generateInitialRewardPosition = () => {
    return {
        x: Math.floor(Math.random() * 16) - 7,
        y: Math.floor(Math.random() * 10),
        z: -1045
    }
}

const Star = ({ position, velocity }) => {
    const refBody = useRef();
    const { nave } = useNave();
    const { game, setGame } = useGame();


    const collisionManager = (event) => {
        if (event.other.rigidBodyObject.name == "naveEspacial") {
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            setGame({ ...game, paused: true, isCollided: true })
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
        if (currentTranslation?.z > -900) {
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
        >
            <Sphere args={[1, 8, 8]}>
                <meshStandardMaterial color="#ADADAD" />
            </Sphere>
        </RigidBody>
    );
};

const Reward = ({ velocity, onRewardObtained }) => {
    const refBody = useRef();
    const { nave } = useNave();
    const { game, setGame } = useGame();

    const collisionManager = (event) => {
        console.log('colision premio', event)
        if (event.other.rigidBodyObject.name == "naveEspacial") {
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            console.log('recogiste premio!')
            onRewardObtained();
        }
    }

    useFrame(() => {
        if (game.paused) {
            refBody.current?.setLinvel({ x: 0, y: 0, z: 0 }, true);
        } else {
            refBody.current?.setLinvel({ x: 0, y: 0, z: velocity }, true);
        }
    });

    useEffect(() => {
        refBody.current.setTranslation(generateInitialRewardPosition(), true)
    }, []);


    return (
        <RigidBody ref={refBody}
            colliders="ball"
            gravityScale={0}
            linearVelocity={[0, 0, velocity]}
            restitution={0}
            name="reward"
            onCollisionEnter={collisionManager}
        >
            <Sphere args={[1, 8, 8]}>
                <meshStandardMaterial color="#4D96FF" />
            </Sphere>
        </RigidBody>
    );
};

const Combat = ({ canvasRef, setMensaje }) => {
    const { nave } = useNave();
    const { game } = useGame();
    const [init, setInit] = useState(false)
    const [stars, setstars] = useState([])
    const [reward, setReward] = useState(false)

    const starsRef = useRef(null);

    const numStars = 24;


    useFrame((state, delta) => {
        if (game.paused) return;
        const currentTranslation = nave.body?.translation()
        if (currentTranslation?.z < -907 && starsRef) {
            setInit(true)
        } else {
            setInit(false)
        }

    })

    useEffect(() => {
        if (init) {
            setMensaje("!Esquiva los meteoritos!")
            canvasRef.current.style.background = 'black';
            if (game.wallsRef) {
                game.wallsRef.current.visible = false;
            }
        }
    }, [init])

    useEffect(() => {
        //meteoritos
        const generatedStars = Array.from({ length: numStars }, () => {
            const position = generateInitialStarPosition();
            return {
                id: Date.now(),
                position: new Vector3(position.x, position.y, position.z),
                velocity:
                    Math.floor(Math.random() * (35 - 24 + 1)) + 24
            };
        });
        setstars(generatedStars)

        //premios
        const showReward = () => {
            console.log('mostrando premio')
            setReward(true);
            setTimeout(() => {
                console.log('ocultando premio')
                setReward(false);
            }, 9000); // Ocultar después de 4 segundos
        };

        // Mostrar el componente inmediatamente y luego cada 10 segundos
        showReward();
        const interval = setInterval(showReward, 10000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [])

    const onRewardObtained = () => {
        console.log('onRewardObtained')
        setReward(false);
    }

    return (
        <>
            {init && <group ref={starsRef}>

                {stars.map((star, index) => (
                    <Star key={star.id + index} position={star.position} velocity={star.velocity} />
                ))}
            </group>}
            {reward && init && <Reward velocity={20} onRewardObtained={onRewardObtained} />}
        </>
    );
};

export default Combat;