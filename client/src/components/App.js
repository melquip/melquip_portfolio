import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Questions from './Questions';
import Work from './Work';
import WorkDetails from './WorkDetails';
import Login from './Login';
import Dashboard from './Dashboard';


const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/admin" component={Login} />
      <Route path="/admin/dashboard" render={props => {
        const user = JSON.parse(localStorage.getItem('melquip_user'));
        if(user && user.token) {
          return <Dashboard {...props} />;
        } else {
          return <Redirect to="/admin" />;
        }
      }} />
      <Route exact path="/work" component={Work} />
      <Route path="/work/:id" component={WorkDetails} />
      <Route path="/faq" component={Questions} />
      <Footer />
    </div>
  );
}

export default App;
