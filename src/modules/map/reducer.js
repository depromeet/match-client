import { createReducer } from "typesafe-actions";
import { MOVE_MAP, UPDATE_MAP } from "./actions";

const initialState = {
  // width: window.screen.width - 560,
  // height: window.screen.height,
  width: window.innerWidth - 560,
  height: window.innerHeight + 100,
  latitude: 37.581305,
  longitude: 126.972694,
  zoom: 12,
};

const map = createReducer(initialState, {
  [MOVE_MAP]: (state, { payload }) => ({ ...state, ...payload }),
  [UPDATE_MAP]: (state, { payload }) => ({ ...state, ...payload }),
});

export default map;
