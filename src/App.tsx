import { useEffect } from "react";
import "./App.css";
import { messaging, publicKey, handleToken } from "./firebase";

function App() {
  useEffect(() => {
    handleToken(messaging, publicKey);
  }, []);
  return (
    <div className="App">
      <header className="App-header">Cloud messaging</header>
      <div className="App-main"></div>
    </div>
  );
}

export default App;
