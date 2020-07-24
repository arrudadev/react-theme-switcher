import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Element } from 'react-scroll';

import { ReactComponent as UndrawCodeReview } from '../../assets/technologies/undraw_code_review.svg';
import { ReactComponent as UndrawReact } from '../../assets/technologies/undraw_react.svg';
import { ReactComponent as UndrawResponsive } from '../../assets/technologies/undraw_responsive.svg';
import { ReactComponent as UndrawStaticWebSite } from '../../assets/technologies/undraw_static_website.svg';

import { Container, SectionTitle } from '../../styles/styles';
import {
  Section,
  TechnologiesRow,
  TechnologiesContentImage,
  TechnologiesContentText,
} from './styles';

const Technologies = () => {
  return (
    <Element name="technologies">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Technologies</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>
          </SectionTitle>
          <TechnologiesRow>
            <TechnologiesContentImage order={1} orderInMediumAndUpWidth={1}>
              <UndrawReact />
            </TechnologiesContentImage>

            <TechnologiesContentText order={2} orderInMediumAndUpWidth={2}>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </TechnologiesContentText>
          </TechnologiesRow>

          <TechnologiesRow marginTop="100px">
            <TechnologiesContentText order={2} orderInMediumAndUpWidth={1}>
              <h3>Styled Components</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </TechnologiesContentText>

            <TechnologiesContentImage order={1} orderInMediumAndUpWidth={2}>
              <UndrawStaticWebSite />
            </TechnologiesContentImage>
          </TechnologiesRow>

          <TechnologiesRow marginTop="100px">
            <TechnologiesContentImage order={1} orderInMediumAndUpWidth={1}>
              <UndrawResponsive />
            </TechnologiesContentImage>

            <TechnologiesContentText order={2} orderInMediumAndUpWidth={2}>
              <h3>Responsive Layout</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </TechnologiesContentText>
          </TechnologiesRow>

          <TechnologiesRow marginTop="100px">
            <TechnologiesContentText order={2} orderInMediumAndUpWidth={1}>
              <h3>Open Source</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </TechnologiesContentText>

            <TechnologiesContentImage order={1} orderInMediumAndUpWidth={2}>
              <UndrawCodeReview />
            </TechnologiesContentImage>
          </TechnologiesRow>
        </Container>
      </Section>
    </Element>
  );
};

export default Technologies;
