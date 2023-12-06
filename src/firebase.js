import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import 'firebase/firestore';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, CACHE_SIZE_UNLIMITED  } from 'firebase/firestore';
import { BASE_URL } from './utilities';

var firebaseConfig = {
    apiKey: "AIzaSyD3S0E6WFRphPVqUQWhLeZmC5Mr2nsr6ok",
    authDomain: "web2023-9af2a.firebaseapp.com",
    projectId: "web2023-9af2a",
    storageBucket: "web2023-9af2a.appspot.com",
    messagingSenderId: "132022508769",
    appId: "1:132022508769:web:d15a3746b27513dd03aba0"
};

const app = initializeApp(firebaseConfig);

initializeFirestore(app, 
{localCache: 
  persistentLocalCache({tabManager: persistentMultipleTabManager()})
});

const messaging = getMessaging();

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log('Notification permission:', permission);

    if (permission === 'granted') {
      requestForToken(); // Si el permiso se concede, solicitar el token de FCM
    } else {
      // Manejar el caso en que el usuario deniega los permisos
      console.log('El usuario denegó los permisos de notificación.');
    }
  } catch (error) {
    console.error('Error al solicitar permisos de notificación:', error);
  }
};

export const requestForToken = async () => {
    return getToken(messaging, { vapidKey: 'BLcDk4wSJD7eH4KLJk-mP3AmEUvbTguxGyyTbdYNdslcjtBjt8crGVf6YYaYFWJy9L-hLgcUV-x0oJmo6MVrM70' })
      .then((currentToken) => {
        if (currentToken) {
          sendTokenToBackend(currentToken);
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
};

const sendTokenToBackend = (token) => {
  // URL de tu endpoint en Laravel para agregar el token
  const url = BASE_URL + '/addToken';

  // Datos que se enviarán en la solicitud POST
  const data = {
      token: token,
  };

  // Configuración de la solicitud POST
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  };

  // Realizar la solicitud POST usando fetch
  fetch(url, options)
      .then(response => response.json())
      .catch(error => {
          console.error('El token ya existe');
      });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });