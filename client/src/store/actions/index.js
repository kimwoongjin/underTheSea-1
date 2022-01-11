import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  LOG_IN_MODAL_ON,
  SIGN_UP_MODAL_ON,
  SKIMMER_INFO_MODAL_ON,
  SEA_BASIC_INFO_MODAL_ON,
  FILTER_MEDIA_MODAL_ON,
  ACTIVATION_MODAL_ON,
  MY_AQUARIUM_INFO_MODAL_ON,
  FEEDING_INPUT_MODAL_ON,
  ADDFISH_MODAL_ON,
  DEADFISH_MODAL_ON,
  RECOMMENDINFO_MODAL_ON,
  MODAL_OFF,
} from "./actionTypes";

export const loginAction = (data) => ({
  type: LOG_IN,
  payload: { ...data },
});
export const logoutAction = {
  type: LOG_OUT,
};
export const loginModalOnAction = {
  type: LOG_IN_MODAL_ON,
};
export const signupModalOnAction = {
  type: SIGN_UP_MODAL_ON,
};
export const modalOff = {
  type: MODAL_OFF,
};
export const skimmerInfoModalOnAction = {
  type: SKIMMER_INFO_MODAL_ON,
};
export const seaBasicInfoModalOnAction = {
  type: SEA_BASIC_INFO_MODAL_ON,
};
export const filterMediaModalOnAction = {
  type: FILTER_MEDIA_MODAL_ON,
};
export const activationModalOnAction = {
  type: ACTIVATION_MODAL_ON,
};
export const myAquariumInfoModalOnAction = {
  type: MY_AQUARIUM_INFO_MODAL_ON,
};
export const feedingInputModalOnAction = {
  type: FEEDING_INPUT_MODAL_ON,
};
export const recommendInfoModalOnAction = {
  type: RECOMMENDINFO_MODAL_ON,
};
export const signupAction = {
  type: SIGN_UP,
};
export const addfishModalOnAction = {
  type: ADDFISH_MODAL_ON,
};
export const deadfishModalOnAction = {
  type: DEADFISH_MODAL_ON,
};
