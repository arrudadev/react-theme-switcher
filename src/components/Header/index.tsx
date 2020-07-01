import React from 'react';

import logo from '../../assets/logo.png';
import { Container } from '../../styles/styles';
import {
  NavBar,
  NavBarContent,
  NavBarBrand,
  NavBarList,
  NavBarListItem,
} from './styles';

const Header = () => {
  return (
    <NavBar>
      <Container>
        <NavBarContent>
          <NavBarBrand>
            <img src={logo} alt="teste" />
          </NavBarBrand>
          <NavBarList>
            <NavBarListItem>Item 1</NavBarListItem>
            <NavBarListItem>Item 1</NavBarListItem>
          </NavBarList>
        </NavBarContent>
      </Container>
    </NavBar>
  );
};

export default Header;
