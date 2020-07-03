import React from 'react';
import { FiMenu } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container } from '../../styles/styles';
import { Nav, Content, Brand, NavItems, MenuToggleButton } from './styles';

import MenuItems from '../MenuItems';
import SideNav from '../SideNav';

const NavBar = () => {
  function handleDrawerToggle() {
    console.log('teste');
  }

  return (
    <Nav>
      <Container>
        <Content>
          <Brand>
            <img src={logo} alt="logo" />
          </Brand>
          <NavItems>
            <MenuItems />
            <MenuToggleButton onClick={handleDrawerToggle}>
              <FiMenu color="black" size={20} />
            </MenuToggleButton>
          </NavItems>
        </Content>
      </Container>
    </Nav>
  );
};

export default NavBar;
