import firebase from "firebase/app";
import "firebase/firestore";

// CONFIGURACION DE LA BASE DE DATOS EN FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCn8IPRs9_kwCns95fgI3fhueOCVapw2CQ",
  authDomain: "homework-app-jg.firebaseapp.com",
  databaseURL: "https://homework-app-jg.firebaseio.com",
  projectId: "homework-app-jg",
  storageBucket: "homework-app-jg.appspot.com",
  messagingSenderId: "290120750236",
  appId: "1:290120750236:web:2d6c66b9903c92ca170959",
};

// INICIALIZAMOS LA BASE DE FIREBASE CON EL METODO INITIALIZEAPP Y LE PASAMOS LA CONFIG
firebase.initializeApp(firebaseConfig);

export default firebase;
