import styled from 'styled-components';

import { Row } from '../../styles/styles';

interface TechnologiesContentProps {
  order: number;
  orderInMediumAndUpWidth: number;
}

interface RowProps {
  marginTop?: string;
}

export const Section = styled.section`
  background-color: #f0f0f5;
  padding: 100px 0;
  overflow: hidden;
`;

export const TechnologiesRow = styled(Row)<RowProps>`
  margin-top: ${props => {
    if (props.marginTop) {
      return props.marginTop;
    }
    return 'unset';
  }};
`;

export const TechnologiesContentImage = styled.div<TechnologiesContentProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  order: ${props => props.order};

  svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }

  @media (min-width: 992px) {
    flex: 0 0 41%;
    max-width: 41%;
    order: ${props => props.orderInMediumAndUpWidth};
  }
`;

export const TechnologiesContentText = styled.div<TechnologiesContentProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 1.5rem !important;
  order: ${props => props.order};

  h3 {
    font-weight: 600;
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  p {
    font-style: italic !important;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #848484;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 1rem;

    li {
      padding-bottom: 10px;
      display: flex;

      svg {
        padding-right: 4px;
      }
    }
  }

  @media (min-width: 992px) {
    flex: 0 0 58%;
    max-width: 58%;
    order: ${props => props.orderInMediumAndUpWidth};
  }
`;
