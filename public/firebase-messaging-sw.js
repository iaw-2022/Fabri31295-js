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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/logo192.png',
        '/logo512.png',
        '/robots.txt',
        '/src/App.css',
        '/src/index.css',
        '/src/components/cart/cart.js',
        '/src/components/cart/styles.module.scss',
        '/src/components/home/about.js',
        '/src/components/home/contact.js',
        '/src/components/home/home.js',
        '/src/components/home/style.css',
        '/src/components/itemCart/itemCart.js',
        '/src/components/itemCart/styles.module.scss',
        '/src/components/portfolio/portfolio.js',
        '/src/components/portfolio/style.css',
        '/src/components/product/product.js',
        '/src/components/product/style.css',
        '/src/components/register/register.js',
        '/src/components/register/style.css',
        '/src/components/store/store.js',
        '/src/components/toast/Toast.js',
        '/src/components/ui/card.js',
        '/src/components/ui/carousel.js',
        '/src/components/ui/filter.js',
        '/src/components/ui/navbar.js',
        '/src/components/ui/style.css',
        '/src/context/cartContext.jsx',
        '/src/notifications/Notification.js',
        '/src/notifications/NotificationProvider.js',
        '/src/resources/carta.png',
        '/src/resources/curva.png',
        '/src/resources/curva2.png',
        '/src/resources/logo.png',
        '/src/resources/perfil.png',
      ]);
    })
  );
});

// Evento 'fetch' del service worker
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

messaging.onBackgroundMessage(function(payload) {
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
