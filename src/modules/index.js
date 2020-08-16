import { combineReducers } from "redux";
import map from "./map";
import study from "./study";
import selected from "./selected";

const rootReducer = combineReducers({
	map,
	study,
	selected,
});

export default rootReducer;
