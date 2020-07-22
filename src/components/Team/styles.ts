import styled from 'styled-components';

export const TeamContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MemberInfo = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
`;

export const MemberInfoContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  transition: bottom 0.4s;

  h4 {
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
    color: ${props => props.theme.colors.team.memberName};
  }

  span {
    font-style: italic;
    display: block;
    font-size: 13px;
    color: ${props => props.theme.colors.team.memberOccupation};
  }
`;

export const MemberSocialMedia = styled.div`
  position: absolute;
  left: 0;
  bottom: -38px;
  right: 0;
  height: 48px;
  transition: bottom ease-in-out 0.4s;
  text-align: center;

  a {
    transition: color 0.3s;
    color: ${props => props.theme.colors.team.memberSocialMedia};
    margin: 0 10px;
    display: inline-block;
  }
`;

export const Member = styled.div`
  text-align: center;
  margin-bottom: 20px;
  background: ${props => props.theme.colors.team.memberBackground};
  position: relative;
  overflow: hidden;

  width: 255px;
  height: 255px;

  &:hover {
    ${MemberInfo} {
      background: linear-gradient(
        0deg,
        ${props =>
            props.theme.colors.team.onHover.backgroundLinearGradient.primary}
          0%,
        ${props =>
            props.theme.colors.team.onHover.backgroundLinearGradient.secondary}
          20%,
        ${props =>
            props.theme.colors.team.onHover.backgroundLinearGradient.tertiary}
          100%
      );
      opacity: 1;
      transition: 0.4s;
    }

    ${MemberInfoContent} {
      bottom: 60px;
      transition: bottom 0.4s;
    }

    ${MemberSocialMedia} {
      bottom: 0;
      transition: bottom ease-in-out 0.4s;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
`;
