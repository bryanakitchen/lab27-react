import React, { Component } from 'react';
import styled from 'styled-components';

const MainHeader = styled.h1`
    color: #B5838D;
    text-align: center;
`;

const Paragraph = styled.p`
    color: #B5838D;
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
