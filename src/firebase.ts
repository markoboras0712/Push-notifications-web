import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  Messaging,
  onMessage,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBKzvX7FxaHODz5hH7aHM9k39wBYxW5O9A",
  authDomain: "cloud-messaging-66664.firebaseapp.com",
  projectId: "cloud-messaging-66664",
  storageBucket: "cloud-messaging-66664.appspot.com",
  messagingSenderId: "413035086313",
  appId: "1:413035086313:web:d455fe1a11f3c09aba4b78",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const publicKey =
  "BNsqJmnz7ZjuIcq9IZ9A3Kz2rctP8i5T4Z7K0fuiM491H6RuMls67JcsJNe7_vvlqC9SNap3EioSZjGuoxi5iEE";

onMessage(messaging, (payload) => {
  console.log("Foreground Message received. ", payload);
});

export const handleToken = async (messaging: Messaging, vapidKey: string) => {
  try {
    let response = await getToken(messaging, {
      vapidKey: vapidKey,
    });
    if (!response) {
      console.log("didnt fetch token");
    }
    console.log("token", response);
    return response;
  } catch (error) {
    alert(error);
  }
};


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
