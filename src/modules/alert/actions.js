import { createAction } from "typesafe-actions";

export const TOGGLE_ALERT = "Alert/TOGGLE_ALERT";
export const SET_MESSAGE = "Alert/SET_MESSAGE";

export const toggleAlert = createAction(TOGGLE_ALERT)();
export const setMessage = createAction(SET_MESSAGE)();
