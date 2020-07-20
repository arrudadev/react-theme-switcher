import styled from 'styled-components';

interface MenuListItemProps {
  isActive: boolean;
}

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuListItem = styled.li<MenuListItemProps>`
  cursor: pointer;
  position: relative;

  & :hover {
    color: #fff;
  }

  a {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: #fff;
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
