import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";

import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const middlewareEnhancers = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancers];
  const composeEnhancers = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  return store;
}
