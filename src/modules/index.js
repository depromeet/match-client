import { combineReducers } from "redux";
import map from "./map";
import study from "./study";
import selected from "./selected";
import category from "./category";
import alert from "./alert";
import attendent from "./attendent";

const rootReducer = combineReducers({
  map,
  study,
  selected,
  category,
  alert,
  attendent,
});

export default rootReducer;
