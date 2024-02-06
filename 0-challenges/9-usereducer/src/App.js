import { useReducer } from "react";

const init = { balance: 0, loan: 0, openAcc: false, openLoan: false };

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, openAcc: true, balance: 400 };
    case "deposite":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "pay":
      return { ...state, loan: 0, openLoan: false };
    case "close":
      return { ...init };
    case "loan":
      return {
        ...state,
        loan: 5000,
        openLoan: true,
        balance: state.openLoan ? state.balance : state.balance + 5000,
      };
    default:
      throw new Error("action unknown");
  }
}

export default function App() {
  const [{ openAcc, balance, loan }, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <h1>useReducer Bank Account</h1>
      <p>Balance:{balance}</p>
      <p>loan:{loan}</p>
      {!openAcc && (
        <>
          <button onClick={() => dispatch({ type: "open" })}>
            open account
          </button>
          <button disabled>deposite 150</button>
          <button disabled>withdraw 50</button>
          <button disabled>Request a loan 5000</button>
          <button disabled>pay loan</button>
          <button disabled>close account</button>
        </>
      )}

      {openAcc && (
        <>
          <button disabled>open account</button>
          <button onClick={() => dispatch({ type: "deposite" })}>
            deposite 150
          </button>
          <button onClick={() => dispatch({ type: "withdraw" })}>
            withdraw 50
          </button>
          <button onClick={() => dispatch({ type: "loan" })}>
            Request a loan 5000
          </button>
          <button onClick={() => dispatch({ type: "pay" })}>pay loan</button>
          <button onClick={() => dispatch({ type: "close" })}>
            close account
          </button>
        </>
      )}
    </div>
  );
}
