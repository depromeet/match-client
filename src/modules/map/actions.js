import { createAction } from "typesafe-actions";

export const MOVE_MAP = "MAP/MOVE_MAP";
export const ADD_MAP = "MAP/ADD_MAP";
export const UPDATE_MAP = "MAP/UPDATE_MAP";
export const REMOVE_MAP = "MAP/REMOVE_MAP";

export const moveMap = createAction(MOVE_MAP)();
export const addMap = createAction(ADD_MAP)();
export const updateMap = createAction(UPDATE_MAP)();
export const removeMap = createAction(REMOVE_MAP)();
