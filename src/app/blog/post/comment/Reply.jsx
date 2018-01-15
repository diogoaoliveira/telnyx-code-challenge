import React from 'react';

const Reply = ({ reply, children }) => (
  <div className="media mt-4">
    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
    <div className="media-body">
      <h5 className="mt-0">{reply.user}</h5>
      {reply.content}
      {children}
    </div>
  </div>
);

export default Reply;
