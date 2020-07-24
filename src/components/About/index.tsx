import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Element } from 'react-scroll';

import { ReactComponent as UndrawTeamSpirit } from '../../assets/undraw_team_spirit.svg';

import { Container, Row, LinkButton } from '../../styles/styles';
import {
  Section,
  TitleContent,
  ImageContent,
  Title,
  Paragraph,
  List,
  ListItem,
  Icon,
  LinkButtonIcon,
} from './styles';

const About = () => {
  return (
    <Element name="about">
      <Section>
        <Container>
          <Row>
            <TitleContent>
              <Title>Single Page Website</Title>
              <Paragraph>
                As the name defines, this type of layout is made to display all
                the content on just one page, with well-defined sections
                displaying the contents
              </Paragraph>
              <List>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  React Scroll Library to vertical scrolling effect
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  Styled Components
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  React Context API
                </ListItem>
                <ListItem>
                  <Icon>
                    <FiCheckCircle />
                  </Icon>
                  Lorem Ipsum Text
                </ListItem>
              </List>
              <LinkButton>
                Read More
                <LinkButtonIcon>
                  <FiArrowRight />
                </LinkButtonIcon>
              </LinkButton>
            </TitleContent>
            <ImageContent>
              <UndrawTeamSpirit />
            </ImageContent>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default About;
