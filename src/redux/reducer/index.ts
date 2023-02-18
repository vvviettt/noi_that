import { homeReducer } from "./homeReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  product: productReducer,
  home: homeReducer,
});

export default reducers;
