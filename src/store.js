import { legacy_createStore as createStore } from "redux";
import { applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import allReducer from "./reducers/allReducers";

const myStore = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

export default myStore;