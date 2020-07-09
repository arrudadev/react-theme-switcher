import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import AboutImg from '../../assets/about.jpg';

import { Container, Row } from '../../styles/styles';
import {
  Section,
  TitleContent,
  ImageContent,
  Title,
  Paragraph,
  List,
  ListItem,
  Icon,
} from './styles';

const About = () => {
  return (
    <Section>
      <Container>
        <Row>
          <TitleContent>
            <Title>Voluptatem dignissimos provident quasi corporis</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
            <List>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </ListItem>
              <ListItem>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </ListItem>
            </List>
          </TitleContent>
          <ImageContent>
            <img src={AboutImg} alt="about" />
          </ImageContent>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
