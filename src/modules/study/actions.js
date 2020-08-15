import { createAction } from "typesafe-actions";

export const FETCH_STUDY = "STUDY/FETCH_STUDY";

export const fetchStudy = createAction(FETCH_STUDY)();
