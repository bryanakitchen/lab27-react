import React, { Component } from 'react';
import AllCharacters from '../characters/AllCharacters';
import Header from '../header/Header';
import GlobalStyle from '../../globalStyles';

export default class Home extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header /> 
        <AllCharacters />
      </>
    );
  }
}
