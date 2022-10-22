import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBYAXefDBhckCQVBYtdF-5U3naIq7F_sA4",
  authDomain: "webjs-4fb27.firebaseapp.com",
  projectId: "webjs-4fb27",
  storageBucket: "webjs-4fb27.appspot.com",
  messagingSenderId: "26650999789",
  appId: "1:26650999789:web:2d91c51cd94677d6c885e4",
  measurementId: "G-B2LH6YW6QQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const messaging = getMessaging(app);