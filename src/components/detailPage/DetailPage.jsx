import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacter } from '../../services/getCharacter';
import Character from '../characters/Character';
import styled from 'styled-components';
import GlobalStyle from '../../globalStyles';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #0D3B66;
    background: #F4D35E;
    padding: 4px;
    border-radius: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Para = styled.p`
    color: #0D3B66;
`;

const StyledDiv = styled.div`
    background: #F4D35E;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #FAF0CA;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
`;

export default class DetailPage extends Component {
    state = {
      characterData: {}
    }
    
    componentDidMount() {
      // eslint-disable-next-line react/prop-types
      getCharacter(this.props.match.params.id)
        .then(characterData => this.setState({ characterData }));
    }

    render() {
      const { characterData } = this.state;

      return (
        <>
          <GlobalStyle />
          <StyledLink to="/">Return Home</StyledLink>
          <StyledDiv>
            <Character {...characterData} /> 
            <Para><em>Ok, so there are no more details to provide.</em></Para>
          </StyledDiv>
        </>
      );
    }
}
