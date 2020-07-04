import styled from 'styled-components';

export const Nav = styled.nav`
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

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 190px 1fr;
`;

export const Brand = styled.div`
  width: 190px;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      a {
        padding: 10px 15px;
        color: #8671a7;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
`;

export const MenuToggleButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
