import db from '../config/firebase.js';

export const getContentById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const doc = await db.collection('Content').doc(id).get();
    if (!doc.exists) {
      return res.status(404).send({ message: 'Content not found' });
    }
    res.status(200).send(doc.data());
  } catch (error) {
    res.status(500).send({ message: 'An error occurred', error });
  }
};