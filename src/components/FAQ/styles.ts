import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;
  overflow: hidden;
  background: linear-gradient(42deg, #5846f9 0%, #7b27d8 100%);
`;

export const FaqList = styled.div`
  padding: 0 100px;

  ul {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;

    li {
      padding: 30px;
      background: #fff;
      border-radius: 5px;
      position: relative;
      margin-top: 15px;

      & > div {
        transition: all 0.3s ease-in-out;
      }

      &:first-child {
        margin-top: 0 !important;
      }
    }
  }
`;

export const HelpIcon = styled.i`
  position: absolute;
  right: 0;
  left: 20px;
`;

export const Question = styled.a`
  color: #2c4964;
  display: block;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding: 0 30px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const ArrowIcon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
`;

export const CollapseContent = styled.p`
  margin-bottom: 0;
  padding: 10px 0 0 0;
`;
