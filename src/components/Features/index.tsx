import React from 'react';
import { FiBookmark, FiCalendar, FiCamera, FiGithub } from 'react-icons/fi';
import { Element } from 'react-scroll';

import { ReactComponent as UndrawProgrammer } from '../../assets/undraw_programmer.svg';

import { Container, SectionTitle, Row } from '../../styles/styles';
import {
  Section,
  FeatureContentItems,
  FeatureContentImage,
  FeatureItem,
} from './styles';

const Features = () => {
  return (
    <Element name="features">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Features</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </SectionTitle>
          <Row>
            <FeatureContentItems>
              <FeatureItem disableMarginTopInLargeWidth>
                <FiBookmark size={48} color="#5846f9" />
                <h4>Star on GitHub</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiCalendar size={48} color="#5846f9" />
                <h4>Fork on Github</h4>
                <p>
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s.
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiCamera size={48} color="#5846f9" />
                <h4>Web Design</h4>
                <p>
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiGithub size={48} color="#5846f9" />
                <h4>GitHub repository</h4>
                <p>
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </FeatureItem>
            </FeatureContentItems>
            <FeatureContentImage>
              <UndrawProgrammer />
            </FeatureContentImage>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default Features;
