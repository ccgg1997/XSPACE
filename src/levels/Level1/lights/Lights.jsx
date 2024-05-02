import { Color } from "three";
import { useRef, useState, useEffect } from 'react';

const Lights = () => {
    const pointLightRef = useRef(null);
    const [lightZ, setLightZ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLightZ((prevZ) => (prevZ > -93 ? prevZ - 3 : prevZ)); // Ajusta -200 según tu límite
        }, 1000); // 1000 milisegundos = 1 segundo

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ambientLight color={new Color("white")} intensity={0.90} />
            <directionalLight color={new Color("white")} intensity={0.009}/>
            <pointLight
                ref={pointLightRef}
                position={[0, 3, lightZ]}
                color={new Color("white")}
                intensity={100}
                distance={6}
                decay={1}
            />
        </>
    
    )
}
export default Lights;