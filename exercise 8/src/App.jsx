import { useEffect, useState } from "react";

function App() {
  const [initialTime, setInitialTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setRunning(true);
    }
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTimeLeft(initialTime);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);

    setInitialTime(value);
    setTimeLeft(value);
    setRunning(false);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <div>
        <p>Set Time (seconds)</p>

        <input
          type="number"
          value={initialTime}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <p>Time Left: {timeLeft} seconds</p>

        <button
          disabled={isRunning || timeLeft === 0}
          onClick={handleStart}
        >
          Start
        </button>

        <button
          disabled={!isRunning}
          onClick={handleStop}
        >
          Stop
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;