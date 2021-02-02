import React from 'react';

const Character = ({ name, image }) => (
  <>
    <h3>{name}</h3>
    <img src={image} />
  </>
);

export default Character;
