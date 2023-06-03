import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  bookmark: bookmarkReducer
});

const store = configureStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
