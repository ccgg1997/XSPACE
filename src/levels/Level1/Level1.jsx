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
import { AvatarProvider } from "../../context/AvatarContext";
import React, { useState } from 'react';

export default function Level1() {
    const [countLives, setCountLives] = useState(3);
    const map = useMovements();
    const lives = "♥".repeat(countLives)
    const diccionario_objetos = {
        "objeto1": {
            "rango_x": [0, -20],
            "mensaje": "Esquiva las Rocas"
        },
        "objeto2": {
            "rango_x": [-21, -40],
            "mensaje": "Salta el obstaculo"
        },
        "objeto3": {
            "rango_x": [-41, -60],
            "mensaje": "Pasa todas las puertas"
        },
        "objeto4": {
            "rango_x": [-61, -80],
            "mensaje": "Encuentra la pieza perdida"
        },
        "objeto5": {
            "rango_x": [-81, -100],
            "mensaje": "Salta los obstaculo"
        }
    };

    const posicion_x = -15; // Por ejemplo
    let mensaje = "";
    for (const objeto in diccionario_objetos) {
        if (posicion_x >= diccionario_objetos[objeto]["rango_x"][1] && posicion_x <= diccionario_objetos[objeto]["rango_x"][0]) {
            mensaje = diccionario_objetos[objeto]["mensaje"];
            break;
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
                        <Perf position="top-left" />
                        <Suspense fallback={null}>
                            <Lights ></Lights>
                            {/* <Environments /> */}
                            <Physics debug={false}>
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
                                >
                                    <Avatar />
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
