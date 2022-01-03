/* eslint-disable no-restricted-globals */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKzvX7FxaHODz5hH7aHM9k39wBYxW5O9A",
  authDomain: "cloud-messaging-66664.firebaseapp.com",
  projectId: "cloud-messaging-66664",
  storageBucket: "cloud-messaging-66664.appspot.com",
  messagingSenderId: "413035086313",
  appId: "1:413035086313:web:d455fe1a11f3c09aba4b78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
export const publicKey =
  "BNsqJmnz7ZjuIcq9IZ9A3Kz2rctP8i5T4Z7K0fuiM491H6RuMls67JcsJNe7_vvlqC9SNap3EioSZjGuoxi5iEE";
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});
// declare global {
//   interface Window {
//     FB: any;
//   }
// }
// let FB = window.FB;

// onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//   };

//   self.FB.showNotification(notificationTitle, notificationOptions);
// });
