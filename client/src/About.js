import React from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: 5000,
}

const StyledSlick = styled(Slick)`
  margin-left: -.3rem;
`
const Slide = styled.div`
  padding: 20px 0;
  p {
    font-size: 8.5rem;
    line-height: 8.5rem;
    font-weight: 300;
    font-family: ${props => props.theme.fonts.secondary}
  }
`;

const About = (props) => {
  return (
    <section className="about">
      <div className="inner">
        <StyledSlick {...settings}>
          <Slide className="slide">
            <p>Hi, I'm a </p>
            <p>22 years old</p>
            <p>portuguese</p>
            <p>full-stack developer</p>
            <p>& gamer</p>
          </Slide>
          <Slide className="slide">
            <p>Hi, I'm a </p>
            <p>22 years old</p>
            <p>full-stack developer</p>
            <p>& gamer</p>
          </Slide>
          <Slide className="slide">
            <p>Hi, I'm a </p>
            <p>22 years old</p>
            <p>full-stack developer</p>
            <p>& gamer</p>
          </Slide>
        </StyledSlick>
      </div>
    </section>
  )
}

export default About;