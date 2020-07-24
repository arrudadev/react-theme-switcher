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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
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
              Export tempor illum tamen malis malis eram quae irure esse labore
              quem cillum quid cillum eram malis quorum velit fore eram velit
              sunt aliqua noster fugiat irure amet legam anim culpa.
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
              Enim nisi quem export duis labore cillum quae magna enim sint
              quorum nulla quem veniam duis minim tempor labore quem eram duis
              noster aute amet eram fore quis sint minim.
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
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
              export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore.
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
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa.
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
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
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
