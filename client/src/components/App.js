import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import logo from '../img/logoBlack.png';

import About from './About';
import Questions from './Questions';
import Work from './Work';
import WorkDetails from './WorkDetails';


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
          <Link to="/" className="col col-2 logo">
            <img src={logo} alt="Melquip's logo" />
          </Link>
          <div className="col col-2 menu flex">
            <Link to="/">About</Link>
            <Link to="/work">Portfolio</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </Header>
      <Route exact path="/" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/work/:id" component={WorkDetails} />
      <Route path="/faq" component={Questions} />
    </div>
  );
}

export default App;
