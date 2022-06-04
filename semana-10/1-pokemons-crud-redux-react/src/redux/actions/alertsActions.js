import { ADD_ALERT, RESET_ALERT } from "../types/alertsTypes";

const addAlert = (alert) => {
  return ({
    type: ADD_ALERT,
    payload: alert
  });
};

const resetAlert = (alert) => {
  return ({
    type: RESET_ALERT,
    payload: alert
  });
};

export const showAlert = (alert) => {
  return ((dispatch) => {
    dispatch(addAlert(alert));
    setTimeout(() => {
      dispatch(resetAlert({}));
    }, 5000);
  });
};