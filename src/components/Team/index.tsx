import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Element } from 'react-scroll';

import AlexandreMonteiro from '../../assets/alexandre-monteiro.png';

import { Section, Container, SectionTitle, Row } from '../../styles/styles';
import {
  TeamContent,
  Member,
  MemberInfo,
  MemberInfoContent,
  MemberSocialMedia,
} from './styles';

const Team = () => {
  return (
    <Element name="team">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </SectionTitle>
          <Row>
            <TeamContent>
              <Member>
                <img src={AlexandreMonteiro} alt="Alexandre Monteiro" />
                <MemberInfo>
                  <MemberInfoContent>
                    <h4>Alexandre Monteiro</h4>
                    <span>Developer</span>
                  </MemberInfoContent>
                  <MemberSocialMedia>
                    <a href="https://github.com/monteiro-alexandre">
                      <FiGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/alexandre-monteiro-9a03371a5/">
                      <FiLinkedin size={18} />
                    </a>
                  </MemberSocialMedia>
                </MemberInfo>
              </Member>
            </TeamContent>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default Team;
