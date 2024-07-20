import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "./firebaseConfig";
import { auth } from "./firebaseConfig";
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error(errorMessage);
  }
};
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
