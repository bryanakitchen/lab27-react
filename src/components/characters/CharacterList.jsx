import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CharacterUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const CharacterLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px;
    width: 250px;
    height: 250px;
    background: #FFCDB2;
`;

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <Link to={`/detail/${character._id}`}>
        <CharacterLi key={character._id}>
            <Character {...character} />
        </CharacterLi>
    </Link>
  ));
    
  return (
    <CharacterUl>
      {characterElements}
    </CharacterUl>
  );
};

export default CharacterList;
