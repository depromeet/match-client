import { createAction } from "typesafe-actions";

export const SELECT_STUDY = "SELECTED/SELECT_STUDY";

export const selectStudy = createAction(SELECT_STUDY)();
