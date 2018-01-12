import {
  GET_ALL_POSTS,
} from '../actions/types';

export default (state = { postsData: [] }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, postsData: action.payload };
    default:
      return state;
  }
}
