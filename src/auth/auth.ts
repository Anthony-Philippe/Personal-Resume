import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //const token = await userCredential.user.getIdToken();
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const tokenResponse = await fetch('http://localhost:3000/generate-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, uid: user.uid }),
    });
    const { token } = await tokenResponse.json();
    sessionStorage.setItem('otpToken', token);
    sessionStorage.setItem('uid', user.uid);
    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem('otpToken');
    sessionStorage.removeItem('uid');
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:5173/recover-password',
    });
    console.log("E-mail de réinitialisation envoyé");
  } catch (error) {
    throw error;
  }
};