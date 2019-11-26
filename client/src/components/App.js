import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Questions from './Questions';
import Work from './Work';
import WorkDetails from './WorkDetails';


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/work" component={Work} />
      <Route path="/work/:id" component={WorkDetails} />
      <Route path="/faq" component={Questions} />
      <Footer />
    </div>
  );
}

export default App;
