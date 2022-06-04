import { ADD_ALERT } from "../types/alertsTypes";

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
    default:
      break;
  }
};

export default alertsReducers;