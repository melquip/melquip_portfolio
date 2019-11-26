import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 100px;
  padding: 25px 0;
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <div className="inner flex">
        <div className="col col-2">
        here
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