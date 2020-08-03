import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(() => {},
composeWithDevTools(applyMiddleware(ReduxThunk)));
