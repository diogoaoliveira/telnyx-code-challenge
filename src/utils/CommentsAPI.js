const apiURL = 'http://localhost:9001';
const headers = {
  'Accept': 'application/json',
};

export const getByPost = (postId) =>
  fetch(`${apiURL}/comments?postId=${postId}`)
    .then(res => res.json())
    .then(comments => comments)

export const add = (comment) =>
  fetch(`${apiURL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(comment => comment)
