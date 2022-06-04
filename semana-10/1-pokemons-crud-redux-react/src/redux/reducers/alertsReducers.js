import { ADD_ALERT, RESET_ALERT } from "../types/alertsTypes";

const initialState = {
  alert: {}
};

const alertsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case RESET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};

export default alertsReducers;