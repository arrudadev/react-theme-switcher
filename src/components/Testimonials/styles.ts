import styled from 'styled-components';

export const TestimonialItem = styled.div`
  box-sizing: content-box;
  min-height: 320px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: -40px 0 0 40px;
    position: relative;
    z-index: 2;
    border: 6px solid #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 45px;
    color: #2c4964;
  }

  h4 {
    font-size: 14px;
    color: #999;
    margin: 0 0 0 45px;
  }

  p {
    font-style: italic;
    margin: 0 15px 0 15px;
    padding: 20px 20px 60px 20px;
    background: #fff;
    position: relative;
    border-radius: 6px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const QuoteLeftIcon = styled.span`
  display: inline-block;
  left: -5px;
  position: relative;
`;

export const QuoteRightIcon = styled.span`
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
`;
