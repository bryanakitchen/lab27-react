import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
    const characterElements = characters.map(character => (
        <Link to={`/detail/${character._id}`}>
            <li key={character._id}>
                <Character {...character} />
            </li>
        </Link>
    ))
    
    return (
        <ul>
            {characterElements}
        </ul>
    )
}

export default CharacterList;