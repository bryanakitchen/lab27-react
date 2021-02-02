import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';

const URL = 'https://hey-arnold-api.herokuapp.com/api/v1/characters';

export default class DetailPage extends Component {
    state = {
      characterData: ''
    }
    
    componentDidMount = async () => {
      // eslint-disable-next-line max-len
      const character = await fetch(`${URL}/${this.props.match.params.id}`);

      this.setState({ characterData: character.body });
          
    }
    
    render() {
      return (
        <>
          <Link to="/">Return Home</Link>   

          <CharacterList characterData={this.state.characterData} /> 
        </>
      );
    }
}
