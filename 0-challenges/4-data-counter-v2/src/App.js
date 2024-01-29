import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <DateComponent />
    </div>
  );
}

function DateComponent() {
  const [inputNum, setInputNum] = useState(0);
  const [progressBar, setProgressBar] = useState(1);

  const updateDate = (count) => {
    let date = new Date();
    date = date.setDate(date.getDate() + count);

    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formatter.format(date);
  };
  const countIncreaseHandler = () => {
    setInputNum((cur) => cur + Math.abs(progressBar));
  };
  const countDecreaseHandler = () => {
    setInputNum((cur) => cur - Math.abs(progressBar));
  };

  const handleRest = () => {
    setInputNum(0);
    setProgressBar(0);
  };

  return (
    <div className="formContainer">
      <div>
        <input
          type="range"
          max={20}
          value={progressBar}
          onChange={(e) => setProgressBar(e.target.value)}
        />{" "}
        <span>{progressBar}</span>
        <div className="inputNum">
          <button onClick={countDecreaseHandler}>-</button>
          <input
            type="number"
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}
          />
          <button onClick={countIncreaseHandler}>+</button>
        </div>
      </div>
      <p>
        {inputNum === 0
          ? `Today is`
          : inputNum > 0
          ? `${inputNum} days from today is `
          : `${Math.abs(inputNum)} days ago `}

        <span>{updateDate(inputNum)}</span>
      </p>

      <button className="btn" onClick={handleRest}>
        Reset
      </button>
    </div>
  );
}
