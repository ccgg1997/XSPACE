import { createRoot } from 'react-dom/client';
// import Level1 from './levels/Level1';
import Experience from './Experience';
import './styles.css';
import { Canvas } from '@react-three/fiber';
import GameRoutes from './GameRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <GameRoutes />

    {/* <Canvas
      camera={{ position: [0, 10, 20] }}
    >
      <Level1 />
    </Canvas> */}
  </>
);