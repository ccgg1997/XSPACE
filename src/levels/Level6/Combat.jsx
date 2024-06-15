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

const Star = ({ position, velocity, collisionCallback }) => {
    const refBody = useRef();
    const { nave } = useNave();
    const { game, setGame, setMessage } = useGame();


    const collisionManager = (event) => {
        if (event.other.rigidBodyObject.name == "naveEspacial") {
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
            setGame({ ...game, paused: true, isCollided: true })
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
            enabledRotations={[false, false, false]}
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
            // onCollisionEnter={collisionManager}
            sensors={true}
            sensor={true}
            // onIntersectionExit={() => { console.log('collision exit') }}
            onIntersectionEnter={collisionManager}
        >
            <Sphere args={[1, 8, 8]}>
                <meshStandardMaterial color="#4D96FF" />
            </Sphere>
        </RigidBody>
    );
};

const Combat = ({ canvasRef, collisionCallback, orbitControlsRef, onWinLevel, setCheckPointEvent }) => {
    const { nave } = useNave();
    const { game, stats, setMessage, addPart, setPartIcon, setCheckPoint } = useGame();
    const [init, setInit] = useState(false)
    const [stars, setstars] = useState([])
    const [reward, setReward] = useState(false)
    const { userLogged } = useAuth();
    const { camera } = useThree();
    const starsRef = useRef(null);

    const numStars = 0;

    // const generateNewStars = () => {
    //     const newStars = Array.from({ length: numStars }, () => {
    //         const position = generateInitialStarPosition();
    //         return {
    //             id: Date.now(),
    //             position: new Vector3(position.x, position.y, position.z),
    //             velocity:
    //                 Math.floor(Math.random() * (35 - 24 + 1)) + 24
    //         };
    //     });
    //     setstars(newStars);
    // }

    useEffect(() => {
        //setPartIcon("🔹")
        setCheckPoint([0, 0, -907.2]);
        setCheckPointEvent(true);
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
            setMessage("¡Dispara al ovni con la tecla espacio!")
            canvasRef.current.style.background = 'black';
            return () => { clearInterval(initialTimeout); setMessage("") };
        }
    }, [init])

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
                    <Star key={star.id + index} position={star.position} velocity={star.velocity} collisionCallback={() => { generateNewStars(); collisionCallback() }} />
                ))}
            </group>}
            {reward && init && <Reward velocity={20} onRewardObtained={onRewardObtained} />}
        </>
    );
};

export default Combat;