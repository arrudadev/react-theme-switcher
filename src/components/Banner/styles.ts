import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  background: linear-gradient(
    45deg,
    rgba(86, 58, 250, 0.9) 0%,
    rgba(116, 15, 214, 0.9) 100%
  );
  background-size: cover;

  padding: 100px 0;
  overflow: hidden;

  @media (min-width: 1200px) {
    background-attachment: fixed;
  }
`;
