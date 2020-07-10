import styled from 'styled-components';

import ClientsBackground from '../../assets/backgrounds/clients-background.png';

export const Section = styled.section`
  background: linear-gradient(
      90deg,
      rgba(88, 70, 249, 0.5) 0%,
      rgba(123, 39, 216, 0.5) 100%
    ),
    url(${ClientsBackground}) center center no-repeat;
  padding: 15px 0;
  overflow: hidden;
`;

export const ClientContent = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: center !important;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  img {
    height: auto;
    max-width: 45%;
    transition: all 0.4s ease-in-out;
    display: inline-block;
    padding: 15px 0;

    &:hover {
      transform: scale(1.15);
    }

    @media (max-width: 768px) {
      max-width: 40%;
    }
  }

  flex: 0 0 50%;
  max-width: 50%;

  @media (min-width: 768px) {
    flex: 0 0 33%;
    max-width: 33%;
  }

  @media (min-width: 992px) {
    flex: 0 0 16%;
    max-width: 16%;
  }
`;
