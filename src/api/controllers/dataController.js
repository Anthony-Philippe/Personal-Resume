import { doc, getDoc } from 'firebase/firestore';
import db from '../config/firebase.js';
import { getMediaDetails } from '../utils/media.js';

export const getContentById = async (req, res) => {
  const { id } = req.params;

  try {
    const docRef = doc(db, 'Content', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists())
      return res.status(404).send({ message: 'Content not found' });

    const contentData = docSnap.data();

    if (contentData.illustration) {
      try {
        const illustrationData = await getMediaDetails(contentData.illustration);
        contentData.illustrationData = illustrationData;
      } catch (error) {
        return res.status(404).send({ message: error.message });
      }
    }

    res.status(200).send(contentData);
  } catch (error) {
    res.status(500).send({ message: 'An error occurred', error });
  }
};
