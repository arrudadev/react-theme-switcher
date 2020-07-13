import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FiFileText, FiClock } from 'react-icons/fi';

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
            <ServiceItemContent>
              <IconBox>
                <IconBackground1 />
                <Icon>
                  <FaReact size={36} color="#47aeff" />
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
            <ServiceItemContent>
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
            <ServiceItemContent>
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
            <ServiceItemContent>
              <IconBox>
                <IconBackground4 />
                <Icon>
                  <FaReact size={36} color="#47aeff" />
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
            <ServiceItemContent>
              <IconBox>
                <IconBackground5 />
                <Icon>
                  <FaReact size={36} color="#47aeff" />
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
            <ServiceItemContent>
              <IconBox>
                <IconBackground6 />
                <Icon>
                  <FaReact size={36} color="#47aeff" />
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
