const apiURL = 'http://localhost:9001/';

export const getAll = () =>
  fetch(`${api}/posts`)
    .then(res => res.json())
    .then(posts => posts)
