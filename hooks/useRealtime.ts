import { db } from "@/constants/firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";

export function listenToPath<T>(path: string, callback: (data: T | null) => void) {
   const dbRef = ref(db, path);
   const unsubscribe = onValue(dbRef, (snapshot) => {
      callback(snapshot.val());
   });
   return unsubscribe;
}

export function writeData(path: string, value: any) {
   return set(ref(db, path), value);
}

export function pushData(path: string, value: any) {
   return push(ref(db, path), value);
}
