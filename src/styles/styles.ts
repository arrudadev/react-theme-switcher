import styled from 'styled-components';

interface ContainerProps {
  paddingTop?: number | string;
}
interface RowProps {
  justifyContentCenter?: boolean;
}

export const Section = styled.section`
  padding: 100px 0;
  overflow: hidden;
`;

export const Container = styled.div<ContainerProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  padding-top: ${props => props.paddingTop || 0}px;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const ContainerFluid = styled.div<ContainerProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  padding-top: ${props => props.paddingTop || 0}px;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: ${props =>
    props.justifyContentCenter ? 'center' : 'unset'};
`;

export const LinkButton = styled.a`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 50px 10px 28px;
  border-radius: 5px;
  transition: 0.5s;
  color: #fff;
  background: linear-gradient(45deg, #5846f9 0%, #7b27d8 100%);
  position: relative;
`;

export const SectionTitle = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    line-height: 1.2;
    margin-top: 0;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 50px;
      height: 3px;
      background: #5846f9;
      bottom: 0;
      left: calc(50% - 25px);
    }
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
    color: #848484;
  }
`;
