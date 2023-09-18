// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer'; // Your product reducer

const rootReducer = combineReducers({
  product: productReducer,
  // Add other reducers if you have them
});

export default rootReducer;
