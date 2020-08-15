import { createReducer } from "typesafe-actions";
import { MOVE_MAP, UPDATE_MAP } from "./actions";

const initialState = {
	width: window.screen.width * 0.75,
	height: window.screen.height,
	latitude: 37.5326,
	longitude: 127.024612,
	zoom: 10,
};

const basket = createReducer(initialState, {
	[MOVE_MAP]: (state, { payload }) => ({ ...state, ...payload }),
	[UPDATE_MAP]: (state, { payload }) => ({ ...state, ...payload }),
});

export default basket;
