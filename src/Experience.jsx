import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import GameMenu from './components/interface/GameMenu';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';



const GameCanvas = () => {
    const [activeLevel, setActiveLevel] = useState(<Level1 />)
    const [showMenu, setShowMenu] = useState(true)
    const [cameraPosition, setCameraPosition] = useState([50, 50, 50])
    const resetCameraPosition = () => setCameraPosition([0, 10, 20]);

    const cameraRef = useRef();

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
                setActiveLevel(<Level2 setCameraPosition={setCameraPosition} />)
                break;
            default:
                resetCameraPosition();
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
            // camera={{ position: cameraPosition }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 10, 20]} /> */}
            <ambientLight />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {showMenu && <GameMenu options={options} />}
            {activeLevel}
        </Canvas>
    );
};

export default GameCanvas;
