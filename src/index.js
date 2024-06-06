import { createRoot } from 'react-dom/client';
import './styles.css';
import GameRoutes from './GameRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <GameRoutes />
  </>
);