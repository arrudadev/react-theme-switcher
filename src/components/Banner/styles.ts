import styled, { keyframes } from 'styled-components';

import BannerBackground from '../../assets/backgrounds/banner-background.jpg';

export const Section = styled.section`
  width: 100%;
  padding: 100px 0;
  overflow: hidden;
  display: flex;
  align-items: center;

  background: linear-gradient(
      45deg,
      rgba(86, 58, 250, 0.9) 0%,
      rgba(116, 15, 214, 0.9) 100%
    ),
    url(${BannerBackground}) center center no-repeat;
  background-size: cover;

  @media (min-width: 1200px) {
    background-attachment: fixed;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  padding-right: 15px;
  padding-left: 15px;

  order: 2;

  @media (min-width: 992px) {
    order: 1;
    padding-top: 0 !important;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 41%;
    max-width: 41%;
  }

  @media (max-width: 991px) {
    text-align: center;
  }
`;

const ImageFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.6);
  }
  100% {
    opacity: 1;    
    transform: translateZ(0) scale(1);
  }
`;

const ImageUpDown = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);  
  }
`;

export const ImageContent = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  justify-content: center;
  animation: 1s ${ImageFadeIn} ease-out;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    animation: 2s ${ImageUpDown} ease-in-out infinite alternate-reverse both;
  }

  order: 1;

  @media (max-width: 575px) {
    img {
      width: 80%;
    }
  }

  @media (max-width: 768px) and (min-width: 575px) {
    img {
      width: 60%;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    img {
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    order: 2;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 33%;
    max-width: 33%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 52px;
  font-weight: 700;
  line-height: 64px;
  color: #fff;
`;

export const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0 0 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`;
