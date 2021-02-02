import React, { Component } from 'react';
import CharacterList from '../characterList/CharacterList';
import Header from '../header/Header';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header /> 
        <CharacterList />
      </>
    );
  }
}
