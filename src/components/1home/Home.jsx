import React, { Component } from 'react';
import AllCharacters from '../characters/AllCharacters';
import Header from '../header/Header';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header /> 
        <AllCharacters />
      </>
    );
  }
}
