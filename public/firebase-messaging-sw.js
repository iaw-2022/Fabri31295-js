// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-firestore.js'); // Agrega firestore

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD3S0E6WFRphPVqUQWhLeZmC5Mr2nsr6ok",
  authDomain: "web2023-9af2a.firebaseapp.com",
  projectId: "web2023-9af2a",
  storageBucket: "web2023-9af2a.appspot.com",
  messagingSenderId: "132022508769",
  appId: "1:132022508769:web:d15a3746b27513dd03aba0",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

const db = firebase.firestore();

messaging.onBackgroundMessage(function(payload) {
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
