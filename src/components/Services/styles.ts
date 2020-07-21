import styled from 'styled-components';

import { ReactComponent as Background1 } from '../../assets/services-icons-backgrounds/background-1.svg';
import { ReactComponent as Background2 } from '../../assets/services-icons-backgrounds/background-2.svg';
import { ReactComponent as Background3 } from '../../assets/services-icons-backgrounds/background-3.svg';
import { ReactComponent as Background4 } from '../../assets/services-icons-backgrounds/background-4.svg';
import { ReactComponent as Background5 } from '../../assets/services-icons-backgrounds/background-5.svg';
import { ReactComponent as Background6 } from '../../assets/services-icons-backgrounds/background-6.svg';

interface ServiceItemProps {
  marginTop?: string;
  disableMarginTopInLargeWidth?: boolean;
  disableMarginTopInMediumWidth?: boolean;
}

interface ServiceItemContentProps {
  hoverIconBackgroundColor: string;
}

export const Section = styled.section`
  background-color: ${props => props.theme.colors.services.sectionBackground};
  padding: 100px 0;
  overflow: hidden;
`;

export const ServiceItem = styled.div<ServiceItemProps>`
  display: flex;
  align-items: stretch;
  justify-content: center;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: ${props => (props.marginTop ? props.marginTop : 'unset')};

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: ${props => {
      if (props.disableMarginTopInMediumWidth) {
        return '0 !important';
      }
      if (props.marginTop) {
        return props.marginTop;
      }
      return 'unset';
    }};
  }

  @media (min-width: 992px) {
    flex: 0 0 33%;
    max-width: 33%;
    margin-top: ${props => {
      if (props.disableMarginTopInLargeWidth) {
        return '0 !important';
      }
      if (props.marginTop) {
        return props.marginTop;
      }
      return 'unset';
    }};
  }
`;

export const ServiceItemContent = styled.div<ServiceItemContentProps>`
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: ${props => props.theme.colors.services.itemBackground};

  svg {
    path {
      transition: 0.5s;
    }
  }

  &:hover {
    border-color: ${props => props.theme.colors.services.onHover.border};
    box-shadow: 0px 0 25px 0
      ${props => props.theme.colors.services.onHover.boxShadow};

    svg {
      color: ${props => props.theme.colors.services.onHover.svg} !important;
      path {
        fill: ${props => props.hoverIconBackgroundColor};
      }
    }
  }

  h4 {
    font-weight: 600;
    margin: 10px 0 15px 0;
    font-size: 22px;
    line-height: 1.2;
    color: ${props => props.theme.colors.services.title};
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
  transition: 0.5s;
  position: relative;
`;

export const IconBackground1 = styled(Background1)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconBackground2 = styled(Background2)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconBackground3 = styled(Background3)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconBackground4 = styled(Background4)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconBackground5 = styled(Background5)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const IconBackground6 = styled(Background6)`
  position: absolute;
  top: 0;
  left: 0;
`;
