import { createReducer } from "typesafe-actions";
import { FETCH_ATTENDENT } from "./actions";
import { ReactComponent as yumProfile } from "assets/images/yumProfile.svg";

const initialState = [
  {
    id: 1,
    profileImg: yumProfile,
    username: "Yumi Jung",
  },
  {
    id: 2,
    profileImg: yumProfile,
    username: "Yumi Jung",
  },
  {
    id: 3,
    profileImg: yumProfile,
    username: "Yumi Jung",
  },
  {
    id: 4,
    profileImg: yumProfile,
    username: "Yumi Jung",
  },
];

const attendent = createReducer(initialState, {
  [FETCH_ATTENDENT]: (state, { payload }) => payload,
});

export default attendent;
