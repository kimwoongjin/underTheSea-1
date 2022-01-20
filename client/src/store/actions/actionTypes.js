import axios from "axios";

// Auth
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

// export const UPDATE_INFO = "UPDATE_INFO";

// Modal
export const LOG_IN_MODAL_ON = "LOG_IN_MODAL_ON";
export const SIGN_UP_MODAL_ON = "SIGN_UP_MODAL_ON";
export const SIGN_OUT_MODAL_ON = "SIGN_OUT_MODAL_ON";
export const SKIMMER_INFO_MODAL_ON = "SKIMMER_INFO_MODAL_ON";
export const SEA_BASIC_INFO_MODAL_ON = "SEA_BASIC_INFO_MODAL_ON";
export const FILTER_MEDIA_MODAL_ON = "FILTER_MEDIA_MODAL_ON";
export const ACTIVATION_MODAL_ON = "ACTIVATION_MODAL_ON";
export const MY_AQUARIUM_INFO_MODAL_ON = "MY_AQUARIUM_INFO_MODAL_ON";
export const FEEDING_INPUT_MODAL_ON = "FEEDING_INPUT_MODAL_ON";
export const ADDFISH_MODAL_ON = "ADDFISH_MODAL_ON";
export const DEADFISH_MODAL_ON = "DEADFISH_MODAL_ON";
export const RECOMMENDINFO_MODAL_ON = "RECOMMENDINFO_MODAL_ON";
export const EXCHANGEWATER_MODAL_ON = "EXCHANGEWATER_MODAL_ON";
export const WSDINFO_MODAL_ON = "WSDINFO_MODAL_ON";
export const ADD_CONTAINER_MODAL_ON = "ADD_CONTAINER_MODAL_ON";
export const HELP_MODAL_ON = "HELP_MODAL_ON";
export const LOG_OUT_MODAL_ON = "LOG_OUT_MODAL_ON";
export const MODAL_OFF = "MODAL_OFF";
export const PWD_MODAL_ON = "PWD_MODAL_ON";

// ManageCard
export const CONTAINER_CARD_INFO_SHOW = "CONTAINER_CARD_INFO_SHOW";

// ManageDetail
export const GET_CONTAINER_INFO = "GET_CONTAINER_INFO";

// export const getConData = async () => {
//   const condata = await axios.get(
//     `http://localhost:80/container/${container_id}/${month}`,
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     },
//     {
//       withCredentials: true,
//     }
//   );
//   return {
//     type: "GET_CON_INFO",
//     payload: condata.data,
//   };
// };
