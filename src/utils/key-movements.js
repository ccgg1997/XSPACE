"use strict"

import { useMemo } from "react"

export default function useMovements() {
    const MOVEMENTS = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
        jump: "jump",
        exit: "exit"
    }

    const map = useMemo(() => {
        return [
            { name: MOVEMENTS.up, keys: ["KeyW", "ArrowUp"] },
            { name: MOVEMENTS.down, keys: ["KeyS", "ArrowDown"] },
            { name: MOVEMENTS.left, keys: ["KeyA", "ArrowLeft"] },
            { name: MOVEMENTS.right, keys: ["KeyD", "ArrowRight"] },
            { name: MOVEMENTS.jump, keys: ["Space"] },
            { name: MOVEMENTS.exit, keys: ["Escape"] }
        ]
    }, [])

    return map;
}