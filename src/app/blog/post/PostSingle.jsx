import React from 'react';
import { connect } from 'react-redux';
import {
  CommentForm,
  CommentList,
} from './comment';
import {
  getPostById,
  getCommentsByPost,
  addComment,
} from '../../../actions';
import moment from 'moment';

class PostSingle extends React.Component {
  componentDidMount() {
    this.props.getPostById(this.props.match.params.postId);
  }

  addCommentForm = (content) => {
    const { post } = this.props;
    const newDate = new Date();
    const newComment = {
      postId: post.id,
      parent_id: null,
      user: "New User",
      date: moment(newDate).format("YYYY-MM-DD"),
      content: content,
    }
    this.props.addComment(newComment);

  }

  render() {
    const { post } = this.props;
    return (
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="mt-4">{post.title}</h1>
              <p className="lead">
                by
                <a href="/blog"> {post.author}</a>
              </p>
              <hr />
              <p>Posted on {moment(post.publish_date).format('MMM Do YYYY')}</p>
              <hr />
              <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
              <hr />
              <div dangerouslySetInnerHTML={{ __html: post.content }}/>
              <hr />
              <CommentForm addComment={this.addCommentForm} />
              <CommentList comments={this.props.comments} />
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ post, comment }) => {
  return {
    post: post.singlePost,
    comments: comment.commentsData,
  }
}

const mapDispatchToProps = {
  getPostById,
  getCommentsByPost,
  addComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle);
