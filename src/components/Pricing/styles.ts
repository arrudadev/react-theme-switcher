import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f0f0f5;
  padding: 100px 0;
  overflow: hidden;
`;

export const PlanContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 33%;
    max-width: 33%;
  }

  @media (max-width: 992px) {
    & + & {
      margin-top: 30px;
    }
  }
`;

export const PlanInfoContainer = styled.div`
  padding-top: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  background: white;
  float: left;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-width: 6px;
    border-style: solid;
    border-color: #7b27d8 !important;
    padding-top: 35px;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
  }

  h4 {
    font-size: 24px;
    font-weight: normal;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  h1 {
    font-size: 60px;
    font-weight: normal;
    margin: 20px 0 10px 0;
    transition: all 0.3s ease-in-out;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #ddd;
  }

  ul {
    padding: 0;
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  li {
    font-size: 16px;
    line-height: 52px;
  }
`;

export const PlanFooter = styled.div`
  border-top: 1px solid #ddd;
  padding: 27px 0px;

  button {
    background: #d3d4dc;
    color: #fff;
    padding: 15px 30px;
  }
`;
