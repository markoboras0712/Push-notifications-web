import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getToken } from "firebase/messaging";
import { messaging, publicKey } from "./firebase";

function App() {
  useEffect(() => {
    getToken(messaging, { vapidKey: publicKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log("token", currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">Cloud messaging</header>
      <div className="App-main">main</div>
    </div>
  );
}

export default App;
