import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { PerspectiveCamera } from '@react-three/drei';
import GameMenu from './components/interface/GameMenu';
// import Level2 from './levels/Level2';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Lights from './lights/Lights';
import Galaxy from './backgrounds/Galaxy';
import World from "./components/Level1Environment";
import { useNavigate } from "react-router-dom";
import Logout from './components/logout/Logout';
import { createUser, readUser } from "./db/user-collection";
import { useAuth } from './context/AuthContext';
import GameStats from './components/interface/GameStats';



const GameCanvas = () => {
    const resetCameraPosition = () => setCameraPosition([0, 10, 20]);
    const navigate = useNavigate();
    const auth = useAuth();

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
        },
        {
            text: 'Level 4',
            action: () => startLevel('4')
        },
        {
            text: 'Level 5',
            action: () => startLevel('5')
        },
        {
            text: 'Level 6',
            action: () => startLevel('6')
        },
        {
            text: 'Level 7',
            action: () => { }
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
            case '3':
                navigate('/level3', {
                    state: {
                        firstTime: true
                    }
                })
                break;

            case '4':
                navigate('/level4', {
                    state: {
                        firstTime: true
                    }
                })
                break;
            case '5':
                navigate('/level5', {
                    state: {
                        firstTime: true
                    }
                })
                break;

            case '6':
                navigate('/level6', {
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
        <>
            <GameStats />
            <Logout />
            <Canvas
                // camera={{ position: cameraPosition }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                {/* <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 10, 20]} /> */}
                <ambientLight />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <GameMenu options={options} />
                {/* <Perf position="top-left" /> */}
                <PerspectiveCamera makeDefault position={[0, 13, 25]} />
                {/* <Lights />
                <EnviromentMap /> */}
                <OrbitControls makeDefault target={[0, 13, 0]} />

                <Suspense fallback={null}>
                    <Lights />
                    <World />
                    <Galaxy />
                </Suspense>
            </Canvas>
        </>
    );
};

export default GameCanvas;
