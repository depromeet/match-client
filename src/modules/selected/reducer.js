import { createReducer } from "typesafe-actions";
import { SELECT_STUDY } from "./actions";

const initialState = null;

const selected = createReducer(initialState, {
	[SELECT_STUDY]: (state, { payload }) => payload,
});

export default selected;
