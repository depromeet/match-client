import { createAction } from "typesafe-actions";

export const FETCH_CATEGORY = "CATEGORY/FETCH_CATEGORY";

export const fetchCategory = createAction(FETCH_CATEGORY)();
