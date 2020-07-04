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
  background-color: #000;
  display: none;
  opacity: 0.6;

  @media (max-width: 768px) {
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
  background-color: #fff;
  z-index: 10002;
  display: none;

  @media (max-width: 768px) {
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
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a {
        color: #8671a7;
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
  color: #000;
  padding: 12px;
  background-color: transparent;
  border: none;
`;
