import {
  applyMiddleware, createStore, compose, combineReducers,
} from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const getRootStore = (routerReducer, routerMiddleware) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger({
      predicate: () => ({ logger: console, diff: true }),
    });

    middleware = [...middleware, loggerMiddleware];
  }

  return createStore(
    combineReducers({
      ...reducer,
      router: routerReducer,
    }),
    composeEnhancers(applyMiddleware(...middleware, routerMiddleware)),
  );
};

export default getRootStore;
