import React from 'react';
import Comment from './Comment';
import Reply from './Reply';

class CommentList extends React.Component {
  renderComment(parentComment) {
    const replies = this.props.comments.filter(comment => comment.parent_id === parentComment.id)
    return (
      <Comment key={parentComment.id} comment={parentComment}>
        {replies.map(childComment => (
          // <Comment isReply key={childComment.id} comment={childComment}>
          //   {this.renderComment(childComment)}
          // </Comment>
          <Reply reply={childComment}>
            {this.renderReplies(childComment)}
          </Reply>
        ))}
      </Comment>
    );
  }

  renderReplies(reply) {
    const childReplies = this.props.comments.filter(comment => comment.parent_id === reply.id);
    if (childReplies.length === 0)
     return null;
    return (
      childReplies.map((reply, index) => (
        <Reply reply={reply}>
          {this.renderReplies(reply)}
        </Reply>
      ))
    )
  }

  render() {
    const parentComments = this.props.comments.filter(comment => comment.parent_id === null);
    return (
      parentComments.map((comment, index) => this.renderComment(comment))
    );
  }
}

export default CommentList;
