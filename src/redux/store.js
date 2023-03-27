import { createStore } from "redux";
import reducers from "./reducers/index";
const store = createStore(
  //3 arguments
  //reducer func,state,middleware
  //reducer take state n action and return new state
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
