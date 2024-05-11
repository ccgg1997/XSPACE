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
import React, { useState, useEffect } from 'react';
import { AvatarProvider } from "../../context/AvatarContext";
import { useAvatar } from "../../context/AvatarContext";
import { pass } from "three/examples/jsm/nodes/Nodes.js";
import { useNavigate } from "react-router-dom"

export default function Level1() {
    const [countLives, setCountLives] = useState(3);
    const [mostrarVidaExtra, setMostrarVidaExtra] = useState(true);
    const [cohete, setCohete] = useState("");
    const [final, setFinal] = useState(false);
    const [quitarPieza, setQuitarPieza] = useState(false);
    const [textoFinal, setTextoFinal] = useState("")

    const map = useMovements();
    const avatar = useAvatar();
    const navigate = useNavigate()

    const [avatarpositionz, setAvatarPositionz] = useState(0);
    const [ultimaVidaPerdida, setUltimaVidaPerdida] = useState(new Date().getTime());
    const [mensaje, setMensaje] = useState("esta bien");

    const setpositionfunction = (position) => {
        setAvatarPositionz(position);
    };

    const lives = "♥".repeat(countLives);
    const mensajes = [
        " ",
        "Calma...",
        "Hay varios planetas",
        "que esperan tu llegada",
        "Ya puedes arreglar tu nave",
        "Este es el comienzo",
        "de un emocionante viaje.",
        "Espero no mueras pronto.",
        " ",]

    const diccionario_objetos = {
        "objeto1": {
            "rango_x": [0, 0.026],
            "mensaje": "Esquiva las esferas de metal"
        },
        "objeto2": {
            "rango_x": [0.027, 0.038],
            "mensaje": "Salta el obstaculo"
        },
        "objeto3": {
            "rango_x": [0.0515, 0.087],
            "mensaje": "Pasa todas las puertas"
        },
        "objeto4": {
            "rango_x": [0.088, 0.125],
            "mensaje": "Encuentra y toca la pieza perdida"
        },
        "objeto5": {
            "rango_x": [0.126, 0.180],
            "mensaje": "Salta los obstaculo"
        },
        "objeto6": {
            "rango_x": [0.181, 0.4],
            "mensaje": "Permanece en el circulo azul"
        },
    };
    const functionMsjFinal = () => {
        const tiempoEntreMensajes = 3000;
    
        const promesas = mensajes.map((mensaje, index) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    setTextoFinal(mensaje);
                    resolve();
                }, index * tiempoEntreMensajes);
            });
        });
    
        Promise.all(promesas).then(() => {
            setTimeout(() => {
                console.log("entro al timeout final");
                navigate("/level2");
            }, 10000); 
        });
    };



    useEffect(() => {


        if (avatarpositionz !== null && !final) {
            for (const objeto in diccionario_objetos) {
                if (avatarpositionz >= diccionario_objetos[objeto]["rango_x"][0] && avatarpositionz <= diccionario_objetos[objeto]["rango_x"][1]) {
                    setMensaje(diccionario_objetos[objeto]["mensaje"]);
                    break;
                }
            }
            pass
        }
        else {
            setMensaje("Manten Presionada la tecla P")
        }
    }, [avatarpositionz, final]);

    return (
        <>
            <AvatarProvider>
                <KeyboardControls map={map} >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', padding: "3px" }}>
                        <div style={{ color: 'red', fontSize: '39px' }}>{cohete}</div>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '39px', color: 'white' }}>{mensaje}</div>
                        <div style={{ color: 'red', fontSize: '49px' }}>{lives}</div>
                    </div>
                    <Canvas
                        shadows={false}
                    >
                        {/* <Perf position="top-left" /> */}
                        <Suspense fallback={null}>
                            <Lights ></Lights>
                            {/* <Environments /> */}
                            <Physics debug={false}>
                                <World mostrarVidaExtra={mostrarVidaExtra} quitarPieza={quitarPieza} />
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
                                    onCollisionEnter={({ manifold, target, other }) => {
                                        const diferencia = (new Date().getTime() - ultimaVidaPerdida) / 1000 > 2
                                        console.log("HOLA_", other.rigidBodyObject.name)
                                        console.log(
                                            "Collision at world position ",
                                            manifold.solverContactPoint(0), "mainfold: ", manifold, "target: ", target, "other: ", other
                                        )
                                        if (countLives > 0 && diferencia && other.rigidBodyObject.name && other.rigidBodyObject.name != "live" && other.rigidBodyObject.name != "pieza"&& other.rigidBodyObject.name != "final") {
                                            setCountLives(countLives - 1)
                                            setUltimaVidaPerdida(new Date().getTime())
                                            other.rigidBodyObject.name

                                        }
                                        if (other.rigidBodyObject.name && other.rigidBodyObject.name == "live") {
                                            setCountLives(countLives + 1)
                                            setUltimaVidaPerdida(new Date().getTime())
                                            setMostrarVidaExtra(false)
                                            console.log("desaparece la vida")

                                        }

                                        if (other.rigidBodyObject.name && other.rigidBodyObject.name == "pieza") {
                                            setCohete("🚀")
                                            setQuitarPieza(true)
                                            console.log("desaparece la pieza")

                                        }

                                        if (other.rigidBodyObject.name && other.rigidBodyObject.name == "final") {
                                            if (final) {
                                                return
                                            }
                                            setFinal(true)
                                            setMensaje("Mantén presionada la tecla p")
                                            functionMsjFinal()

                                        }

                                    }}
                                >
                                    <Avatar setpositionfunction={setpositionfunction} />
                                </Ecctrl>
                            </Physics>

                            <WelcomeText position={[-2, 2, -92]} text={textoFinal} />
                        </Suspense>
                        <Controls />
                    </Canvas>
                </KeyboardControls>
            </AvatarProvider>
        </>

    )
}
