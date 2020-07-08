import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { ContainerFluid, Row } from '../../styles/styles';
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
        <ContainerFluid>
          <Row justifyContentCenter>
            <Content>
              <Brand>ThemeSwitcher</Brand>
              <NavItems>
                <MenuItems />
                <MenuToggleButton onClick={handleDrawerToggle}>
                  <FiMenu color="black" size={30} />
                </MenuToggleButton>
              </NavItems>
            </Content>
          </Row>
        </ContainerFluid>
      </Nav>
      <SideNav sideNavOpen={sideNavOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default NavBar;
