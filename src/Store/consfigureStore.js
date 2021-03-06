import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "../Reducers/userReducers";
const configureStore = () => {
  
  const store = createStore(
    combineReducers({
      user: userReducers
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;