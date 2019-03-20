import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import rootReducer from "./reducers";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware(saga);
const historyMiddleware = routerMiddleware(createBrowserHistory());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(historyMiddleware,sagaMiddleware))
);
sagaMiddleware.run(saga);