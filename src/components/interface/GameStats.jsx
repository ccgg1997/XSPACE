import React from 'react';
import { useGame } from '../../context/GameContext';

const GameStats = () => {
    const { stats, message } = useGame();
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
                <div style={{ color: 'red', fontSize: '39px', zIndex: "1", margin: "auto 1rem" }}>{stats.partIcon?.repeat(stats.parts)}</div>
                <div style={{ color: 'red', fontSize: '49px', zIndex: "1", margin: "auto 1rem" }}>{"♥".repeat(stats.lives)}</div>
            </div>
            <span style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', fontSize: '30px', color: 'white', marginTop: '1rem', zIndex: 2 }}>{message}</span>
        </>
    );
};

export default GameStats;