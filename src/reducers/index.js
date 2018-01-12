import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post_reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
