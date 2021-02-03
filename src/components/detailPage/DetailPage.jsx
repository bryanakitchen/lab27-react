import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacter } from '../../services/getCharacter';
import Character from '../characters/Character';
// import PropTypes from 'prop-types';

export default class DetailPage extends Component {
    state = {
      characterData: {}
    }
    
    componentDidMount() {
      getCharacter(this.props.match.params.id)
        .then(characterData => this.setState({ characterData }));
    }
    
    render() {
      const { characterData } = this.state;

      return (
        <>
          <Link to="/">Return Home</Link>   

          <Character name={characterData.name} image={characterData.image} /> 
        </>
      );
    }
}

// Character.propTypes = {
//     name: PropTypes.string.isRequired
//   };