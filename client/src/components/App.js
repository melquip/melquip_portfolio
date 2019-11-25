import React from 'react';
import logo from '../img/logoBlack.png';
import styled from 'styled-components';
import About from './About';
import Questions from './Questions';
import Work from './Work';

const Header = styled.div`
  height: 100px;
  padding: 25px 0;
  .logo {
    width: 100%;
    max-height: 50px;
    img {
      max-height: 100%;
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

const App = (props) => {
  return (
    <div className="App">
      <Header>
        <div className="inner flex">
          <a href="/" className="col col-2 logo">
            <img src={logo} alt="Melquip's logo" />
          </a>
          <div className="col col-2 menu flex">
            <a href="/">About</a>
            <a href="/work">Portfolio</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </Header>
      <About />
      <Questions />
      <Work />
    </div>
  );
}

export default App;
