import { combineReducers } from "redux";
import { orderReducer } from "../order/reducer";
import { toLog } from "../toLog/reducer";

export default combineReducers({
  orderReducer,
  toLog
});
