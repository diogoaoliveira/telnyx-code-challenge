import React from 'react';

class CommentForm extends React.Component {
  clearForm(event) {
    event.target.comment.value = '';
  }
  submitComment = (e) => {
    e.preventDefault();
    this.props.addComment(e.target.comment.value);
    this.clearForm(e);
  }
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          <form onSubmit={this.submitComment}>
            <div className="form-group">
              <textarea name="comment" className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
