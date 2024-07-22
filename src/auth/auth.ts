import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import emailjs from 'emailjs-com';

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    console.log("Token après inscription :", token);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    console.log("Token après connexion :", token);

    const verificationCode = generateVerificationCode();
    localStorage.setItem('verificationCode', verificationCode);
    localStorage.setItem('userEmail', email);

    await emailjs.send('your_service_id', 'your_template_id', {
      to_email: email,
      verification_code: verificationCode,
    }, 'your_user_id');

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
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