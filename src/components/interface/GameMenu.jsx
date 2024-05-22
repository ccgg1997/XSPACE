import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import './GameMenu.css';
import { useGame } from '../../context/GameContext';

const GameMenu = ({ options }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { stats } = useGame();
    const menuStyle = {
        transform: 'translate(-50%, -130%)',
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    setSelectedIndex((prevIndex) =>
                        (prevIndex > 0 ? prevIndex - 1 : stats.level - 1)
                    );
                    break;
                case 'ArrowDown':
                    setSelectedIndex((prevIndex) => (prevIndex < stats.level - 1 ? prevIndex + 1 : 0));
                    break;
                case 'Enter':
                    options[selectedIndex].action();
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, options, stats.level]);

    useEffect(() => {
    }, [stats])

    const handleClick = (index, callback) => {
        if (index <= stats.level - 1) {
            callback();
        }
    }

    return (
        <Html className='gamemenu' style={menuStyle}>
            {options.map((option, index) => (
                <div key={index}
                    className={
                        (index != selectedIndex ? 'menuitem' : 'menuitem selected-item') +
                        (index == stats?.level - 1 ? ' current' : '') +
                        (index > stats?.level - 1 ? ' blocked' : '')
                    }
                    onClick={() => handleClick(index, option.action)}>
                    {option.text}
                </div>
            ))}
        </Html>
    );
};

export default GameMenu;