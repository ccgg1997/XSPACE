import React, { useState, useEffect } from 'react';
import './PauseMenu.css';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../context/GameContext';
import BackgroundSound from '../interface/BackgroundSound';

const PauseMenu = ({ onRestart }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [playSound, setPlaySound] = useState(false);
    const { game, togglePause } = useGame();
    const navigate = useNavigate();
    const menuStyle = {
        transform: 'translate(-50%, -100%)',
        zIndex: 999,
    };
    const options = [
        {
            text: 'Jugar',
            action: () => {
                setPlaySound(true);
                if (game.isCollided == true) {
                    onRestart();
                } else {
                    togglePause()
                }
            }
        },
        {
            text: 'Reiniciar',
            action: onRestart//startLevel('2')
        },
        {
            text: 'Menu',
            action: () => navigate("/menu")
        }

    ];

    const handleKeyDown = (event) => {
        if (event.key == 'Escape') {
            togglePause();
        } else if (game.paused) {
            switch (event.key) {
                case 'ArrowUp':
                    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : options.length - 1));
                    break;
                case 'ArrowDown':
                    setSelectedIndex((prevIndex) => (prevIndex < options.length - 1 ? prevIndex + 1 : 0));
                    break;
                case 'Enter':
                    options[selectedIndex].action();
                default:
                    break;
            }
        }
    };
    useEffect(() => {

        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [game, selectedIndex]);

    useEffect(() => {
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <BackgroundSound play={!game.paused && playSound} />
            {game.paused && <div className='gamemenu' style={menuStyle} tabIndex={99}>
                {options.map((option, index) => (
                    <div key={index} className={index != selectedIndex ? 'menuitem' : 'menuitem selected-item'} onClick={option.action}>
                        {option.text}
                    </div>
                ))}
            </div>}
        </>
    );
};

export default PauseMenu;