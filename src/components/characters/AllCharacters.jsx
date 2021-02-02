import React, { Component } from 'react';
import { getAllCharacters } from '../../services/getAllCharacters';
import CharacterList from './CharacterList';

export default class AllCharacters extends Component {
    state = {
      characters: []
    }

    componentDidMount() {
      getAllCharacters()
        .then(characters => this.setState({ characters }));
    }
    
    render() {
      const { characters } = this.state;
        
      return (
        <CharacterList characters={characters} />
      );
    }
}
