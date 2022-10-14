import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDBHZ9OZGKLHZkZDc0lLBam2OjhTv4-BiA",
    authDomain: "webjs-f949b.firebaseapp.com",
    projectId: "webjs-f949b",
    storageBucket: "webjs-f949b.appspot.com",
    messagingSenderId: "362341515411",
    appId: "1:362341515411:web:1899ec6adb41277f7f8d66",
    measurementId: "G-ZVNPCR36DY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = (async () => {
    try {
        const isSupportedBrowser = await isSupported();
        if (isSupportedBrowser) {
            return getMessaging(app);
        }
        console.log('Firebase does not support this browser');
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
})();