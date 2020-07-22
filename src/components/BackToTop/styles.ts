import styled, { keyframes } from 'styled-components';

interface BackToTopButtonProps {
  showBackToTop: boolean;
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.6);
  }
  100% {
    opacity: 1;    
    transform: translateZ(0) scale(1);
  }
`;

export const BackToTopButton = styled.div<BackToTopButtonProps>`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;

  display: ${props => (props.showBackToTop ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${props => props.theme.colors.backToTop.background};
  color: ${props => props.theme.colors.backToTop.text};
  transition: all 0.4s;
  cursor: pointer;

  animation: 0.3s ${FadeIn} ease-out;

  a {
    text-decoration: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
