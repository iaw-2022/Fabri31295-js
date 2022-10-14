importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyDBHZ9OZGKLHZkZDc0lLBam2OjhTv4-BiA",
    authDomain: "webjs-f949b.firebaseapp.com",
    projectId: "webjs-f949b",
    storageBucket: "webjs-f949b.appspot.com",
    messagingSenderId: "362341515411",
    appId: "1:362341515411:web:1899ec6adb41277f7f8d66",
    measurementId: "G-ZVNPCR36DY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("You have a new notification!");
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo.png"
    }

    return self.registration.showNotification(notificationTitle, notificationOptions);
})