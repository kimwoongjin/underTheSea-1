import { CONTAINER_CARD_INFO_SHOW } from "../actions/actionTypes";

const initialState = {
  level_id: 11,
  container_name: "",
  size: "",
  theme: "",
};

const manageCardReducer = (prevState = initialState, action) => {
  let state;
  switch (action.type) {
    case CONTAINER_CARD_INFO_SHOW:
      state = {
        ...prevState,
        container_name: action.payload.data.container_name,
        size: action.payload.data.size,
        theme: action.payload.data.theme,
      };
      break;

    default:
      state = { ...prevState };
  }
  return state;
};

export default manageCardReducer;
