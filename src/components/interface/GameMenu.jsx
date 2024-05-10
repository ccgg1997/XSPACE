import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import './GameMenu.css';

const GameMenu = ({ options }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const menuStyle = {
        transform: 'translate(-50%, -170%)',
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
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
        };

        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedIndex, options]);
    return (
        <Html className='gamemenu' style={menuStyle}>
            {options.map((option, index) => (
                <div key={index} className={index != selectedIndex ? 'menuitem' : 'menuitem selected-item'} onClick={option.action}>
                    {option.text}
                </div>
            ))}
        </Html>
    );
};

export default GameMenu;