// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Your combined reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
