import { useEffect, useState } from "react";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="card shadow border-0 p-4">

      <h3>🍅 Focus Timer</h3>

      <h1 className="display-1 text-center my-4">
        {minutes}:{seconds}
      </h1>

      <div className="d-flex justify-content-center gap-3">

        <button
          className="btn btn-success"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            setIsRunning(false);
            setTime(25 * 60);
          }}
        >
          Reset
        </button>

      </div>

    </div>
  );
}