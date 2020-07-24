import styled from 'styled-components';

interface MenuListItemProps {
  isActive: boolean;
  isSideNavOpen: boolean;
}

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuListItem = styled.li<MenuListItemProps>`
  cursor: pointer;
  position: relative;

  & :hover {
    color: ${props =>
      props.isSideNavOpen ? props.theme.colors.sideNav.menuItem : '#fff'};
  }

  a {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: ${props => {
        if (props.isSideNavOpen) {
          return props.theme.title === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.5)';
        }

        return '#fff';
      }};
      visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
      width: ${props => (props.isActive ? '100%' : '0px')};
      transition: all 0.3s ease-in-out 0s;
    }
  }

  &:hover > a:before {
    visibility: visible;
    width: 100%;
  }
`;
