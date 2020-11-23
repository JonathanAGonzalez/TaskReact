import firebase from "firebase/app";
import "firebase/firestore";

// CONFIGURACION DE LA BASE DE DATOS EN FIREBASE
const firebaseConfig = {
  "aca va la config de firebase"
};

// INICIALIZAMOS LA BASE DE FIREBASE CON EL METODO INITIALIZEAPP Y LE PASAMOS LA CONFIG
firebase.initializeApp(firebaseConfig);

export default firebase;
