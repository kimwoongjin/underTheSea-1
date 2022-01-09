import {
  LOG_IN,
  LOG_OUT,
  LOG_IN_MODAL_ON,
  SIGN_UP_MODAL_ON,
  SKIMMER_INFO_MODAL_ON,
  SEA_BASIC_INFO_MODAL_ON,
  MY_AQUARIUM_INFO_MODAL_ON,
  FEEDING_INPUT_MODAL_ON,
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
