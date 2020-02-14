import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../img/logoBlackAnimated.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 25px 0;
  background: ${props => props.theme.colors.white};
  z-index: 1000;

  .logo {
    width: 100%;
    max-height: 50px;
    &.col.col-2 {
      max-width: 60px;
      flex-basis: 60px;
      @media ${props => props.theme.mediaTiny} {
        max-width: 100px;
        flex-basis: 100px;
      }
    }
    img {
      max-height: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .menu {
    justify-content: flex-end;
    &.col.col-2 {
      max-width: calc(100% - 60px);
      flex-basis: calc(100% - 60px);
      @media ${props => props.theme.mediaTiny} {
        max-width: calc(100% - 100px);
        flex-basis: calc(100% - 100px);
      }
    }
    a {
      font-size: 1.2rem;
      line-height: 1.5rem;
      padding: .81rem 1rem;
      text-transform: uppercase;
      font-family: ${props => props.theme.fonts.secondary};
      &:last-child {
        margin-right: -1rem;
      }
      @media ${props => props.theme.mediaMobile} {
        font-size: 1.5rem;
        line-height: 1.5rem;
        padding: .81rem 1.56rem;
        &:last-child {
          margin-right: -1.56rem;
        }
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