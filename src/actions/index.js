import {
  GET_ALL_POSTS
} from './types';
import * as PostAPI from '../utils/PostsAPI';

export const getAllPosts = () => dispatch => {
  PostAPI.getAll().then((posts) => {
    console.log(posts);
    dispatch({ type: GET_ALL_POSTS });
  });
}
