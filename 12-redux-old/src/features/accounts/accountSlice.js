const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
const host = "api.frankfurter.app";

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    //API CALL

    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    //return the action
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}
// store.dispatch(deposit(4000));
// console.log(store.getState());

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
// store.dispatch(withdraw(1200));
// console.log(store.getState());

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
}

// store.dispatch(requestLoan(10000, "Buy a car"));
// console.log(store.getState());

export function payloan() {
  return {
    type: "account/payLoan",
  };
}

// store.dispatch(payloan());
// console.log(store.getState());
