import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import GameMenu from './components/interface/GameMenu';
import Level1 from './levels/Level1';
// import Level2 from './levels/Level2';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Lights from './lights/Lights';
import Galaxy from './backgrounds/Galaxy';
import World from "./components/Level1Environment";
import { Perf } from 'r3f-perf';
import { useNavigate } from "react-router-dom";



const GameCanvas = () => {
    const resetCameraPosition = () => setCameraPosition([0, 10, 20]);
    const navigate = useNavigate();

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
                navigate('/level1', {
                    state: {
                        firstTime: true
                    }
                })
                break;
            case '2':
                navigate('/level2', {
                    state: {
                        firstTime: true
                    }
                })
                break;
            default:
                // resetCameraPosition();
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
            <GameMenu options={options} />
            {/* <Perf position="top-left" /> */}
            <PerspectiveCamera makeDefault position={[0, 10, 20]} />
            {/* <Lights />
                <EnviromentMap /> */}
            <OrbitControls makeDefault target={[0, 10, 0]} />

            <Suspense fallback={null}>
                <Lights />
                <World />
                <Galaxy />
            </Suspense>
        </Canvas>
    );
};

export default GameCanvas;
