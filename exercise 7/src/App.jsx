import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="combined-app">
      <h1>Combined React App</h1>
      <div className="mouse-tracker">
        <p>Mouse X: {coords.x}</p>
        <p>Mouse Y: {coords.y}</p>
      </div>
    </main>
  );
}

export default App;
