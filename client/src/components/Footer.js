import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 75px;
  width: 100%;
  z-index: 1000;
  background: ${props => props.theme.colors.white};

  .col:first-child {
    font-size: .8rem;
    color: ${props => props.theme.colors.blue};
    line-height: 75px;
    span {
      color: ${props => props.theme.colors.red};
    }
    @media ${props => props.theme.mediaMobile} {
      font-size: 1rem;
    }
  }
  .col:last-child {
    display: flex;
    justify-content: flex-end;
    a {
      font-size: 1.5rem;
      line-height: 75px;
      padding: 0 1rem;
      transition: color .2s ease-in-out;
      &:hover {
        color: ${props => props.theme.colors.red};
      }
      &:last-child {
        margin-right: -16px;
      }
    }
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <div className="inner flex">
        <div className="col col-2">
          <a href="mailto:hire@melquip.com" target="_blank" rel="noopener noreferrer"><span>hire@melquip.com</span></a>
        </div>
        <div className="col col-2">
          <a href="https://twitter.com/melquip7" target="_blank" rel="noopener noreferrer">
            <i className="icon-twitter"></i>
          </a>
          <a href="https://github.com/melquip" target="_blank" rel="noopener noreferrer">
            <i className="icon-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/melquip/" target="_blank" rel="noopener noreferrer">
            <i className="icon-linkedin"></i>
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer