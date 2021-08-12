import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { cardReducer } from './reducers/cardReducer';

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    combineReducers({
        UserReducer: userReducer,
        CardReducer: cardReducer,
    }),

    composeEnhancer(applyMiddleware(thunk))
);

export default store;
