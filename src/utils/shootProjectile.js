import * as THREE from "three";

export const shootProjectile = (nave, addProjectile) => {
  const projectileId = THREE.MathUtils.generateUUID(); // Generar ID único
  const positionNave = nave.body.translation(); // Posición de la nave
  const position = [positionNave.x , positionNave.y+3 , positionNave.z -30]; // Posición del proyectil

  addProjectile({ id: projectileId, position });
};
