import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

import UndrawAvatarFemale from '../../assets/testimonials/undraw_avatar_female.png';
import UndrawAvatarMale from '../../assets/testimonials/undraw_avatar_male.png';
import UndrawAvatarProfile from '../../assets/testimonials/undraw_avatar_profile.png';

import { Section, Container, SectionTitle } from '../../styles/styles';
import { TestimonialItem, QuoteLeftIcon, QuoteRightIcon } from './styles';

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>Testimonials</h2>
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
            Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
          </p>
        </SectionTitle>
        <Slider
          arrows={false}
          dots
          autoplay
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for lorem
              ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarProfile} alt="Undraw Avatar" />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </TestimonialItem>
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Lorem Ipsum publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarFemale} alt="Undraw Avatar" />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
          </TestimonialItem>
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Generate Lorem Ipsum web page editors now use Lorem Ipsum as their
              default model text, and a search for lorem ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarMale} alt="Undraw Avatar" />
            <h3>Matt Brandon</h3>
            <h4>Developer</h4>
          </TestimonialItem>
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Lorem Ipsum publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for lorem ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarProfile} alt="Undraw Avatar" />
            <h3>John Larson</h3>
            <h4>Developer</h4>
          </TestimonialItem>
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for lorem
              ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarFemale} alt="Undraw Avatar" />
            <h3>Jena Karlis</h3>
            <h4>Designer</h4>
          </TestimonialItem>
          <TestimonialItem>
            <p>
              <QuoteLeftIcon>
                <FaQuoteLeft size={26} color="#b1a9fc" />
              </QuoteLeftIcon>
              Generate Lorem Ipsum web page editors now use Lorem Ipsum as their
              default model text, and a search for lorem ipsum.
              <QuoteRightIcon>
                <FaQuoteRight size={26} color="#b1a9fc" />
              </QuoteRightIcon>
            </p>
            <img src={UndrawAvatarMale} alt="Undraw Avatar" />
            <h3>Alex Ipsum</h3>
            <h4>Developer</h4>
          </TestimonialItem>
        </Slider>
      </Container>
    </Section>
  );
};

export default Testimonials;
