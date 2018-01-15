import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CommentForm from './CommentForm';
import {
  addComment
} from '../../../../actions';

class Comment extends React.Component {
  state = {
    showReply: false,
  }

  showReplyForm = () => {
    this.setState((prevState) => ({showReply: !prevState.showReply}));
  }

  addCommentForm = (content) => {
    const { comment } = this.props;
    const newDate = new Date();
    const newComment = {
      postId: comment.postId,
      parent_id: comment.id,
      user: "New User",
      date: moment(newDate).format("YYYY-MM-DD"),
      content: content,
    }
    this.props.addComment(newComment);
    this.setState({ showReply: false });
  }

  render() {
    const { showReply } = this.state;
    const { comment, isReply, children } = this.props;
    const cssClass = isReply ? ['media', 'mt-4'].join(" ") : ['media', 'mb-4'].join(" ")
    return (
      <div className={cssClass}>
        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
        <div className="media-body">
          <h5 className="mt-0">{comment.user}</h5>
          {comment.content}
          <div>
            <button className="btn btn-link" onClick={this.showReplyForm}>Reply</button>
          </div>
          <div>
            {showReply && <CommentForm addComment={this.addCommentForm} />}
          </div>
          { children && children }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addComment
}

export default connect(null, mapDispatchToProps)(Comment);
