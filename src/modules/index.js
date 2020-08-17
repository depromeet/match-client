import { combineReducers } from "redux";
import map from "./map";
import study from "./study";
import selected from "./selected";
import category from "./category";

const rootReducer = combineReducers({
	map,
	study,
	selected,
	category,
});

export default rootReducer;
