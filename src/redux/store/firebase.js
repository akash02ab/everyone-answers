import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDBEx5afqei4NXHTz6A01aYRInOoSu8LjU",
	authDomain: "everyone-answers-19204.firebaseapp.com",
	projectId: "everyone-answers-19204",
	storageBucket: "everyone-answers-19204.appspot.com",
	messagingSenderId: "740618068477",
	appId: "1:740618068477:web:2495400077254a13753994",
	measurementId: "G-BT3S0FQFC2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
