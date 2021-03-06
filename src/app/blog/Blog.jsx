import React from 'react';
import { connect } from 'react-redux';
import PostList from './post/PostList';
import {
  getAllPosts
} from '../../actions';
import {
  sortByNewestDate,
} from '../../utils/helpers';

class Blog extends React.Component {
  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div className='container'>
        <h1>Blog</h1>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <PostList posts={this.props.posts}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return {
    posts: post.postsData.sort(sortByNewestDate)
  }
}

const mapDispatchToProps = {
  getAllPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
