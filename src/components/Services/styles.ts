import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f9f8ff;
  padding: 100px 0;
  overflow: hidden;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33%;
    max-width: 33%;
  }
`;

export const ServiceItemContent = styled.div`
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;

  h4 {
    font-weight: 600;
    margin: 10px 0 15px 0;
    font-size: 22px;
    line-height: 1.2;
    color: #2c4964;
    transition: ease-in-out 0.3s;
  }

  p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const IconBox = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
`;

export const Icon = styled.div`
  font-size: 36px;
  transition: 0.5s;
  position: relative;
`;
