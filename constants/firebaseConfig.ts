// Gunakan kredensial dari Firebase Console
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyBK-UIyz6Og-FOQ-J6R3FWl059_KpHHoGU",
   authDomain: "http://smart-socket-ebb04.firebaseapp.com",
   databaseURL: "https://smart-socket-ebb04-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "smart-socket-ebb04",
   storageBucket: "http://smart-socket-ebb04.firebasestorage.app",
   messagingSenderId: "1056656296468",
   appId: "1:1056656296468:web:13961bdf9424c17039f501",
   measurementId: "G-T88W3V1RCL"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
