import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger({
    collapsed: true,
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        logger
    ),
);

export default store;