import { SET_CREDITCARD, SET_DATE, SET_CVV } from "./paymentDetailsActions";

const initialState = {
  creditCard: "",
  date: "",
  cvv: "",
};

export const paymentDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDITCARD:
      return {
        ...state,
        creditCard: action.payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_CVV:
      return {
        ...state,
        cvv: action.payload,
      };
    default:
      return state;
  }
};
