import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharacterUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const CharacterLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid #FAF0CA;
    border-radius: 10px;
    margin: 5px;
    width: 250px;
    height: 250px;
    background: #F4D35E;

    &:hover {
        background: #EE964B;
    }
`;

const DetailPageLink = styled(Link)`
    text-decoration: none;
`;

// eslint-disable-next-line react/prop-types
const CharacterList = ({ characters }) => {
  // eslint-disable-next-line react/prop-types
  const characterElements = characters.map(character => (
    // eslint-disable-next-line react/jsx-key
    <DetailPageLink to={`/detail/${character._id}`}>
      <CharacterLi key={character._id}>
        <Character {...character} />
      </CharacterLi>
    </DetailPageLink>
  ));
    
  return (
    <CharacterUl>
      {characterElements}
    </CharacterUl>
  );
};

export default CharacterList;
