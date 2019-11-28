import React, { useState, useEffect } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const StyledAbout = styled.section`
  overflow: hidden;
  cursor: move;
  cursor: grab;
  &.grabbed {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

const StyledSlick = styled(Slick)`
  margin-left: -.3rem;
`;

const Slide = styled.div`
  padding-bottom: 1rem;
  p {
    font-size: 10vmin;
    line-height: 11vmin;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.purple};
    transition: transform .33s ease-in-out;
    &:hover {
      transform: translateX(0) scale(.98);
    }
    @media ${props => props.theme.mediaDesktop} {
      font-size: 12vmin;
      line-height: 13vmin;
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
  const { about, getAbout } = props;
  const [grabbed, setGrabbed] = useState(false);

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <StyledAbout
      className={'about' + (grabbed ? ' grabbed' : '')}
      onMouseDown={() => setGrabbed(true)}
      onMouseUp={() => setGrabbed(false)}
    >
      <StyledSlick {...settingsSlider}>
        {about.length ? about.map((slide, i) => (
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

export default connect(state => state, actionCreators)(About);