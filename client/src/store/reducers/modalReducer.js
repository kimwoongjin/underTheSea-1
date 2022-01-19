import {
  LOG_IN_MODAL_ON,
  SIGN_UP_MODAL_ON,
  SKIMMER_INFO_MODAL_ON,
  SEA_BASIC_INFO_MODAL_ON,
  MY_AQUARIUM_INFO_MODAL_ON,
  FILTER_MEDIA_MODAL_ON,
  ACTIVATION_MODAL_ON,
  FEEDING_INPUT_MODAL_ON,
  ADDFISH_MODAL_ON,
  DEADFISH_MODAL_ON,
  RECOMMENDINFO_MODAL_ON,
  WSDINFO_MODAL_ON,
  MODAL_OFF,
  SIGN_OUT_MODAL_ON,
  PWD_MODAL_ON,
  EXCHANGEWATER_MODAL_ON,
  HELP_MODAL_ON,
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
  isExchangeModal: false,
  isAddfishModal: false,
  isDeadfishModal: false,
  isRecommendModal: false,
  isWSDInfoModal: false,
  isSignoutModal: false,
  isPwdModal: false,
  isHelpModal: false,
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
    case SIGN_OUT_MODAL_ON:
      state = { ...prevState, isSignoutModal: true };
      break;
    case PWD_MODAL_ON:
      state = { ...prevState, isPwdModal: true };
    case ACTIVATION_MODAL_ON:
      state = { ...prevState, isActivationModal: true };
      break;
    case ADDFISH_MODAL_ON:
      state = { ...prevState, isAddfishModal: true };
      break;
    case DEADFISH_MODAL_ON:
      state = { ...prevState, isDeadfishModal: true };
      break;
    case RECOMMENDINFO_MODAL_ON:
      state = { ...prevState, isRecommendModal: true };
      break;
    case EXCHANGEWATER_MODAL_ON:
      state = { ...prevState, isExchangeModal: true };
      break;
    case WSDINFO_MODAL_ON:
      state = { ...prevState, isWSDInfoModal: true };
      break;
    case HELP_MODAL_ON:
      state = { ...prevState, isHelpModal: true };
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
