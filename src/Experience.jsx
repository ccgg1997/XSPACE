import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Level1 from './levels/Level1';
import GameMenu from './components/interface/GameMenu';



const GameCanvas = () => {
    const [activeLevel, setActiveLevel] = useState(<Level1 />)
    const [showMenu, setShowMenu] = useState(true)
    const options = [
        {
            text: 'Level 1',
            action: () => startLevel('1')
        },
        {
            text: 'Level 2',
            action: () => startLevel('2')
        },
        {
            text: 'Level 3',
            action: () => startLevel('3')
        }
    ];

    const startLevel = (level) => {
        switch (level) {
            case '1':
                setShowMenu(false);
                setActiveLevel(<Level1 />)
                break;
            case '2':
                setShowMenu(false);
                setActiveLevel(<mesh></mesh>)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'Escape':
                    setShowMenu(true);
                    break;
                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <Canvas
            camera={{ position: [0, 10, 20] }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {showMenu && <GameMenu options={options} />}
            {activeLevel}
        </Canvas>
    );
};

export default GameCanvas;
