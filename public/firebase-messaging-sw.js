// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: 'AIzaSyC6un75gmLX-Y8E7Pguo96fGw6pZFL1NX0',
    authDomain: 'drugsstore-210f2.firebaseapp.com',
    databaseURL: 'https://drugsstore-210f2.firebaseio.com',
    projectId: 'drugsstore-210f2',
    storageBucket: 'drugsstore-210f2.appspot.com',
    messagingSenderId: '452165297139',
    appId: '1:452165297139:web:c84ffb1b3966689cc4e886',
    measurementId: 'G-R2ZR8D3XZG'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();