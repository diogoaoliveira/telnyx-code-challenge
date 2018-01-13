import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className='card mb-4'>
        <img className='card-img-top' src='http://placehold.it/750x300' alt={post.title} />
        <div className='card-body'>
          <h2 className='card-title'>{post.title}</h2>
          <p className='card-text'>{post.description}</p>
          <Link to={`/blog/${post.slug}`} className='btn btn-primary'>Read More &rarr;</Link>
        </div>
        <div className='card-footer text-muted'>
          Posted on {moment(post.publish_date).format('MMM Do YYYY')} by
          <a href='/blog'> {post.author}</a>
        </div>
      </div>
    );
  }
}

export default Post;
