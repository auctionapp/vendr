import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import fetchItems from './reducers/fetchItems.js';
import messengerReducer from './reducers/messenger.js';
import initialState from './initialState.js';
import itemReducer from './reducers/itemReducer.js';
var reducers = combineReducers({
  messages: messengerReducer,
  form: formReducer,
  items : fetchItems,
  selectedItem : itemReducer
});

module.exports = createStore(reducers, initialState(), applyMiddleware(Thunk));
