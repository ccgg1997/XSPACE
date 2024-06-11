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
    const { game, setGame, setMessage } = useGame();


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
    const { game, setMessage } = useGame();

    const collisionManager = (event) => {
        if (event.other.rigidBodyObject.name == "naveEspacial") {
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
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

const Combat = ({ canvasRef }) => {
    const { nave } = useNave();
    const { game, setMessage, addPart, setPartIcon } = useGame();
    const [init, setInit] = useState(false)
    const [stars, setstars] = useState([])
    const [reward, setReward] = useState(false)

    const starsRef = useRef(null);

    const numStars = 21;

    useEffect(() => {
        setPartIcon("🔹")
    }, [])

    useFrame((state, delta) => {
        if (game.paused) return;
        const currentTranslation = nave.body?.translation()
        if (currentTranslation?.z < -907 && starsRef) {
            setInit(true)
        } else {
            setInit(false)
            setMessage("")
        }

    })

    useEffect(() => {
        if (init) {
            setMessage("!Esquiva los meteoritos!")
            canvasRef.current.style.background = 'black';
            //premios
            const showReward = () => {
                setMessage("!Recupera las partes 🔹​!")
                setReward(true);
                setTimeout(() => {
                    setMessage("!Esquiva los meteoritos!")
                    setReward(false);
                }, 9500); // Ocultar después de 4 segundos
            };

            // Esperar 10 segundos antes de mostrar el componente por primera vez
            const initialTimeout = setTimeout(() => {
                showReward();
                // Luego, configurar el intervalo para mostrar el componente cada 10 segundos
                const interval = setInterval(showReward, 10000);
                // Limpiar el intervalo cuando el componente se desmonte
                return () => clearInterval(interval);
            }, 8000);

            // Limpiar el intervalo cuando el componente se desmonte
            return () => { clearInterval(initialTimeout), setMessage("") };
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


    }, [])

    const onRewardObtained = () => {
        setReward(false);
        setMessage("!Esquiva los meteoritos!")
        addPart();
        nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
        nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
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