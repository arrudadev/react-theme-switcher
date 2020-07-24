import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container, Row } from '../../styles/styles';
import {
  FooterSection,
  Content,
  FooterContact,
  FooterLinks,
  FooterNewsLetter,
  CopyRightSocialMediaContent,
  CopyRight,
  Credits,
  SocialMedia,
} from './styles';

const Footer = () => {
  return (
    <FooterSection>
      <Content>
        <Container>
          <Row>
            <FooterContact>
              <h3>ThemeSwitcher</h3>
              <p>Alexandre Monteiro</p>
              <p>
                <strong>Developer</strong>
              </p>
              <br />
              <p>
                <strong>Email:</strong> alexandre.monteiro.bec@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (11) 94466-9637
              </p>
            </FooterContact>
            <FooterLinks>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FaChevronRight />
                  <span>Home</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>About</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>Service</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>Terms of Service</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>Privacy Policy</span>
                </li>
              </ul>
            </FooterLinks>
            <FooterLinks>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <FaChevronRight />
                  <span>Web Design</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>Web Development</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>Javascript Developer</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>React Developer</span>
                </li>
                <li>
                  <FaChevronRight />
                  <span>NodeJs Developer</span>
                </li>
              </ul>
            </FooterLinks>
            <FooterNewsLetter>
              <h4>Join Our Newsletter</h4>
              <p>Example off Newsletter input</p>
              <form>
                <input type="email" name="email" />
                <button type="button">Subscribe</button>
              </form>
            </FooterNewsLetter>
          </Row>
        </Container>
      </Content>
      <Container>
        <CopyRightSocialMediaContent>
          <CopyRight>
            ©Copyright <strong>Alexandre Monteiro</strong>. License MIT
            <Credits>
              Developed by
              <a href="https://github.com/monteiro-alexandre">
                Alexandre Monteiro
              </a>
            </Credits>
          </CopyRight>
          <SocialMedia>
            <a href="https://github.com/monteiro-alexandre">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/alexandre-monteiro-9a03371a5/">
              <FiLinkedin />
            </a>
          </SocialMedia>
        </CopyRightSocialMediaContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
