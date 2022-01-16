import {firestore} from "./firebase";

const getUsers = async () => {
    const snapshot = await firestore.collection("users").get();
    /*const users = snapshot.docs.map(doc => doc.data());*/
    snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export {getUsers};