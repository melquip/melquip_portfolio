import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  .col:first-child {
    font-size: .8rem;
    color: ${props => props.theme.colors.blue};
    line-height: 4.5rem;
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
      padding: 1.55rem 1rem;
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
          Developed by <span>melqui</span>
        </div>
        <div className="col col-2">
          <a href="#" target="_blank"><i className="icon-twitter"></i></a>
          <a href="#" target="_blank"><i className="icon-github"></i></a>
          <a href="#" target="_blank"><i className="icon-linkedin"></i></a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer