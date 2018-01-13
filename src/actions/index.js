import {
  GET_ALL_POSTS,
  GET_POST_BY_ID,
} from './types';
import * as PostAPI from '../utils/PostsAPI';

export const getAllPosts = () => dispatch => {
  PostAPI.getAll().then(posts => {
    dispatch({ type: GET_ALL_POSTS, payload: posts });
  });
}

export const getPostById = postId => dispatch => {
  PostAPI.getById(postId).then(post => {
    dispatch({ type: GET_POST_BY_ID, payload: post });
  });
}
