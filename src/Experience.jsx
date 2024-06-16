import React, { useState, useEffect, useRef, Suspense } from "react";
import Logout from "./components/logout/Logout";
import GameStats from "./components/interface/GameStats";
import GameMenu from "./components/interface/GameMenu";

const GameCanvas = () => {
  return (
    <>
      <GameStats />
      <GameMenu />
      <Logout />
    </>
  );
};

export default GameCanvas;
