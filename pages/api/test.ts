import firebase from "../../firebase/clientApp";

export default async (req, res) => {
    const db = firebase.firestore();
  try {
    const { slug } = req.body;
    console.log(db)
    const entries = await db.collection('votes').get();
    const entriesData = entries.docs.map(entry => entry.data());
    console.log(entries)

    if (entriesData.some(entry => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('votes').add({vote: 'yes'});
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).json({e});
  }
}