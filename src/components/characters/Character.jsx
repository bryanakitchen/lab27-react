import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharacterH3 = styled.h3`
    color: #0D3B66;
`;

const CharacterImage = styled.img`
    height: 65%;
    margin-bottom: 5px;
`;


const Character = ({ name, image }) => (
  <>
    <CharacterH3>{name}</CharacterH3>
    <CharacterImage src={image} />
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
