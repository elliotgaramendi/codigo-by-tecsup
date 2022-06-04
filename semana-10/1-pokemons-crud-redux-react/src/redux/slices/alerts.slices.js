import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {}
};

const alertsSlices = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert(state, action) {
      return {
        ...state,
        alert: action.payload
      };
    },
    resetAlert(state, action) {
      return {
        ...state,
        alert: action.payload
      };
    }
  }
});

const {
  addAlert,
  resetAlert
} = alertsSlices.actions;

export const showAlert = (alert) => {
  return ((dispatch) => {
    dispatch(addAlert(alert));
    setTimeout(() => {
      dispatch(resetAlert({}));
    }, 5000);
  });
};

export default alertsSlices.reducer;