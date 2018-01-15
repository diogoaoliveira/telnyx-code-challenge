import React from 'react';
import CommentForm from './CommentForm';

class Comment extends React.Component {
  state = {
    showReply: false,
  }
  showReplyForm = () => {
    this.setState((prevState) => ({showReply: !prevState.showReply}));
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
            {showReply && <CommentForm />}
          </div>
          { children && children }
        </div>
      </div>
    );
  }
}

export default Comment;
