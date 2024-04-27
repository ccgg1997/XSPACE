import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

const GameMenu = ({ options }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const menuStyle = {
        width: '16rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -170%)',
        textAlign: 'center',
        // background: 'rgba(255, 255, 255, 0.5)',
        padding: '20px',
        borderRadius: '10px',
    };
    const itemStyle = {
        marginBottom: '10px',
        fontSize: '50px',
        color: 'gray'
    };
    const selectedItemStyle = {
        ...itemStyle,
        color: "#0099CE", // change color when selected
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
        <Html className='gameMenu' style={menuStyle}>
            {options.map((option, index) => (
                <div key={index} style={index === selectedIndex ? selectedItemStyle : itemStyle}>
                    {option.text}
                </div>
            ))}
        </Html>
    );
};

export default GameMenu;