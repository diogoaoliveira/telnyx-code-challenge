import React from 'react';
import { connect } from 'react-redux';
import {
  CommentForm,
  CommentList,
} from './comment';
import {
  getPostById
} from '../../../actions';
import moment from 'moment';

class PostSingle extends React.Component {
  componentDidMount() {
    this.props.getPostById(this.props.match.params.postId);
  }
  render() {
    console.log(this.props);
    const { post } = this.props;
    return (
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="mt-4">{post.title}</h1>
              <p className="lead">
                by
                <a href="#"> {post.author}</a>
              </p>
              <hr />
              <p>Posted on {moment(post.publish_date).format('MMM Do YYYY')}</p>
              <hr />
              <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
              <hr />
              <div dangerouslySetInnerHTML={{ __html: post.content }}/>
              <hr />
              <CommentForm />
              <CommentList />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.singlePost
  }
}

const mapDispatchToProps = {
  getPostById
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle);
