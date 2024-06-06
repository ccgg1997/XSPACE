import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = props.text;

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 2]}

        >
        <Center
            position={props.position}
        >
            <Text3D
                font={"../../../../assets/fonts/Level1Font.json"}
                bevelEnabled
                bevelSize={0.05}
                bevelThickness={0.01}
                height={0.3}
                letterSpacing={0.01}
                size={0.4}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
    )
}
export default WelcomeText;
