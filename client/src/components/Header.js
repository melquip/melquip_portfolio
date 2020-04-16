import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../img/logoBlackAnimated.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 1);
  transition: box-shadow .2s ease-in-out;
  &.scroll {
    box-shadow: 0px 0px 5px rgba(0,0,0,.25);
  }
  .logo {
    width: 100%;
    max-height: 50px;
    margin-top: 25px;
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
      padding: calc(.81rem + 26px) 1rem calc(.80rem + 24px);
      text-transform: uppercase;
      font-family: ${props => props.theme.fonts.secondary};
      background: rgba(0,0,0,0);
      transition: all .33s ease-in-out;
      &:last-child {
        margin-right: -1rem;
      }
      &:hover {
        background: ${props => props.theme.colors.midblue};
        color: ${props => props.theme.colors.white}
      }
      @media ${props => props.theme.mediaMobile} {
        font-size: 1.5rem;
        line-height: 1.5rem;
        padding-left: 1.56rem;
        padding-right: 1.56rem;
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
          <Link to="/projects">Portfolio</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header