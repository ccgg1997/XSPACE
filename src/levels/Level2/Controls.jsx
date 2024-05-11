import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useNave } from "../../context/NaveContext";
import { useGame } from "../../context/GameContext";
import { useEffect } from "react";

export default function Controls({ orbitControlsRef, restart, onRestartDone }) {
    const { nave, setNave } = useNave();
    const { game, setGame } = useGame();
    const [sub, get] = useKeyboardControls()
    // const orbitControlsRef = useRef()
    let walkDirection = new Vector3()
    const velocity = 6;
    const speed = 20;
    const { camera } = useThree();
    const startGame = () => {
        nave.body?.setTranslation({ x: 0, y: 0, z: 0 }, true)
        orbitControlsRef.current.target.set(0, 3, 0)
        camera.position.set(0, 5, 12)
    }
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

        state.camera.position.add(new Vector3(moveX, moveY / 2, -1 * (speed * delta)))
        orbitControlsRef.current.target.add(new Vector3(0, 0, -(speed)));
        get().back
    })

    return (
        null
    )
}