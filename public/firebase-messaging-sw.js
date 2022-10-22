importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyBYAXefDBhckCQVBYtdF-5U3naIq7F_sA4",
    authDomain: "webjs-4fb27.firebaseapp.com",
    projectId: "webjs-4fb27",
    storageBucket: "webjs-4fb27.appspot.com",
    messagingSenderId: "26650999789",
    appId: "1:26650999789:web:2d91c51cd94677d6c885e4",
    measurementId: "G-B2LH6YW6QQ"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje mientras estabas ausente");
// previo a mostrar notificación
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }

    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    )
})