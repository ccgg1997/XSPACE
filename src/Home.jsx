import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Lights from "./lights/Lights";
import Galaxy from "./backgrounds/Galaxy";
import World from "./components/Level1Environment";
import { useAuth } from "./context/AuthContext";
import Button from 'react-bootstrap/Button';

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();

  const menuStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -240%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "300px",
    maxHeight: "170px",
    minHeight: "170px"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  };

  const headingStyle = {
    color: "black",
  };


  const onHandleButtonLogin = async () => {
    await auth.loginWithGoogle().then((res) => {
      console.log(res)
      navigate("/menu");
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <Canvas>
      <ambientLight />
      <PerspectiveCamera makeDefault position={[0, 10, 20]} />
      <OrbitControls makeDefault target={[0, 10, 0]} />
      <Lights />
      <World />
      <Galaxy />
      <Html style={menuStyle}>
        <div style={formStyle}>
          <h2 style={headingStyle}>Iniciar Sesión</h2>
          <Button size="lg" variant="danger" onClick={onHandleButtonLogin}>Ingresar</Button>
          {/* <button onClick={onHandleButtonLogin}>Ingresar</button> */}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </Html>
    </Canvas>
  );
};

export default Home;