import {
  GET_ALL_POSTS,
  GET_POST_BY_ID
} from '../actions/types';

export default (state = { postsData: [], singlePost: {} }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, postsData: action.payload };
    case GET_POST_BY_ID:
      return { ...state, singlePost: action.payload };
    default:
      return state;
  }
}
