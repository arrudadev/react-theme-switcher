import styled from 'styled-components';

interface FeatureItemProps {
  disableMarginTopInLargeWidth?: boolean;
}

export const Section = styled.section`
  padding: 100px 0;
  overflow: hidden;
`;

export const FeatureContentItems = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  flex-direction: column;
  order: 2;

  @media (min-width: 992px) {
    order: 1;
    flex: 0 0 50%;
    max-width: 50%;
    align-items: center !important;
  }
`;

export const FeatureContentImage = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  order: 1;

  svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
    order: 2;
  }
`;

export const FeatureItem = styled.div<FeatureItemProps>`
  margin-top: 3rem !important;

  svg {
    float: left;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0 10px 60px;
    line-height: 1.2;
    color: ${props => props.theme.colors.features.title};
  }

  p {
    font-size: 15px;
    color: ${props => props.theme.colors.features.text};
    margin-left: 60px;
  }

  @media (min-width: 992px) {
    margin-top: ${props =>
      props.disableMarginTopInLargeWidth ? '0 !important' : 'unset'};
  }
`;
