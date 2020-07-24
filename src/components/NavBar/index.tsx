import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

import { ContainerFluid, Row } from '../../styles/styles';
import { Nav, Content, Brand, NavItems, MenuToggleButton } from './styles';

import MenuItems from '../MenuItems';
import SideNav from '../SideNav';

const NavBar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleDrawerToggle() {
    setSideNavOpen(!sideNavOpen);
  }

  return (
    <>
      <Nav isScrolled={scrolled}>
        <ContainerFluid>
          <Row justifyContentCenter>
            <Content>
              <Brand>ThemeSwitcher</Brand>
              <NavItems>
                <MenuItems isSideNavOpen={sideNavOpen} />
                <MenuToggleButton onClick={handleDrawerToggle}>
                  <FiMenu size={30} />
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
