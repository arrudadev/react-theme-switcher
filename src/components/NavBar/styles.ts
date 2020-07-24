import styled from 'styled-components';

interface NavProps {
  isScrolled: boolean;
}

export const Nav = styled.nav<NavProps>`
  min-height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  padding: 12px 0px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-width: 0 0 1px;
  transition: all 0.3s ease-in-out;
  background-color: ${props =>
    props.isScrolled
      ? props.theme.colors.navBar.scrolledBackground
      : 'transparent'};
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  display: grid;
  grid-template-columns: 190px 1fr;

  @media (min-width: 1200px) {
    flex: 0 0 75%;
    max-width: 75%;
  }
`;

export const Brand = styled.h1`
  width: 190px;
  font-size: 32px;
  color: ${props => props.theme.colors.navBar.brand};
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;

    @media (max-width: 1380px) {
      display: none;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
      display: flex;
    }

    @media (max-width: 1024px) {
      display: none;
    }

    li {
      padding: 10px 15px;
      a {
        color: ${props => props.theme.colors.navBar.linkText};
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
  color: ${props => (props.theme.title === 'dark' ? '#fff' : '#222')};

  @media (max-width: 1380px) {
    display: block;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;
