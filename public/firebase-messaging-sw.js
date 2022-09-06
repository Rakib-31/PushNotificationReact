// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDAEpYxpuSTEpfCXT-asLx0r1yEwMj1oRM",
  authDomain: "phonic-goods-240520.firebaseapp.com",
  projectId: "phonic-goods-240520",
  storageBucket: "phonic-goods-240520.appspot.com",
  messagingSenderId: "682088210089",
  appId: "1:682088210089:web:dd4aefd30d99ef33c2d3b8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  console.log(self.registration);
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});