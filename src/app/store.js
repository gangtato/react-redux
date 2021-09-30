import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './features/counter/reducer'


let rootReducers = combineReducers({
    counter: counterReducer
})


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnchancers(applyMiddleware(thunk)));

export default store;