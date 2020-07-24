import React from 'react';
import { Element } from 'react-scroll';

import { ReactComponent as UndrawLandingPage } from '../../assets/undraw_landing_page.svg';

import { ContainerFluid, Row } from '../../styles/styles';
import { Section, TitleContent, ImageContent, Title, SubTitle } from './styles';

const Banner = () => {
  return (
    <Element name="banner">
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
              <UndrawLandingPage />
            </ImageContent>
          </Row>
        </ContainerFluid>
      </Section>
    </Element>
  );
};

export default Banner;
