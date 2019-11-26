import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../img/logoBlackAnimated.svg';

const StyledHeader = styled.header`
  height: 100px;
  padding: 25px 0;
  .logo {
    width: 100%;
    max-height: 50px;
    img {
      max-height: 100%;
      height: 100%;
    }
  }
  .menu {
    justify-content: flex-end;
    a {
      font-size: 1.5rem;
      padding: .81rem 1.56rem;
      //font-variant: small-caps;
      text-transform: uppercase;
      font-family: ${props => props.theme.fonts.secondary};
      &:last-child {
        margin-right: -1.56rem;
      }
    }
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <div className="inner flex">
        <Link to="/" className="col col-2 logo">
          <img src={logo} alt="Melquip's logo" />
        </Link>
        <div className="col col-2 menu flex">
          <Link to="/">About</Link>
          <Link to="/work">Portfolio</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header