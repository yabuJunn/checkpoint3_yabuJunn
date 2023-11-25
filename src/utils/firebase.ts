import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAF7bl-bhualC-oJKaZSn_onN7cd19QTrU",
    authDomain: "prueba-primer-firebase.firebaseapp.com",
    projectId: "prueba-primer-firebase",
    storageBucket: "prueba-primer-firebase.appspot.com",
    messagingSenderId: "591718005257",
    appId: "1:591718005257:web:547501b6b6fcace38d56d8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const subirCubo = async (id: string, color: string, letter: string) => {
    await setDoc(doc(db, "cubes", id), {
        id: id,
        color: color,
        letter: letter
    });
    console.log("Cubo subido")
}

export const pedienteTiempoReal = async (functio: any) => {
    const q = query(collection(db, "cubes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const firesotreCubes: any = [];
        querySnapshot.forEach((doc) => {
            firesotreCubes.push(doc.data());
        });
        console.log(firesotreCubes)
        functio(firesotreCubes)
    });
}