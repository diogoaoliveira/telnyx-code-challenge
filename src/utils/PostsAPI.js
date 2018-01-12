const apiURL = 'http://localhost:9001';

export const getAll = () =>
  fetch(`${apiURL}/posts`)
    .then(res => res.json())
    .then(posts => posts)
