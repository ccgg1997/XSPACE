import React, { useEffect, useState } from 'react';
import "./EnemyLivesStats.css"
import { socket } from "./socket-manager";
import { useGame } from '../../context/GameContext';

const EnemyLivesStats = () => {
    const [enemyLives, setEnemyLives] = useState(3);
    const { stats } = useGame();

    useEffect(() => {
        socket.on("current-lives", (data) => {
            console.log("recibiendo vidas", data)
            setEnemyLives(data.lives)
        });
        socket.emit("current-lives", {
            lives: stats.lives
        });

        return () => {
            socket.off("current-lives");
        }
    }, [])

    useEffect(() => {
        console.log("emitiendo vidas actuales", stats.lives)
        socket.emit("current-lives", {
            lives: stats.lives
        });
    }, [stats])



    return (
        <>
            <div className='enemy-lives'>
                <div style={{ color: 'blue', fontSize: '49px', zIndex: "1", margin: "auto 1rem" }}>{"♥".repeat(enemyLives && enemyLives > -1 ? enemyLives : 0)}</div>
            </div>
        </>
    );
};

export default EnemyLivesStats;