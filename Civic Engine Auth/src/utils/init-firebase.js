// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzr8wvRMQIEzBkRFXpNu-JQ7Hy11XleU",
  authDomain: "civicengine-development.firebaseapp.com",
  databaseURL: "https://civicengine-development-default-rtdb.firebaseio.com",
  projectId: "civicengine-development",
  storageBucket: "civicengine-development.appspot.com",
  messagingSenderId: "455989849696",
  appId: "1:455989849696:web:17b7c1356cce0c7db11d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
export const auth = getAuth(app)


