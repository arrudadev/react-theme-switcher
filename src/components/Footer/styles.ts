import styled from 'styled-components';

import FooterBackground from '../../assets/backgrounds/footer-background.jpg';

export const FooterSection = styled.footer`
  color: #fff;
  font-size: 14px;
  background: linear-gradient(
      45deg,
      rgba(86, 58, 250, 0.9) 0%,
      rgba(116, 15, 214, 0.9) 100%
    ),
    url(${FooterBackground}) center center no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  padding: 60px 0 30px 0;
  position: relative;
`;

export const FooterContact = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  color: #fff;
  font-size: 14px;

  h3 {
    font-size: 28px;
    margin: 0 0 30px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33%;
    max-width: 33%;
  }
`;

export const FooterLinks = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    margin-top: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    & > li:first-child {
      padding-top: 0;
    }

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;

      svg {
        padding-right: 2px;
        line-height: 1;
      }

      a {
        color: rgba(255, 255, 255, 0.8);
        transition: 0.3s;
        display: inline-block;
        line-height: 1;

        &:hover {
          text-decoration: underline;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 16%;
    max-width: 16%;
  }
`;

export const FooterNewsLetter = styled.div`
  font-size: 15px;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  form {
    margin-top: 30px;
    background: #fff;
    padding: 6px 10px;
    position: relative;
    border-radius: 5px;
    text-align: left;
    border: 1px solid white;

    input {
      border: 0;
      padding: 4px 8px;
      width: calc(100% - 100px);
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    button {
      position: absolute;
      top: -1px;
      right: -2px;
      bottom: -1px;
      border: 0;
      background: none;
      font-size: 16px;
      padding: 0 20px;
      background: rgba(123, 39, 216, 0.8);
      color: #fff;
      transition: 0.3s;
      border-radius: 0 5px 5px 0;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      margin: 0;
      font-family: inherit;
      line-height: inherit;

      &:hover {
        background: #5846f9;
      }
    }
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33%;
    max-width: 33%;
  }

  @media (min-width: 1200px) {
    margin-left: 20px;
  }
`;

export const CopyRightSocialMediaContent = styled.div`
  border-top: 1px solid #8577fb;
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;

  @media (min-width: 768px) {
    display: flex !important;
  }
`;

export const CopyRight = styled.div`
  text-align: center !important;

  @media (min-width: 768px) {
    text-align: left !important;
    margin-right: auto !important;
  }
`;

export const Credits = styled(CopyRight)`
  padding-top: 5px;
  font-size: 13px;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    margin-left: 10px;
  }
`;

export const SocialMedia = styled.div`
  padding-top: 1rem !important;
  text-align: center !important;

  a {
    font-size: 18px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    text-align: right !important;
    padding-top: 0 !important;
  }
`;
