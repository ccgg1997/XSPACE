import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level2 from "./levels/Level2/Level2";
import Experience from './Experience';
import Level1 from "./levels/Level1";

export default function GameRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Experience />} />
                <Route path="/level1" element={<Level1 />} />
                <Route path="/level2" element={<Level2 />} />
            </Routes>
        </BrowserRouter>
    )
}