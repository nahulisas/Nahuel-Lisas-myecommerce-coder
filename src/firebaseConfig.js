import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4cynX63CT4I9rePjVHiGtyGqskJSoNgA",
    authDomain: "backend-eccomerce.firebaseapp.com",
    projectId: "backend-eccomerce",
    storageBucket: "backend-eccomerce.firebasestorage.app",
    messagingSenderId: "249233323051",
    appId: "1:249233323051:web:133aabcae3def87e24666e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)