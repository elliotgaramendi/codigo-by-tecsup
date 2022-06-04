import { ADD_ALERT, RESET_ALERT } from "../types/alertsTypes";

export const addAlert = (alert) => {
  return ({
    type: ADD_ALERT,
    payload: alert
  });
};

export const resetAlert = (alert) => {
  return ({
    type: RESET_ALERT,
    payload: alert
  });
};