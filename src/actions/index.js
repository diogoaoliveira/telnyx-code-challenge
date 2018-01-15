import {
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  GET_COMMENTS_BY_POST,
  ADD_COMMENT,
} from './types';
import * as PostsAPI from '../utils/PostsAPI';
import * as CommentsAPI from '../utils/CommentsAPI';

export const getAllPosts = () => dispatch => {
  PostsAPI.getAll().then(posts => {
    dispatch({ type: GET_ALL_POSTS, payload: posts });
  });
}

export const getPostById = postId => dispatch => {
  PostsAPI.getById(postId).then(post => {
    dispatch({ type: GET_POST_BY_ID, payload: post });

    CommentsAPI.getByPost(postId).then(comments => {
      dispatch({ type: GET_COMMENTS_BY_POST, payload: comments });
    });
  });
}

export const getCommentsByPost = postId => dispatch => {
  CommentsAPI.getByPost(postId).then(comments => {
    dispatch({ type: GET_COMMENTS_BY_POST, payload: comments });
  });
}

export const addComment = comment => dispatch => {
  CommentsAPI.add(comment).then(newComment => {
    dispatch({ type: ADD_COMMENT, payload: newComment});
  });
}
