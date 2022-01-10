import {
  LOG_IN_MODAL_ON,
  SIGN_UP_MODAL_ON,
  SKIMMER_INFO_MODAL_ON,
  SEA_BASIC_INFO_MODAL_ON,
  MY_AQUARIUM_INFO_MODAL_ON,
  FILTER_MEDIA_MODAL_ON,
  ACTIVATION_MODAL_ON,
  FEEDING_INPUT_MODAL_ON,
  MODAL_OFF,
} from "../actions/actionTypes";

const initialState = {
  isLoginModal: false,
  isSignupModal: false,
  isSkimmerModal: false,
  isSeaBasicInfoModal: false,
  isMyAquariumInfoModal: false,
  isFilterMediaModal: false,
  isActivationModal: false,
  isFeedingModal: false,
};

const modalReducer = (prevState = initialState, action) => {
  let state;
  switch (action.type) {
    case LOG_IN_MODAL_ON:
      state = { ...prevState, isLoginModal: true };
      break;
    case SIGN_UP_MODAL_ON:
      state = { ...prevState, isSignupModal: true };
      break;
    case SKIMMER_INFO_MODAL_ON:
      state = { ...prevState, isSkimmerModal: true };
      break;
    case SEA_BASIC_INFO_MODAL_ON:
      state = { ...prevState, isSeaBasicInfoModal: true };
      break;
    case FILTER_MEDIA_MODAL_ON:
      state = { ...prevState, isFilterMediaModal: true };
      break;
    case MY_AQUARIUM_INFO_MODAL_ON:
      state = { ...prevState, isMyAquariumInfoModal: true };
      break;
    case FEEDING_INPUT_MODAL_ON:
      state = { ...prevState, isFeedingModal: true };
      break;
    case ACTIVATION_MODAL_ON:
      state = { ...prevState, isActivationModal: true };
      break;
    case MODAL_OFF:
      state = { ...initialState };
      break;
    default:
      state = { ...prevState };
  }
  return state;
};

export default modalReducer;
