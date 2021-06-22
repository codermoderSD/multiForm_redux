import {
  SET_FULL_NAME,
  SET_EMAIL,
  SET_PHN_NUMBER,
} from "./basicDetailsActions";

const initialState = {
  fullName: "",
  email: "",
  phnNumber: "",
};

export const basicDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHN_NUMBER:
      return {
        ...state,
        phnNumber: action.payload,
      };
    default:
      return state;
  }
};
