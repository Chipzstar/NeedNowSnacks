import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyA4p1vlNvW5OGIF_1uYuXp_rT1rAXzCI7g",
	authDomain: "neednow-a113b.firebaseapp.com",
	databaseURL: "https://neednow-a113b.firebaseio.com",
	projectId: "neednow-a113b",
	storageBucket: "neednow-a113b.appspot.com",
	messagingSenderId: "18933068122",
	appId: "1:18933068122:web:770bc94891d8e24824c363",
	measurementId: "G-9P797WSZQ6"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;