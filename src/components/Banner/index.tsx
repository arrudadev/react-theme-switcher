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
              <Title>React Theme Switcher</Title>
              <SubTitle>
                Developed with React, Styled Components and Context API
                <br />
                <a href="https://github.com/monteiro-alexandre/react-theme-switcher">
                  <img
                    src="https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/monteiro-alexandre)"
                    alt="GitHub repository badge"
                  />
                </a>
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
