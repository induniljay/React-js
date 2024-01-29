import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepIncreaseHandler = () => {
    setStep((cur) => cur + 1);
  };
  const stepDecreaseHandler = () => {
    setStep((cur) => cur - 1);
  };

  const countIncreaseHandler = () => {
    setCount((cur) => cur + step);
  };
  const countDecreaseHandler = () => {
    setCount((cur) => cur - Math.abs(step));
  };

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

  return (
    <div className="container">
      <div className="stepContainer">
        <button onClick={stepDecreaseHandler}>-</button>
        <p>Step : {step}</p>
        <button onClick={stepIncreaseHandler}>+</button>
      </div>
      <div className="countContainer">
        <button onClick={countDecreaseHandler}>-</button>
        <p>Count : {count}</p>
        <button onClick={countIncreaseHandler}>+</button>
      </div>

      <p className="text">
        {count === 0
          ? `Today is`
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago `}

        <span>{updateDate(count)}</span>
      </p>
    </div>
  );
}
