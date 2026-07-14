import React, { useState, useEffect } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-[350px]">
        <h1 className="text-3xl font-bold mb-6">
          ⏱ Stopwatch
        </h1>

        <h2 className="text-5xl font-bold text-blue-600 mb-8">
          {String(minutes).padStart(2, "0")} :
          {String(seconds).padStart(2, "0")}
        </h2>

        <div className="flex justify-center gap-3">
          <button
            disabled={isRunning}
            onClick={() => setIsRunning(true)}
            className="bg-green-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            Start
          </button>

          <button
            disabled={!isRunning}
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            Stop
          </button>

          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
            className="bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;