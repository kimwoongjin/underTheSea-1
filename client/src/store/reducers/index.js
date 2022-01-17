import { combineReducers } from "redux";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import signupReducer from "./signupReducer";
import conInfoReducer from "./conInfoReducer";

const rootReducer = combineReducers({
  authReducer,
  modalReducer,
  signupReducer,
  conInfoReducer,
});

export default rootReducer;
