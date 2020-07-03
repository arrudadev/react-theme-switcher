import React from 'react';

import { MenuList, MenuListItem } from './styles';

const MenuItems = () => {
  return (
    <MenuList>
      <MenuListItem>
        <a href="#">Item 1</a>
      </MenuListItem>
      <MenuListItem>
        <a href="#">Item 2</a>
      </MenuListItem>
      <MenuListItem>
        <a href="#">Item 3</a>
      </MenuListItem>
    </MenuList>
  );
};

export default MenuItems;
