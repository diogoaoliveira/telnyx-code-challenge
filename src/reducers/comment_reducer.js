import {
  GET_COMMENTS_BY_POST
} from '../actions/types';

export default (state = { commentsData: [] }, action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_POST:
      return { ...state, commentsData: action.payload };
    default:
      return state;
  }
}
