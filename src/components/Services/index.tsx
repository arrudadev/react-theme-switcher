import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { Container, SectionTitle, Row } from '../../styles/styles';
import {
  Section,
  ServiceItem,
  ServiceItemContent,
  IconBox,
  Icon,
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
                <Icon>
                  <FiInfo />
                </Icon>
              </IconBox>
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemContent>
              <IconBox>
                <Icon>
                  <FiInfo />
                </Icon>
              </IconBox>
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemContent>
              <IconBox>
                <Icon>
                  <FiInfo />
                </Icon>
              </IconBox>
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemContent>
              <IconBox>
                <Icon>
                  <FiInfo />
                </Icon>
              </IconBox>
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemContent>
              <IconBox>
                <Icon>
                  <FiInfo />
                </Icon>
              </IconBox>
              <h4>Lorem Ipsum</h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </ServiceItemContent>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemContent>
              <IconBox>
                <Icon>
                  <FiInfo />
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
