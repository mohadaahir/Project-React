import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    document.title = name ? `${greeting}, ${name}` : "Welcome!";
  }, [name, greeting]);

  return (
    <div className="app-container">
      <h2>Enter Your Name:</h2>
      <input
        style={{ color: "black" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <h2>Choose a Greeting:</h2>
      <input
        style={{ color: "black" }}
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
        placeholder="Greeting"
      />
    </div>
  );
}

export default App;
