import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
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
