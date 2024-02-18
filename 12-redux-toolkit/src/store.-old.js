import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

//reducer function is not allowed to modifiy existing state also it  is not allowed do asynchronous logic.

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
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

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

//combined all reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({
//   type: "account/deposit",
//   payload: 4000,
// });

// console.log(store.getState());

// store.dispatch({
//   type: "account/withdraw",
//   payload: 1250,
// });

// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 10000,
//     purpose: "Buy a car",
//   },
// });

// console.log(store.getState());

// store.dispatch({
//   type: "account/payLoan",
// });
// console.log(store.getState());

//Redux way of creating action  (Action creator)

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
store.dispatch(deposit(4000));
console.log(store.getState());

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
store.dispatch(withdraw(1200));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
}

store.dispatch(requestLoan(10000, "Buy a car"));
console.log(store.getState());

function payloan() {
  return {
    type: "account/payLoan",
  };
}

store.dispatch(payloan());
console.log(store.getState());

//customer store

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("ajax castro", "11414"));
console.log(store.getState());

store.dispatch(updateName("Dora huwan"));
console.log(store.getState());
