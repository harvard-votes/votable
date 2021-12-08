import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqzr8wvRMQIEzBkRFXpNu-JQ7Hy11XleU",
  authDomain: "civicengine-development.firebaseapp.com",
  databaseURL: "https://civicengine-development-default-rtdb.firebaseio.com",
  projectId: "civicengine-development",
  storageBucket: "civicengine-development.appspot.com",
  messagingSenderId: "455989849696",
  appId: "1:455989849696:web:17b7c1356cce0c7db11d05",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
