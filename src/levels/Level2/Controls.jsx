import { OrbitControls, useKeyboardControls } from "@react-three/drei";
// import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { useNave } from "../../context/NaveContext";

export default function Controls({ orbitControlsRef, ready = false }) {
    const { nave, setNave } = useNave();
    const [sub, get] = useKeyboardControls()
    // const orbitControlsRef = useRef()
    let walkDirection = new Vector3()
    let rotateAngle = new Vector3(0, 1, 0);
    let rotateQuaternion = new Quaternion();
    const velocity = 6;
    const speed = 18;
    //let cameraTarget = new Vector3(0, 0, 0);
    const desiredDistance = 2;

    const { camera } = useThree();
    camera.near = 20;


    useFrame((state, delta) => {
        if (!ready)
            return;
        const { up, down, left, right } = get()
        const currentTranslation = nave.body?.translation()
        let moveX = 0;//currentTranslation?.x;//walkDirection.x * velocity * delta
        let moveY = 0;//currentTranslation?.y;//walkDirection.y * velocity * delta
        let moveZ = speed * delta
        if (up || down || left || right) {
            // console.log(currentTranslation)

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
                // console.log('moveX', moveX, 'currentTranslation.x', currentTranslation.x, 'velocity', velocity, 'delta', delta)
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
        // <OrbitControls makeDefault
        //     ref={orbitControlsRef}
        //     // target={[0, 6, 0]}
        //     enablePan={true}
        // />
        null
    )
}