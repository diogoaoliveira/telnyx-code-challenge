import {
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
} from '../actions/types';

import commentReducer from './comment_reducer';

const MOCK_COMMENTS = [{
  id: 10,
  title: "Blog post #10",
  author: "Tandy Thiem",
  publish_date: "2016-11-29",
  slug: "blog-post-10",
  description: "Natum integre tractatos eu duo, ut falli scriptorem qui.",
  content: "<p>Natum integre tractatos eu duo, ut falli scriptorem qui. Probo inermis ad nec, petentium inciderint mei in.</p> <p>Quidam inermis detraxit per ea. Vix etiam eirmod ut, sea dolor appellantur te. Te quis dicit delicata eum, in has convenire interesset.</p>"
}];

describe('Comment Reducer', () => {
  it('should return initial state', () => {
    expect(commentReducer(undefined, {})).toEqual({ commentsData: [] });
  });

  it('should store the comments data', () => {
    expect(commentReducer({ commentsData: [] }, { type: GET_COMMENTS_BY_POST, payload: MOCK_COMMENTS }))
      .toEqual({ commentsData: MOCK_COMMENTS });
  })
});
