import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import "./GameMenu.css";

export default function GameMenu() {
  const { stats } = useGame();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : stats.level - 1
          );
          break;
        case "ArrowDown":
        case "s":
        case "S":
          setSelectedIndex((prevIndex) =>
            prevIndex < stats.level - 1 ? prevIndex + 1 : 0
          );
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : stats.level - 1
          );
          break;
        case "ArrowRight":
        case "d":
        case "D":
          setSelectedIndex((prevIndex) =>
            prevIndex < stats.level - 1 ? prevIndex + 1 : 0
          );
          break;
        case "Enter":
          handleClick(selectedIndex);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, stats.level]);

  const handleClick = (index) => {
    if (index > stats?.level - 1) return;
    setSelectedIndex(index);
    navigate(`/level${index + 1}`, {
      state: {
        firstTime: true,
      },
    });
  };

  const handleMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(0); // Reinicia el índice seleccionado al dejar el mouse, si es necesario
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">X-Space</h1>
      <div className="centered-grid">
        {levels.map((level, index) => (
          <div key={index} className="planet-group">
            <div
              className={`planet-bg planet-bg-${index + 1} ${
                index > stats?.level - 1 ? "blocked" : ""
              } ${selectedIndex === index ? "selected" : ""}`}
            />
            <NavLink
              to={`/level${index + 1}`}
              className={`planet-link planet-link-${index + 1} ${
                index > stats?.level - 1 ? "blocked" : ""
              } ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{level.name}</h3>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="background-overlay bg-gradient" />
      <div className="background-overlay bg-galaxy" />
    </div>
  );
}

const levels = [
  { name: "Nivel 1" },
  { name: "Nivel 2" },
  { name: "Nivel 3" },
  { name: "Nivel 4" },
  { name: "Nivel 5" },
  { name: "Nivel 6" },
  { name: "Nivel 7" },
];

