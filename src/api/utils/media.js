import { doc, getDoc } from 'firebase/firestore';
import db from '../config/firebase.js';

export const getMediaDetails = async (id) => {
  const mediaDocRef = doc(db, 'Media', id);
  const mediaDocSnap = await getDoc(mediaDocRef);

  if (!mediaDocSnap.exists()) {
    throw new Error('Media not found');
  }

  return mediaDocSnap.data();
};
