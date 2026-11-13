// Biopole Connect (version web / iPhone) — réception des notifications push.
// Firebase affiche la notification quand l'application est fermée ou en
// arrière-plan ; le clic ouvre le lien envoyé par le service push-worker.
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDWeCma-pndakVLb4z0h9mCZsuZsZP8EUw',
  authDomain: 'android-c2139.firebaseapp.com',
  projectId: 'android-c2139',
  storageBucket: 'android-c2139.appspot.com',
  messagingSenderId: '1077008046685',
  appId: '1:1077008046685:web:d3b4ad8c9de61617ac4bb4',
});

firebase.messaging();
