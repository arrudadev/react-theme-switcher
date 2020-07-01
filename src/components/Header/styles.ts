import styled from 'styled-components';

export const NavBar = styled.nav`
  min-height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  padding: 35px 0px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-width: 0 0 1px;
`;

export const NavBarContent = styled.div`
  width: 100%;
  display: grid;
`;

export const NavBarBrand = styled.div`
  width: 190px;
`;

export const NavBarList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavBarListItem = styled.li``;
