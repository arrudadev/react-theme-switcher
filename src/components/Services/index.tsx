import React from 'react';
import {
  FiCoffee,
  FiFileText,
  FiClock,
  FiShare2,
  FiMonitor,
  FiShare,
} from 'react-icons/fi';
import { Element } from 'react-scroll';

import { Container, SectionTitle, Row } from '../../styles/styles';
import {
  Section,
  ServiceItem,
  ServiceItemContent,
  IconBox,
  Icon,
  IconBackground1,
  IconBackground2,
  IconBackground3,
  IconBackground4,
  IconBackground5,
  IconBackground6,
} from './styles';

const Services = () => {
  return (
    <Element name="services">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </SectionTitle>
          <Row>
            <ServiceItem>
              <ServiceItemContent hoverIconBackgroundColor="#47aeff">
                <IconBox>
                  <IconBackground1 />
                  <Icon>
                    <FiCoffee size={36} color="#47aeff" />
                  </Icon>
                </IconBox>
                <h4>Coffee</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </ServiceItemContent>
            </ServiceItem>
            <ServiceItem disableMarginTopInMediumWidth marginTop="1.5em">
              <ServiceItemContent hoverIconBackgroundColor="#ffa76e">
                <IconBox>
                  <IconBackground2 />
                  <Icon>
                    <FiFileText size={36} color="#ffa76e" />
                  </Icon>
                </IconBox>
                <h4>Code</h4>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </ServiceItemContent>
            </ServiceItem>
            <ServiceItem disableMarginTopInLargeWidth marginTop="1.5em">
              <ServiceItemContent hoverIconBackgroundColor="#e80368">
                <IconBox>
                  <IconBackground3 />
                  <Icon>
                    <FiClock size={36} color="#e80368" />
                  </Icon>
                </IconBox>
                <h4>Productive</h4>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there no anything embarrassing hidden in the middle of
                  text.
                </p>
              </ServiceItemContent>
            </ServiceItem>
            <ServiceItem marginTop="1.5em">
              <ServiceItemContent hoverIconBackgroundColor="#ffbb2c">
                <IconBox>
                  <IconBackground4 />
                  <Icon>
                    <FiShare2 size={36} color="#ffbb2c" />
                  </Icon>
                </IconBox>
                <h4>GitHub</h4>
                <p>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures.
                </p>
              </ServiceItemContent>
            </ServiceItem>
            <ServiceItem marginTop="1.5em">
              <ServiceItemContent hoverIconBackgroundColor="#ff5828">
                <IconBox>
                  <IconBackground5 />
                  <Icon>
                    <FiMonitor size={36} color="#ff5828" />
                  </Icon>
                </IconBox>
                <h4>React</h4>
                <p>
                  To generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour.
                </p>
              </ServiceItemContent>
            </ServiceItem>
            <ServiceItem marginTop="1.5em">
              <ServiceItemContent hoverIconBackgroundColor="#026e00">
                <IconBox>
                  <IconBackground6 />
                  <Icon>
                    <FiShare size={36} color="#026e00" />
                  </Icon>
                </IconBox>
                <h4>GitHub Pages</h4>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
              </ServiceItemContent>
            </ServiceItem>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default Services;
