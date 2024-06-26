import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Experience from './Experience';
import Level1 from "./levels/Level1/Level1";
import Level2 from "./levels/Level2/Level2";
import Level3 from "./levels/Level3/Level3";
import Level4 from "./levels/Level4/Level4";
import Level5 from "./levels/Level5/Level5";
import Level6 from "./levels/Level6/Level6";
import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import { ProjectilesProvider } from "./context/ProjectilesContext";
import Level7 from "./levels/Level7/Level7";

export default function GameRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <GameProvider>
                    <ProjectilesProvider>
                        <Routes>

                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Experience />} />
                            <Route path="/level1" element={<Level1 />} />
                            <Route path="/level2" element={<Level2 />} />
                            <Route path="/level3" element={<Level3 />} />
                            <Route path="/level4" element={<Level4 />} />
                            <Route path="/level5" element={<Level5 />} />
                            <Route path="/level6" element={<Level6 />} />
                            <Route path="/level7" element={<Level7 />} />

                        </Routes>
                    </ProjectilesProvider>
                </GameProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}