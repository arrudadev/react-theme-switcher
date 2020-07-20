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
                  <a>Home</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>About</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Service</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Terms of Service</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </FooterLinks>
            <FooterLinks>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <FaChevronRight />
                  <a>Web Design</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Web Development</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Product Management</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Marketing</a>
                </li>
                <li>
                  <FaChevronRight />
                  <a>Graphic Design</a>
                </li>
              </ul>
            </FooterLinks>
            <FooterNewsLetter>
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
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
            © Copyright <strong>ThemeSwitcher</strong> . All Rights Reserved
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
