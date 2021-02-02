import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, name, image }) => (
  <>
      <h3>{name}</h3>
      <img src={image} />
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
