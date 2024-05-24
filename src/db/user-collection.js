"use strict";

import { addDoc, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const usersRef = collection(db, "users")

const createUser = async (userData) => {
    try {
        const newUser = {
            ...userData,
            lives: 3,
            level: 1,
            parts: 0
        }
        await addDoc(usersRef, newUser)
    } catch (error) {
        console.error(error)
    }
}

const saveDataUser = async (valuesUser) => {
    const userDb = await readUser(valuesUser.email);
    // console.log('userDb', userDb)
    if (!userDb) {
        // console.log('Creando usuario nuevo')
        await createUser(valuesUser)
    }
}

const readUser = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail)))

        if (userSnapshot.empty) {
            return null;
        }

        const userData = userSnapshot.docs.map((doc) => doc.data())
        return userData[0]

    } catch (error) {
        console.error(error)
    }
}

const editUser = async (userEmail, userData) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail)))

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" }
        }

        const userDoc = userSnapshot.docs[0]
        const userDocRef = userDoc.ref;
        await updateDoc(userDocRef, userData);
        return { success: true, message: "User updated" }
    } catch (error) {
        console.error(error)
    }
}

const patchUser = async (userEmail, propsData) => {
    try {
        const userSnapshot = await getDocs(
            query(usersRef, where("email", "==", userEmail)))

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" }
        }
        const userData = userSnapshot.docs.map((doc) => doc.data())
        const userDoc = userSnapshot.docs[0]
        const userDocRef = userDoc.ref;
        await updateDoc(userDocRef, { ...userData[0], ...propsData });
        return { success: true, message: "User updated" }
    } catch (error) {
        console.error(error)
    }
}

export { createUser, readUser, editUser, saveDataUser, patchUser };