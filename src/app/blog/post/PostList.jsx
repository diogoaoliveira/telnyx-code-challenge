import React from  'react';
import Post from './Post';

const PostList = (props) => (
  props.posts.map((post, index) => <Post key={index} />)
);

export default PostList;
