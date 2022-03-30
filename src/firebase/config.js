import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOLf8vl_yMQdEkMTi3FLzd6NdzTwOgS1g",
  authDomain: "actividad-10-utch-b44ae.firebaseapp.com",
  databaseURL: "https://actividad-10-utch-b44ae-default-rtdb.firebaseio.com",
  projectId: "actividad-10-utch-b44ae",
  storageBucket: "actividad-10-utch-b44ae.appspot.com",
  messagingSenderId: "24158528995",
  appId: "1:24158528995:web:1743b5427dc15b309dacd6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
