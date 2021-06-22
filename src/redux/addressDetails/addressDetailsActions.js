export const SET_BUILDING = "SET_BUILDING";
export const SET_FLAT = "SET_FLAT";
export const SET_PINCODE = "SET_PINCODE";

export const setAddressBuilding = (building) => {
  return {
    type: SET_BUILDING,
    payload: building,
  };
};
export const setAddressFlat = (flat) => {
  return {
    type: SET_FLAT,
    payload: flat,
  };
};
export const setAddressPincode = (pin) => {
  return {
    type: SET_PINCODE,
    payload: pin,
  };
};
