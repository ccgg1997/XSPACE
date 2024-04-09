import { createRoot } from 'react-dom/client';
import Level1 from './levels/Level1';
import './styles.css';
import { Canvas } from '@react-three/fiber';

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Canvas
      camera={{ position: [0, 10, 20] }}
    >
      <Level1 />
    </Canvas>
  </>
);