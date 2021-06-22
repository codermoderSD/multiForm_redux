import { SET_BUILDING, SET_PINCODE, SET_FLAT } from "./addressDetailsActions";

const initialState = {
  building: "",
  flat: "",
  pincode: "",
};

export const addressDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUILDING:
      return {
        ...state,
        building: action.payload,
      };
    case SET_FLAT:
      return {
        ...state,
        flat: action.payload,
      };
    case SET_PINCODE:
      return {
        ...state,
        pincode: action.payload,
      };
    default:
      return state;
  }
};
