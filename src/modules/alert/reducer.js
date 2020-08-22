import { createReducer } from "typesafe-actions";
import { TOGGLE_ALERT, SET_MESSAGE } from "./actions";

const initialState = {
  showAlert: false,
  alertMessage: "아쉽지만 종료된 스터디에요",
};

const map = createReducer(initialState, {
  [TOGGLE_ALERT]: (state, { payload }) => ({
    ...state,
    showAlert: !state.showAlert,
  }),
  [SET_MESSAGE]: (state, { payload }) => ({
    ...state,
    alertMessage: payload.message,
  }),
});

export default map;
