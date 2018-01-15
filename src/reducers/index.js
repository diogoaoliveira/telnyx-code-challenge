import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post_reducer';
import commentReducer from './comment_reducer';

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
