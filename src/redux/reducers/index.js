import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
//reducer//////
// const initialState = 0;
// const reducer = (state, action) => {
//   return state;
// };
// const useReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
// };
