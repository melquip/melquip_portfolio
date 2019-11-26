import React from 'react'

export const SVGTitle = (props) => {
  return (
    <h1>
      <svg viewBox="0 0 1028 88">
        <defs>
          <linearGradient id="gr-simple" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgba(38, 84, 124, 1)" offset="0">
              <animate 
                attributeName="stop-color" 
                values="rgba(38, 84, 124, 1); rgba(239, 71, 111, 1); rgba(239, 71, 111, 1); rgba(38, 84, 124, 1)"
                keyTimes="0 ; 0.4 ; 0.8 ; 1"
                dur="16s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="offset" 
                values="0; 1; 1; 0" 
                dur="16s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop stopColor="rgba(38, 84, 124, 1)" offset="1"></stop>
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
    </h1>
  )
}

export default SVGTitle