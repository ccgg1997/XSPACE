export const handleCollision = ({ manifold, target, other }) => {
    // event.stopPropagation();
    if (other.rigidBodyObject) {
        if (target.rigidBodyObject.name === "PISO" || target.rigidBodyObject.name === "PARED") {
            console.log("colision ignorada");

        } else {
            alert("perdiste")
            window.location.reload();
        }
        // console.log(
        //     // this rigid body's Object3D
        //     target.rigidBodyObject.name,
        //     " collided with ",
        //     // the other rigid body's Object3D
        //     other.rigidBodyObject.name
        // );
    }
};