import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import Villano from "./characters/villano/Villano";
import Villano2 from "./characters/villano2/Villano2";
import useMovements from "../../utils/key-movements-l1";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import React, { useState} from 'react';
import { AvatarProvider } from "../../context/AvatarContext";
import { useAvatar } from "../../context/AvatarContext";

export default function Level1() {
    const [countLives, setCountLives] = useState(3);
   
    const map = useMovements();
    const avatar = useAvatar();
    // Verificar si el avatar y su posición están listos antes de acceder a ellos
    const[avatarpositionz,setavatarpositionz] = useState(0);
    
    const setpositionfunction = (position) => {
        setavatarpositionz(position);
    }

    const lives = "♥".repeat(countLives);

    const diccionario_objetos = {
        "objeto1": {
            "rango_x": [0,  0.026],
            "mensaje": "Esquiva las Rocas"
        },
        "objeto2": {
            "rango_x": [ 0.027, 0.038],
            "mensaje": "Salta el obstaculo"
        },
        "objeto3": {
            "rango_x": [0.0515, 0.087],
            "mensaje": "Pasa todas las puertas"
        },
        "objeto4": {
            "rango_x": [0.088, 0.125],
            "mensaje": "Encuentra la pieza perdida"
        },
        "objeto5": {
            "rango_x": [0.126, 0.180],
            "mensaje": "Salta los obstaculo"
        },
        "objeto6": {
            "rango_x": [0.181, 0.4],
            "mensaje": "Ataca tu enemigo"
        },


    };

    let mensaje = "";
    // Verificar si la posición del avatar está definida antes de usarla
    if (avatarpositionz !== null) {
        for (const objeto in diccionario_objetos) {
            if (avatarpositionz >= diccionario_objetos[objeto]["rango_x"][0] && avatarpositionz <= diccionario_objetos[objeto]["rango_x"][1]) {
                mensaje = diccionario_objetos[objeto]["mensaje"];
                break;
            }
        }
    }
    return (
        <>
            <AvatarProvider>
                <KeyboardControls map={map} >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>{mensaje}</div>
                        <div style={{color: 'red',fontSize: '34px' }}>{lives}</div>
                    </div>
                    <Canvas
                        shadows={false}
                    >
                        {/* <Perf position="top-left" /> */}
                        <Suspense fallback={null}>
                            <Lights ></Lights>
                            {/* <Environments /> */}
                            <Physics debug={true}>
                                <World />
                                {/* <Girl /> */}
                                <Villano />
                                <Villano2 />
                                <RedMen />
                                <Ecctrl
                                    camInitDis={-2}
                                    camMaxDis={-2}
                                    maxVelLimit={5}
                                    jumpVel={4}
                                    position={[0, 10, -1]}
                                    characterInitDir={180}
                                    camInitDir={{ x: 0, y: 10 }}
                                    onCollisionEnter={({ manifold, target, other  }) => {
                                        console.log(
                                          "Collision at world position ",
                                          manifold.solverContactPoint(0)
                                        );
                                      }}
                                >
                                    <Avatar setpositionfunction={setpositionfunction} />
                                </Ecctrl>
                            </Physics>

                            {/* <WelcomeText position={[0, 1, -2]} /> */}
                        </Suspense>
                        <Controls />
                    </Canvas>
                </KeyboardControls>
            </AvatarProvider>
        </>

    )
}
