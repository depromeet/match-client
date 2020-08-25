import { createAction } from "typesafe-actions";

export const FETCH_ATTENDENT = "ATTENDENT/FETCH_ATTENDENT";

export const fetchAttendent = createAction(FETCH_ATTENDENT)();
