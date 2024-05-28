import React, {useState } from "react";

// Contexto de los proyectiles
export const projectilesContext = React.createContext();

// Hook para usar el contexto de los proyectiles
export const useProjectiles = () => {
  const context = React.useContext(projectilesContext);
  if (!context) {
    console.error("Error creating Projectiles context");
    return;
  }
  return context;
}

// Proveedor de los proyectiles
export const ProjectilesProvider = ({children}) => {
  const [projectiles, setProjectiles] = useState([]);

  //agrega un proyectil a la lista
  const addProjectile = (projectile) => {
    setProjectiles((prev) => [...prev, projectile]);
  }

  //remueve un proyectil de la lista
  const removeProjectile = (id) => {
    setProjectiles((prev) => prev.filter((projectile) => projectile.id !== id)); 
  }

  // Proveedor de los proyectiles
  return (
    <projectilesContext.Provider value={{projectiles, addProjectile, removeProjectile}}>
      {children}
    </projectilesContext.Provider>
  )
}