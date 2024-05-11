import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useNave } from "../../context/NaveContext";
import { useGame } from "../../context/GameContext";

export default function Controls({ orbitControlsRef }) {
    const { nave, setNave } = useNave();
    const { game } = useGame();
    const [sub, get] = useKeyboardControls()
    // const orbitControlsRef = useRef()
    let walkDirection = new Vector3()
    const velocity = 6;
    const speed = 20;

    useFrame((state, delta) => {
        if (game.paused) return;
        const { up, down, left, right } = get()
        const currentTranslation = nave.body?.translation()
        let moveX = 0;
        let moveY = 0;
        let moveZ = speed * delta
        if (up || down || left || right) {

            state.camera.getWorldDirection(walkDirection)
            walkDirection.normalize()
            if (up) {
                moveY += velocity * delta;
            }
            if (down) {
                moveY -= velocity * delta;
            }
            if (left) {
                moveX -= velocity * delta;
            }
            if (right) {
                moveX += velocity * delta;
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
        orbitControlsRef.current.target.add(new Vector3(0, 0, -10));
        const pressed = get().back
    })

    return (
        null
    )
}