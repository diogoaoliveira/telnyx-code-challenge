import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
} from '../actions/types';

export default (state = { commentsData: [] }, action) => {
  switch (action.type) {
    case GET_COMMENTS_BY_POST:
      return { ...state, commentsData: action.payload };
    case ADD_COMMENT:
      return { ...state, commentsData: state.commentsData.concat(action.payload) };
    default:
      return state;
  }
}
