import React from 'react';
import { FiX } from 'react-icons/fi';

import { ModalOverlay, Drawer, DrawerContainer, CloseButton } from './styles';

import MenuItems from '../MenuItems';

interface SideNavProps {
  sideNavOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ sideNavOpen, onClose }) => {
  return (
    <>
      <ModalOverlay isOpen={sideNavOpen} />
      <Drawer isOpen={sideNavOpen}>
        <DrawerContainer>
          <CloseButton onClick={onClose}>
            <FiX size={30} />
          </CloseButton>
          <MenuItems />
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SideNav;
