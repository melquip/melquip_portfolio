import React from 'react';
import logo from './img/logo-black.svg'
import styled from 'styled-components';

const Header = styled.div`
  .logo {
    width: 100%;
    max-height: 50px;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        <div className="inner flex">
          <a className="col col-2 logo">
            <img src={logo} alt="Melquip's logo" />
          </a>
          <div className="col col-2 menu flex">
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </Header>
    </div>
  );
}

export default App;
