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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Typescript
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Javascript
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Context API
                </li>
              </ul>
            </TechnologiesContentText>
          </TechnologiesRow>

          <TechnologiesRow marginTop="100px">
            <TechnologiesContentText order={2} orderInMediumAndUpWidth={1}>
              <h3>Styled Components</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Create styles with components.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Animations.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Theme Switcher.
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
                The generated Lorem Ipsum is therefore always free from
                repetition, injected humour, or non-characteristic words etc.
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  CSS.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Media Queries.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Random Class Names.
                </li>
              </ul>
            </TechnologiesContentText>
          </TechnologiesRow>

          <TechnologiesRow marginTop="100px">
            <TechnologiesContentText order={2} orderInMediumAndUpWidth={1}>
              <h3>Open Source</h3>
              <p>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <ul>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  GitHub Repository.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  GitHub Pages.
                </li>
                <li>
                  <FiCheck size={20} color="#3b4ef8" />
                  Git version control.
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
