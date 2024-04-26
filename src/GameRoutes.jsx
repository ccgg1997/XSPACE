import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level2 from "./levels/Level2/Level2";
import Experience from './Experience';
import Level1 from "./levels/Level1";
import Level3 from "./levels/Level3/Level3";

export default function GameRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Experience />} />
                <Route path="/level1" element={<Level1 />} />
                <Route path="/level2" element={<Level2 />} />
                <Route path="/level3" element={<Level3 />} />
                
            </Routes>
        </BrowserRouter>
    )
}