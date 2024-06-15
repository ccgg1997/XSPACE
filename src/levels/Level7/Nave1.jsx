import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
// import { useBox } from '@react-three/cannon';
import { useNave } from "../../context/NaveContext";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { useGame } from "../../context/GameContext";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useProjectiles } from "../../context/ProjectilesContext";
import { shootProjectile } from "../../utils/shootProjectile.js";
import { socket } from "./socket-manager";


const url = "https://josem-18.github.io/sourcesPI/models/NaveDefault.glb"
export default function Nave1({ orbitControlsRef }) {

    const naveBodyRef = useRef();
    const [animation, setAnimation] = useState('Idle')
    const naveRef = useRef();
    const { nave, setNave } = useNave();

    const { nodes, materials, animations } = useGLTF(url);
    const { ref, actions, mixer } = useAnimations(animations, naveRef)
    const { addProjectile } = useProjectiles();
    const [play, setPlay] = useState(false)

    const { game, setGame, stats, setPartIcon } = useGame();
    const [naveSound] = useState(new Audio("/assets/sounds/motor.mp3"));
    const [shootSound] = useState(new Audio("/assets/sounds/shootGunLaser.mp3"))
    const [playNaveSound, setPlayNaveSound] = useState(false)
    const [sub, get] = useKeyboardControls()
    const velocity = 8;
    const initialSpeed = 30;
    const { paintProjectiles } = useProjectiles();

    useEffect(() => {
        if (play) {
            shootSound.currentTime = 0;
            shootSound.volume = 0.5
            if (shootSound.paused) {
                shootSound.play().catch((error) => {
                    console.log('Error playing audio:', error);
                });
            }
        } else {
            if (!shootSound.paused) {
                shootSound.pause()
            }
        }
    }, [play])

    useEffect(() => {
        setNave({
            ...nave,
            ref: naveRef.current,
            body: naveBodyRef.current
        })
    }, [naveBodyRef, naveBodyRef.current, naveRef.current])

    useEffect(() => {
        if (animation) {
            actions[animation].setLoop(THREE.LoopOnce);
            actions[animation].clampWhenFinished = true;
            actions[animation]?.reset().play();//.fadeIn(0.5)
        } else {
            mixer.stopAllAction();
        }

        return () => {
            if (actions[animation])
                actions[animation].fadeOut(0.25);
        }

    }, [animation]);

    useEffect(() => {
        const unsubscribe = sub(
            (state) => {
                if (state.up || state.down || state.left || state.right) {
                    return state
                }
                return null;
            },
            (pressed) => {
                if (!game.paused) {
                    // console.log('pressed', pressed)
                    !pressed ? setPlayNaveSound(false) : setPlayNaveSound(true);
                    if (!pressed) {
                        setAnimation("Idle");
                    } else if (pressed.up) {
                        setAnimation("naveUpRotation");
                    } else if (pressed.down) {
                        setAnimation("naveDownRotation");
                    } else if (pressed.left) {
                        setAnimation("naveLeftRotation");
                    } else if (pressed.right) {
                        setAnimation("naveRightRotation");
                    }
                } else {
                    setPlayNaveSound(false)
                }
            }
        );
        return () => unsubscribe();
    }, [game, nave, setNave, sub, get]);


    useFrame((state, delta) => {
        if (game.paused) return;
        const { up, down, left, right } = get()
        const currentTranslation = nave.body?.translation()
        let moveX = 0;
        let moveY = 0;
        let speed = initialSpeed;
        let moveZ = 0; //speed * delta
        if (up || down || left || right) {


            if (up) {
                if (currentTranslation.y < 7) {
                    moveY += velocity * delta;

                }
            }
            if (down) {
                if (currentTranslation.y > -0.30) {
                    moveY -= velocity * delta;
                }
            }
            if (left) {
                if (currentTranslation.x > -14) {
                    moveX -= velocity * delta;
                }
            }
            if (right) {
                if (currentTranslation.x < 14) {
                    moveX += velocity * delta;
                }
            }

        }

        const newPosition = new Vector3(
            currentTranslation.x + moveX,
            currentTranslation.y + moveY,
            currentTranslation.z - moveZ
        )
        nave.body?.setTranslation({
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z
        }, true)

        state.camera.position.add(new Vector3(moveX, moveY, 0));
        orbitControlsRef.current.target.add(new Vector3(moveX, moveY, 0));
        // orbitControlsRef.current.target.set(new Vector3(newPosition.x, newPosition.y, -28));

        window.setTimeout(() => {
            socket.emit("player-moving", {
                translation: naveBodyRef.current?.translation()
            });
        }, 100);
        get().back
    })

    useEffect(() => {
        if (playNaveSound) {
            naveSound.currentTime = 0;
            naveSound.volume = 0.5
            if (naveSound.paused) {
                naveSound.play().catch((error) => {
                    console.log('Error playing audio:', error);
                });
            }
        } else {
            if (!naveSound.paused) {
                naveSound.pause()
            }
        }
    }, [playNaveSound])

    useEffect(() => {
        const handleKeyDown = (event) => {
            // console.log('aqui')
            if (event.key === ' ') {
                if (nave.body && !game.paused) {
                    setPlay(true)
                    shootProjectile(nave, addProjectile);
                    const positionNave = nave.body.translation(); // Posición de la nave
                    const position = [positionNave.x, positionNave.y + 3, positionNave.z - 30];
                    console.log('emitiendo disparo')
                    socket.emit("player-shot", {
                        player: 1,
                        position: position
                        // translation: rbPlayer1Ref.current?.translation(),
                        // rotation: rbPlayer1Ref.current?.rotation(),
                    });
                    console.log('fin disparo')
                }
            } else {
                setPlay(false)
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nave, setNave, game, setGame]);

    useEffect(() => {
        console.log('creando socketTTTT')
        socket.emit("connected", {
            player: 1,
            // translation: rbPlayer1Ref.current?.translation(),
            // rotation: rbPlayer1Ref.current?.rotation(),
        });
        console.log('creando socket2')


    }, [])


    return (<>
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
                >
                    <CuboidCollider
                        args={[0.25, 2, 2]}
                        position={[0, 2.5, -1]}
                    />
                    <CuboidCollider
                        args={[3, 0.4, 2]}
                        position={[0, 3.5, -1]}
                    />
                </primitive>
            </group>

        </RigidBody >
        {paintProjectiles(-20)}
    </>
    )

}
// useGLTF.preload('/assets/models/NaveDefault.glb')
