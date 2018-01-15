const apiURL = 'http://localhost:9001';

export const getByPost = (postId) =>
  fetch(`${apiURL}/comments?postId=${postId}`)
    .then(res => res.json())
    .then(comments => comments)
