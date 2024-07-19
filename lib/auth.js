// lib/auth.js
import firebaseApp from "./firebaseConfig";

export const signup = async (email, password) => {
  if (typeof window !== "undefined") {
    const firebase = await import("firebase/compat/app");
    await import("firebase/compat/auth");
    try {
      const userCredential = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
};

export const login = async (email, password) => {
  if (typeof window !== "undefined") {
    const firebase = await import("firebase/compat/app");
    await import("firebase/compat/auth");
    try {
      const userCredential = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
};

export const logout = async () => {
  if (typeof window !== "undefined") {
    const firebase = await import("firebase/compat/app");
    await import("firebase/compat/auth");
    try {
      await firebaseApp.auth().signOut();
    } catch (error) {
      throw error;
    }
  }
};
