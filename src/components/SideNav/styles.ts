import styled from 'styled-components';

interface SideNavProps {
  isOpen: boolean;
}

export const ModalOverlay = styled.div<SideNavProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.theme.colors.sideNav.modalOverlayBackground};
  display: none;
  opacity: 0.6;

  @media (max-width: 1380px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

export const Drawer = styled.div<SideNavProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  bottom: 0;
  width: 260px;
  border: none;
  background-color: ${props => props.theme.colors.sideNav.drawerBackground};
  z-index: 100001;
  display: none;
  overflow-y: auto;

  @media (max-width: 1380px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
`;

export const DrawerContainer = styled.div`
  margin: 20px 10px;
  margin-top: 0px;

  ul {
    display: flex;
    flex-direction: column;
    margin: 25px 10px;

    li {
      &:first-child {
        margin-top: 15px;
      }

      padding: 16px;
      border-bottom: 1px solid
        ${props => props.theme.colors.sideNav.menuItemBorderBottom};

      a {
        color: ${props => props.theme.colors.sideNav.menuItem};
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 9px;
  right: 8px;
  color: ${props => props.theme.colors.sideNav.closeButton};
  padding: 12px;
  background-color: transparent;
  border: none;
`;
