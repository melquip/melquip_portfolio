import React, { useState, useEffect } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Loading from './Loading';

const StyledAbout = styled.section`
  overflow: hidden;
  cursor: move;
  cursor: grab;
  min-height: 13vmin;
  position: relative;
`;

const Slide = styled.div`
  padding-bottom: 1rem;
  position: relative;
  &:not(:first-child){
    position: absolute;
    top: 4rem;
    width: 100%;
  }
  p {
    font-size: 10vmin;
    line-height: 11vmin;
    will-change: transform, font-size;
    transform: translateX(-100vw);
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.purple};
    transition: transform .5s ease-in-out, font-size .33s ease-in-out;

    @media ${props => props.theme.mediaDesktop} {
      font-size: 12vmin;
      line-height: 13vmin;
    }

    &.show {
      transform: translateX(0);
      &:hover {
        font-size: 9.5vmin;
        @media ${props => props.theme.mediaDesktop} {
          font-size: 11.5vmin;
        }
      }
    }
    ${Array(20).join().split(',').map((el, i) => i > 1 ? `
    &:nth-child(${i}) {
      transition-delay: ${((i / 10) + ((i - 2) * 0.1)).toFixed(2)}s, 0s;
    }
    ` : false).filter(v => v !== false)}
  }

  z-index: 79;
  &.active {
    z-index: 80;
  }
`;

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
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    if (!about.length) {
      getAbout();
    }
  }, []);

  useEffect(() => {
    let updateTimer;
    if (about.length) {
      updateTimer = setTimeout(() => {
        setCurrSlide(currSlide => {
          if (currSlide + 1 > about.length - 1) {
            return 0
          }
          return currSlide + 1
        });
      }, 7000);
    }
    return () => clearTimeout(updateTimer)
  }, [about, currSlide])

  if (!about.length) {
    return <Loading />;
  }

  return (
    <StyledAbout
      className={'about' + (grabbed ? ' grabbed' : '')}
      onMouseDown={() => setGrabbed(true)}
      onMouseUp={() => setGrabbed(false)}
    >
      {about.length ? about.map((slide, i) => (
        <Slide className={i === currSlide ? 'active' : ''} key={slide.id}>
          <Tilt options={settingsTilt}>
            <div className="inner">
              {slide.line.map((text, j) => <p className={i === currSlide ? 'show' : ''} key={j}>{text}</p>)}
            </div>
          </Tilt>
        </Slide>
      )) : null}
    </StyledAbout>
  )
}

export default connect(state => state, actionCreators)(About);