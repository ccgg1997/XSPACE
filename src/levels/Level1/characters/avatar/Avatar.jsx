import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function Avatar({ setpositionfunction }) {
    const avatarBodyRef = useRef();
    const avatarRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/avatar/Avatar.glb')
    const { actions } = useAnimations(animations, avatarRef)
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setAvatar({ ...avatar, ref: avatarRef, body: avatarBodyRef });
        if (typeof setpositionfunction === 'function') {
            setpositionfunction(avatarRef.current.position.z);
        }
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {

            if (actions[avatar.animation])
                actions[avatar.animation].fadeOut(0.5);
        }

    }, [actions, avatar.animation]);


    return (

        // <RigidBody >
            <group ref={avatarRef} name="Scene" position-y={-0.70}>
                <group name="Armature">
                    <skinnedMesh
                        name="EyeLeft"
                        geometry={nodes.EyeLeft.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeLeft.skeleton}
                        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="EyeRight"
                        geometry={nodes.EyeRight.geometry}
                        material={materials.Wolf3D_Eye}
                        skeleton={nodes.EyeRight.skeleton}
                        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Head"
                        geometry={nodes.Wolf3D_Head.geometry}
                        material={materials.Wolf3D_Skin}
                        skeleton={nodes.Wolf3D_Head.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Headwear"
                        geometry={nodes.Wolf3D_Headwear.geometry}
                        material={materials.Wolf3D_Headwear}
                        skeleton={nodes.Wolf3D_Headwear.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Headwear.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Headwear.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Facewear"
                        geometry={nodes.Wolf3D_Facewear.geometry}
                        material={materials.Wolf3D_Facewear}
                        skeleton={nodes.Wolf3D_Facewear.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Facewear.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Facewear.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Bottom"
                        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                        material={materials.Wolf3D_Outfit_Bottom}
                        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Footwear"
                        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                        material={materials.Wolf3D_Outfit_Footwear}
                        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Outfit_Top"
                        geometry={nodes.Wolf3D_Outfit_Top.geometry}
                        material={materials.Wolf3D_Outfit_Top}
                        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
                    />
                    <skinnedMesh
                        name="Wolf3D_Teeth"
                        geometry={nodes.Wolf3D_Teeth.geometry}
                        material={materials.Wolf3D_Teeth}
                        skeleton={nodes.Wolf3D_Teeth.skeleton}
                        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                    />
                    <primitive object={nodes.Hips} />
                </group>
            </group>
        // </RigidBody>
    )
}