import {
  GET_ALL_POSTS,
} from '../actions';

export default function(state, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return state;

    default:
      return state;
  }
}
