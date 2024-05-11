import { useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls() {
  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls()
  const [runSound] = useState(new Audio("/assets/sounds/run.wav"))
  const [play, setPlay] = useState(false)
  const speed = 0.01;

  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.forward || state.backward || state.leftward || state.rightward,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Running" : "Idle" });
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.attack,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Fight" : "Idle" });
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  useEffect(() => {
    if (play) {
      runSound.currentTime = 0;
      runSound.volume = Math.random()
      if (runSound.paused) {
        runSound.play()
      }
    } else {
      if (!runSound.paused) {
        runSound.pause()
      }
    }
  }, [play])

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = get()
    if (forward || backward || leftward || rightward) {
      setPlay(true)
      // if (forward) avatar.ref.current.position.z -= speed * delta; // Mover hacia adelante
      // if (backward) avatar.ref.current.position.z += speed * delta; // Mover hacia atrás
      const newPosition = avatar.ref.current.position.clone(); // Clonar la posición actual
      if (forward) newPosition.z += speed * delta; // Mover hacia adelante
      if (backward) newPosition.z -= speed * delta; // Mover hacia atrás
      if (leftward) newPosition.x += speed * delta; // Mover hacia la izquierda
      if (rightward) newPosition.x -= speed * delta; // Mover hacia la derecha
      avatar.ref.current.position.copy(newPosition); 

    } else {
      setPlay(false)
    }
    const pressed = get().back
  })
}