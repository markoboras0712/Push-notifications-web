/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBKzvX7FxaHODz5hH7aHM9k39wBYxW5O9A",
  authDomain: "cloud-messaging-66664.firebaseapp.com",
  projectId: "cloud-messaging-66664",
  storageBucket: "cloud-messaging-66664.appspot.com",
  messagingSenderId: "413035086313",
  appId: "1:413035086313:web:d455fe1a11f3c09aba4b78",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
