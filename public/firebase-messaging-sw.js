// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyAiSl10wfHpUvr7fX_NQpY27QZn0qslBRE",
    authDomain: "molardent-e376d.firebaseapp.com",
    databaseURL: "https://molardent-e376d.firebaseio.com",
    projectId: "molardent-e376d",
    storageBucket: "molardent-e376d.appspot.com",
    messagingSenderId: "1065309506795",
    appId: "1:1065309506795:web:59326c1204af8a772d02ae"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();