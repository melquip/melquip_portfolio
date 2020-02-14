import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  position: relative;
  overflow: hidden;
  height: 2rem;
  @media ${props => props.theme.mediaTiny} {
    height: 2.75rem;
  }
  @media ${props => props.theme.mediaMobile} {
    height: 3.5rem;
  }
  @media ${props => props.theme.mediaTablet} {
    height: 4rem;
  }
  @media ${props => props.theme.mediaDesktop} {
    height: 5rem;
  }
`;

const SVGTitle = (props) => {
  return (
    <StyledTitle>
      <svg id="pageTitle" viewBox="0 0 1024 88" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gr-simple" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(-45)" fx="0">
            <stop stopColor="rgba(38, 84, 124, 1)" offset="0">
              <animate
                attributeName="stop-color"
                values="rgba(239, 71, 111, 1); rgba(38, 84, 124, 1); rgba(239, 71, 111, 1)"
                keyTimes="0; 0.5; 1"
                dur="8s"
                repeatCount="4"
              />
              <animate
                attributeName="offset"
                values="0; 1; 0"
                dur="8s"
                repeatCount="4"
              />
            </stop>
            <stop stopColor="rgba(38, 84, 124, 1)" offset="1">
              <animate
                attributeName="stop-color"
                values="rgba(38, 84, 124, 1); rgba(239, 71, 111, 1); rgba(38, 84, 124, 1)"
                keyTimes="0; 0.5; 1"
                dur="16s"
                repeatCount="2"
              />
            </stop>
          </linearGradient>
        </defs>
        <text textAnchor="left"
          x="0"
          y="50%"
          dy=".21em"
          className="svgTitle"
          fill="url(#gr-simple)"
        >
          {props.children}
        </text>
      </svg>
    </StyledTitle>
  )
}

export default SVGTitle