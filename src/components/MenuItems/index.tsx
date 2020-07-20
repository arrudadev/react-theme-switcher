import React from 'react';
import { Link } from 'react-scroll';

import { MenuList, MenuListItem } from './styles';

const MenuItems = () => {
  return (
    <MenuList>
      <MenuListItem>
        <Link to="about" spy smooth duration={500}>
          About
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="services" spy smooth duration={500}>
          Services
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="features" spy smooth duration={500}>
          Features
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="technologies" spy smooth duration={500}>
          Technologies
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="team" spy smooth duration={500}>
          Team
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="pricing" spy smooth duration={500}>
          Pricing
        </Link>
      </MenuListItem>
      <MenuListItem>
        <Link to="contact" spy smooth duration={500}>
          Contact
        </Link>
      </MenuListItem>
    </MenuList>
  );
};

export default MenuItems;
