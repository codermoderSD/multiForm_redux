export const SET_CREDITCARD = "SET_CREDITCARD";
export const SET_DATE = "SET_DATE";
export const SET_CVV = "SET_CVV";

export const setPaymentCard = (card) => {
  return {
    type: SET_CREDITCARD,
    payload: card,
  };
};

export const setPaymentDate = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};

export const setPaymentCvv = (cvv) => {
  return {
    type: SET_CVV,
    payload: cvv,
  };
};
