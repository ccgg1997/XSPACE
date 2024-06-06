import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editUser, patchUser, readUser } from "../db/user-collection";
import { useAuth } from "./AuthContext";

export const GameContext = createContext();

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        console.error("Error creating Game context");
        return;
    }
    return context;
}

export function GameProvider({ children }) {
    const { userLogged } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [game, setGame] = useState(
        {
            paused: true,
            isCollided: false
        }
    )

    const [stats, setStats] = useState({
        level: 1,
        lives: 3,
        parts: 0,
        partIcon: "",
        message: "",
        checkPoint: []
    })

    const togglePause = () => {
        setGame({ ...game, paused: !game.paused, isCollided: false })
    }

    const addLive = () => {
        patchUser(userLogged.email, { lives: stats.lives + 1 })
        setStats({ ...stats, lives: stats.lives + 1 })
    }

    const removeLive = () => {
        patchUser(userLogged.email, { lives: stats.lives - 1 })
        setStats({ ...stats, lives: stats.lives - 1 })
    }

    const addPart = () => {
        setStats({ ...stats, parts: stats.parts + 1 })
    }

    const addLevel = () => {
        patchUser(userLogged.email, { level: stats.level + 1, checkPoint: [] })
        setStats({ ...stats, level: stats.level + 1 })
    }

    const setPartIcon = (partIcon) => {
        setStats({ ...stats, partIcon: partIcon })
    }

    const setCheckPoint = (checkPoint) => {
        patchUser(userLogged.email, { checkPoint: checkPoint })
        setStats({ ...stats, checkPoint: checkPoint })
    }

    useEffect(() => {
        if (stats.lives < 0) {
            setMessage('Game Over')
            readUser(userLogged.email).then((userData) => {
                editUser(userLogged.email, { ...userData, level: 1, lives: 3, checkPoint: [] })
            });

            setTimeout(() => {
                navigate("/menu");
                setMessage('')
            }, 3000);
        }
    }, [stats.lives])



    return (
        <GameContext.Provider value={{ game, stats, message, setGame, togglePause, addLive, removeLive, addPart, setPartIcon, setMessage, setStats, setCheckPoint, addLevel }}>
            {children}
        </GameContext.Provider>
    )
}