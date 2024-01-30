import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    // if (step > 1) setStep(step - 1);
    if (step > 1) {
      setStep((cur) => cur - 1);
    }
  };

  const handleNext = () => {
    // if (step < 3) setStep(step + 1);
    //better way of updating value based on current value
    if (step < 3) {
      setStep((cur) => cur + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              className={`${step >= 1 ? "active" : ""}`}
              onClick={() => setStep(1)}
            >
              1
            </div>
            <div
              className={`${step >= 2 ? "active" : ""}`}
              onClick={() => setStep(2)}
            >
              2
            </div>
            <div
              className={`${step >= 3 ? "active" : ""}`}
              onClick={() => setStep(3)}
            >
              3
            </div>
          </div>

          {/* <p className="message">
            <h3> Step {step}</h3> : {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {/* child pros enables us to pass, props + JSX to out child (reusable) components */}
            <Button
              onClick={handlePrevious}
              backgroundColor="#7950f2"
              textColor="#fff"
            >
              {" "}
              <span>👈</span> Previous
            </Button>

            <Button
              onClick={handleNext}
              backgroundColor="#7950f2"
              textColor="#fff"
            >
              Next <span>👉</span>
            </Button>

            {/* 
            this is ok but when increaseing of atribute that but has it get messy
            <Button
              onClick={handlePrevious}
              backgroundColor="#7950f2"
              textColor="#fff"
              text="Previous"
              emoji="👈"
            />
            <Button
              onClick={handleNext}
              backgroundColor="#7950f2"
              textColor="#fff"
              text="Next"
              emoji="👉"
            /> */}
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> */}
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

// function Button({ onClick, textColor, backgroundColor, text, emoji }) {
//   return (
//     <button
//       style={{ backgroundColor: backgroundColor, color: textColor }}
//       onClick={onClick}
//     >
//       <span>{text === "Next" ? `${text} ${emoji}` : `${emoji} ${text}`}</span>
//     </button>
//   );
// }
function Button({ onClick, textColor, backgroundColor, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step {step}</h3> {children}
    </p>
  );
}
