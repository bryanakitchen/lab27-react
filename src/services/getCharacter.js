export const getCharacter = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
};
