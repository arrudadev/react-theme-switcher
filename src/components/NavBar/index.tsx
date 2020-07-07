import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container } from '../../styles/styles';
import { Nav, Content, Brand, NavItems, MenuToggleButton } from './styles';

import MenuItems from '../MenuItems';
import SideNav from '../SideNav';

const NavBar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  function handleDrawerToggle() {
    setSideNavOpen(!sideNavOpen);
  }

  return (
    <>
      <Nav>
        <Container>
          <Content>
            <Brand>ThemeSwitcher</Brand>
            <NavItems>
              <MenuItems />
              <MenuToggleButton onClick={handleDrawerToggle}>
                <FiMenu color="black" size={30} />
              </MenuToggleButton>
            </NavItems>
          </Content>
        </Container>
      </Nav>
      <SideNav sideNavOpen={sideNavOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default NavBar;
