import React, { Component } from 'react';
import styled from 'styled-components';

const MainHeader = styled.h1`
    color: #EE964B;
    text-align: center;
`;

const Paragraph = styled.p`
    color: #EE964B;
    font-size: 17px;
    text-align: center;
`;


export default class Header extends Component {
  render() {
    return (
      <>
        <MainHeader>Welcome!</MainHeader>
        <Paragraph>Please select a character to learn more.</Paragraph>
      </>
    );
  }
}
