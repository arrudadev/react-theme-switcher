import React from 'react';

import BannerImg from '../../assets/banner-img.png';

import { ContainerFluid, Row } from '../../styles/styles';
import { Section, TitleContent, ImageContent, Title, SubTitle } from './styles';

const Banner = () => {
  return (
    <Section>
      <ContainerFluid paddingTop={84}>
        <Row justifyContentCenter>
          <TitleContent>
            <Title>Better Digital Experience With Techie</Title>
            <SubTitle>
              We are team of talanted designers making websites with Bootstrap
            </SubTitle>
          </TitleContent>
          <ImageContent>
            <img src={BannerImg} alt="Banner" />
          </ImageContent>
        </Row>
      </ContainerFluid>
    </Section>
  );
};

export default Banner;
