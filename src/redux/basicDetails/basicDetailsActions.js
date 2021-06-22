export const SET_FULL_NAME = "SET_FULL_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PHN_NUMBER = "SET_PHN_NUMBER";

export const setFullName = (name) => {
  return {
    type: SET_FULL_NAME,
    payload: name,
  };
};

export const setBasicEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setBasicPhnNumber = (phnNo) => {
  return {
    type: SET_PHN_NUMBER,
    payload: phnNo,
  };
};
