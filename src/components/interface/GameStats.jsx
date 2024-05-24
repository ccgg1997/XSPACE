import React, { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { useAuth } from '../../context/AuthContext';
import { readUser } from '../../db/user-collection';

const GameStats = () => {
    const { stats, message, setStats } = useGame();
    const { userLogged } = useAuth();
    useEffect(() => {
        if (userLogged) {
            readUser(userLogged.email).then((userData) => {
                setStats({
                    ...stats,
                    lives: userData.lives,
                    level: userData.level,
                    checkPoint: userData.checkPoint,
                    parts: userData.parts
                })

            });
        }


    }, [userLogged])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
                <div style={{ color: 'red', fontSize: '39px', zIndex: "1", margin: "auto 1rem" }}>{stats.partIcon?.repeat(stats.parts)}</div>
                <div style={{ color: 'red', fontSize: '49px', zIndex: "1", margin: "auto 1rem" }}>{"♥".repeat(stats.lives > 0 ? stats.lives : 0)}</div>
            </div>
            <span style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: '30px', color: 'white', marginTop: '1rem', zIndex: 2 }}>{message}</span>
        </>
    );
};

export default GameStats;