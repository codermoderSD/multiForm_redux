import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { basicDetailReducer } from "./basicDetails/basicDetailsReducer";
import { addressDetailsReducer } from "./addressDetails/addressDetaisReducer";
import { paymentDetailsReducer } from "./paymentDetails/paymentDetailsReducer";

const rootReducer = combineReducers({
  Basic: basicDetailReducer,
  Address: addressDetailsReducer,
  Payment: paymentDetailsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
