import { ADD_ALERT } from "../types/alertsTypes";

export const addAlert = (alert) => {
  return ({
    type: ADD_ALERT,
    payload: alert
  });
};