import React, { useEffect } from 'react';
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
  useEffect(() => {
    const header = document.getElementsByTagName('header').item(0);
    document.addEventListener('scroll', (e) => {
      if (window.scrollY === 0) {
        header.classList.remove('scroll');
      }
      if (window.scrollY > 10) {
        header.classList.add('scroll');
      }
    }, { passive: true })
  }, [])
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
      <Route exact path="/projects" component={Work} />
      <Route path="/projects/:url" component={WorkDetails} />
      <Route path="/faq" component={Questions} />
      <Footer />
    </div>
  );
}

export default App;
