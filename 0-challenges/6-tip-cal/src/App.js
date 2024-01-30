import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [inputBill, setInputBill] = useState("");

  const [myRate, setMyRate] = useState(0);
  const [FdRate, setFdRate] = useState(0);

  let tip = 0;
  if (inputBill) {
    tip = (+inputBill * ((+myRate + +FdRate) / 2 / 100)).toFixed(2);
  }

  const handleReset = () => {
    setInputBill(0);
    setFdRate(0);
    setMyRate(0);
  };
  return (
    <div className="main">
      <Header />

      <div className="container">
        <BillInput inputBill={inputBill} onInputBill={setInputBill} />
        <SelectInput Rate={myRate} onRate={setMyRate}>
          <p>How did you like the service ?</p>{" "}
        </SelectInput>
        <SelectInput Rate={FdRate} onRate={setFdRate}>
          <p>How did your fried like the service ?</p>
        </SelectInput>
      </div>

      {!inputBill ? (
        ""
      ) : (
        <>
          <Message inputBill={inputBill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Header() {
  return <h1>Tip Calculator</h1>;
}

function BillInput({ inputBill, onInputBill }) {
  return (
    <>
      <p>How much was the bill ?</p>
      <input
        type="number"
        value={+inputBill}
        onChange={(e) => onInputBill(+e.target.value)}
      ></input>
    </>
  );
}
function SelectInput({ children, Rate, onRate }) {
  return (
    <>
      {children}
      <select value={Rate} onChange={(e) => onRate(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>it was okay (5%)</option>
        <option value={10}>it was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}
function Message({ inputBill, tip }) {
  const total = +inputBill + +tip;
  return (
    <div className="message">
      <span>
        You pay ${total} (${+inputBill} + ${tip} tip)
      </span>
    </div>
  );
}
function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
