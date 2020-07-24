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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </SectionTitle>
          <Row>
            <FeatureContentItems>
              <FeatureItem disableMarginTopInLargeWidth>
                <FiBookmark size={48} color="#5846f9" />
                <h4>Est labore ad</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiCalendar size={48} color="#5846f9" />
                <h4>Harum esse qui</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiCamera size={48} color="#5846f9" />
                <h4>Aut occaecati</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </FeatureItem>
              <FeatureItem>
                <FiGithub size={48} color="#5846f9" />
                <h4>Beatae veritatis</h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium vitae
                  denat pacta
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
