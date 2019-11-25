import React, { useState, useEffect } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import Tilt from 'react-tilt';

const StyledAbout = styled.section`
  overflow: hidden;
`;

const StyledSlick = styled(Slick)`
  cursor: move;
  margin-left: -.3rem;
`;

const Slide = styled.div`
  padding-bottom: 1rem;
  p {
    font-size: 7.5rem;
    line-height: 8.25rem;
    font-family: ${props => props.theme.fonts.secondary};
    transition: transform .33s ease-in-out;
    &:hover {
      transform: translateX(0) scale(.98);
    }
  }
`;

const settingsSlider = {
  dots: true,
  infinite: true,
  accessibility: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  onInit: () => {
  }
}

const settingsTilt = {
  reverse: false,     // reverse the tilt direction
  max: 8,             // max tilt rotation (degrees)
  perspective: 1000,  // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
  speed: 300,    // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: 'y',   // What axis should be disabled. Can be X or Y.
  reset: false,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const About = (props) => {
  const [aboutSlides, setAboutSlides] = useState([]);

  useEffect(() => {
    setAboutSlides([
      [
        "Hi, I'm Melqui,",
        "22 years old,",
        "portuguese,",
        "full-stack developer",
        "& gamer",
      ],
      [
        "Hi, I'm Melqui,",
        "22 years old,",
        "portuguese,",
        "full-stack developer",
        "& gamer",
      ],
      [
        "Hi, I'm Melqui,",
        "22 years old,",
        "portuguese,",
        "full-stack developer",
        "& gamer",
      ]
    ]);
  }, []);

  return (
    <StyledAbout className="about">
      <StyledSlick {...settingsSlider}>
        {aboutSlides.length ? aboutSlides.map((slide, i) => (
          <Slide key={i}>
            <Tilt options={settingsTilt}>
              <div className="inner">
                {slide.map((line, j) => <p key={j}>{line}</p>)}
              </div>
            </Tilt>
          </Slide>
        )) : null}
      </StyledSlick>
    </StyledAbout>
  )
}

export default About;