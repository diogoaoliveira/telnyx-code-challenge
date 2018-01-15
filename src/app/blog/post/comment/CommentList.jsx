import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  renderComment(parentComment) {
    const replies = this.props.comments.filter(comment => comment.parent_id === parentComment.id);
    if (replies.length === 0)
      return (
        <Comment key={parentComment.id} comment={parentComment} />
      );
    return (
      <Comment key={parentComment.id} isReply comment={parentComment}>
        {replies.map(childComment => (
            this.renderComment(childComment)
        ))}
      </Comment>
    );
  }

  render() {
    const parentComments = this.props.comments.filter(comment => comment.parent_id === null);
    return (
      parentComments.map((comment, index) => this.renderComment(comment))
    );
  }
}

export default CommentList;
