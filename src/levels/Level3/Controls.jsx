import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useNave } from "../../context/NaveContext";
import { useGame } from "../../context/GameContext";
import { useEffect } from "react";

export default function Controls({ orbitControlsRef, restart, onRestartDone, canvasRef }) {
    const { nave, setNave } = useNave();
    const { game, setGame } = useGame();
    const [sub, get] = useKeyboardControls()
    // const orbitControlsRef = useRef()
    const velocity = 8;
    const initialSpeed = 30;
    const { camera } = useThree();
    const startGame = () => {
        nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
        nave.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
        nave.body.setTranslation({ x: 0, y: 0, z: 0 }, true)
        orbitControlsRef.current.target.set(0, 1, -28)
        camera.position.set(0, 5, -14)
        canvasRef.current.style.background = '#231F1F';
    }
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
                    if (!pressed) {
                        setNave({ ...nave, animation: "Idle" });
                    } else if (pressed.up) {
                        setNave({ ...nave, animation: "naveUpRotation" });
                    } else if (pressed.down) {
                        setNave({ ...nave, animation: "naveDownRotation" });
                    } else if (pressed.left) {
                        setNave({ ...nave, animation: "naveLeftRotation" });
                    } else if (pressed.right) {
                        setNave({ ...nave, animation: "naveRightRotation" });
                    }
                }
            }
        );
        return () => unsubscribe();
    }, [game, nave, setNave, sub, get]);

    useEffect(() => {
        if (restart === true) {
            startGame();
            onRestartDone();
            setGame({ ...game, paused: false, isCollided: false })
        }
    }, [restart])


    useFrame((state, delta) => {
        if (game.paused) return;
        const { up, down, left, right } = get()
        const currentTranslation = nave.body?.translation()
        let moveX = 0;
        let moveY = 0;
        let speed = initialSpeed;
        if (currentTranslation.z < -907) {
        }
        let moveZ = speed * delta
        if (up || down || left || right) {


            if (up) {
                if (currentTranslation.y < 5.5) {
                    moveY += velocity * delta;

                }
            }
            if (down) {
                if (currentTranslation.y > -0.30) {
                    moveY -= velocity * delta;
                }
            }
            if (left) {
                if (currentTranslation.x > -8.9) {
                    moveX -= velocity * delta;
                }
            }
            if (right) {
                if (currentTranslation.x < 8.9) {
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

        state.camera.position.add(new Vector3(moveX, moveY, -1 * (speed * delta)))
        orbitControlsRef.current.target.add(new Vector3(0, 0, -(speed)));
        get().back
    })

    return (
        null
    )
}