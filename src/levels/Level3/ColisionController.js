export const handleCollision = ({ manifold, target, other }, callback) => {
  // event.stopPropagation();
  if (other.rigidBodyObject) {
      if (target.rigidBodyObject.name === "PISO" || target.rigidBodyObject.name === "PARED") {
          // console.log("colision ignorada");

      } else {

          // alert("perdiste")
          // callback()
          // window.location.reload();
      }
  }
};