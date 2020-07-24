import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const TitleContent = styled(Content)`
  padding-top: 1.5rem !important;
  order: 2;

  @media (min-width: 992px) {
    order: 1;
    padding-top: 0 !important;
  }
`;

export const ImageContent = styled(Content)`
  order: 1;

  svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }

  @media (min-width: 992px) {
    order: 2;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  color: ${props => props.theme.colors.about.title};
  line-height: 1.2;
  margin-top: 0;
`;

export const Paragraph = styled.p`
  font-style: italic !important;
  margin-top: 10px;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const ListItem = styled.li`
  padding-bottom: 10px;
  display: flex;
`;

export const Icon = styled.i`
  font-size: 20px;
  padding-right: 4px;
  color: ${props => props.theme.colors.about.icon};
  margin-right: 10px;
`;

export const LinkButtonIcon = styled.i`
  font-size: 22px;
  position: absolute;
  right: 20px;
`;
