import React from 'react';
import { FiMail, FiPhoneCall, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Element } from 'react-scroll';

import {
  Section,
  Container,
  SectionTitle,
  Row,
  StyledButton,
} from '../../styles/styles';
import {
  ContentInfo,
  ContentForm,
  BoxInfo,
  BoxInfoContent,
  BoxIcon,
  BoxInfoSocialMedia,
  BoxInfoSocialMediaContent,
  BoxInfoSocialMediaIconsContent,
  BoxIconSocialMedia,
  FormRow,
  FormRowItem,
  FormItem,
  FormFooter,
} from './styles';

const Contact = () => {
  return (
    <Element name="contact">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Contact</h2>
            <p>Example off Contact form section</p>
          </SectionTitle>
          <Row>
            <ContentInfo>
              <Row>
                <BoxInfo>
                  <BoxInfoContent>
                    <BoxIcon>
                      <FiMail size={32} color="#8577fb" />
                    </BoxIcon>
                    <h3>Email</h3>
                    <p>alexandre.monteiro.bec@gmail.com</p>
                  </BoxInfoContent>
                </BoxInfo>
                <BoxInfo>
                  <BoxInfoContent>
                    <BoxIcon>
                      <FiPhoneCall size={32} color="#8577fb" />
                    </BoxIcon>
                    <h3>Phone</h3>
                    <p>(11) 94466-9637</p>
                  </BoxInfoContent>
                </BoxInfo>
                <BoxInfoSocialMedia>
                  <BoxInfoSocialMediaContent>
                    <h3>Social Media</h3>
                    <BoxInfoSocialMediaIconsContent>
                      <BoxIconSocialMedia
                        href="https://github.com/monteiro-alexandre"
                        title="GitHub"
                      >
                        <FiGithub size={48} color="black" />
                      </BoxIconSocialMedia>
                      <BoxIconSocialMedia
                        href="https://www.linkedin.com/in/alexandre-monteiro-9a03371a5/"
                        title="Linkedin"
                      >
                        <FiLinkedin size={48} color="#0073b1" />
                      </BoxIconSocialMedia>
                    </BoxInfoSocialMediaIconsContent>
                  </BoxInfoSocialMediaContent>
                </BoxInfoSocialMedia>
              </Row>
            </ContentInfo>
            <ContentForm>
              <form>
                <FormRow>
                  <FormRowItem>
                    <input type="text" placeholder="Name" />
                  </FormRowItem>
                  <FormRowItem>
                    <input type="text" placeholder="Email" />
                  </FormRowItem>
                </FormRow>
                <FormItem>
                  <input type="text" placeholder="Subject" />
                </FormItem>
                <FormItem>
                  <textarea placeholder="Message" draggable={false} />
                </FormItem>
                <FormFooter>
                  <StyledButton type="button">Send Message</StyledButton>
                </FormFooter>
              </form>
            </ContentForm>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default Contact;
