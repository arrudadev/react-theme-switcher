import React from 'react';
import {
  FiCoffee,
  FiFileText,
  FiClock,
  FiShare2,
  FiMonitor,
  FiShare,
} from 'react-icons/fi';

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
    <Section>
      <Container>
        <SectionTitle>
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
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
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
        </Row>
      </Container>
    </Section>
  );
};

export default Services;
