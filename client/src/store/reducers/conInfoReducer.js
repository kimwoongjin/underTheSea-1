import { SET_CON_INFO } from "../actions/actionTypes";

const initialState = {
  container_id: "",
  user_id: "",
  container_name: "",
  container_size: "",
  theme: "",
  level: "",
};

const conInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case `GET_CON_INFO`:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default conInfoReducer;
