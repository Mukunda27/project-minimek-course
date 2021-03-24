import { combineReducers } from "redux";
import tabsReducer from "features/tab/tabsReducer";

const rootReducer = combineReducers({
  tabs: tabsReducer,
});

export default rootReducer;
