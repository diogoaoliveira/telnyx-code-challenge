import React from 'react';
import classNames from 'classnames';
import PostList from './post/PostList';

const Blog = () => (
  <div className='container'>
    <h1>Blog</h1>
    <div className={classNames('row', 'justify-content-center')}>
      <div className='col-md-8'>
        <PostList />
      </div>
    </div>
  </div>
);

export default Blog;
