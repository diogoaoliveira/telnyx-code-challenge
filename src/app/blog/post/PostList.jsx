import React from  'react';
import Post from './Post';

const PostList = (props) => (
  props.posts.map((post, index) => <Post key={index} post={post} />)
);

export default PostList;
