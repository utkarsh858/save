import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import 'fontsource-roboto';
import Donate from './Donate/Donate.js';
import DonateOneTime from './Donate/DonateOneTime.js';
import Contact from './Contact/Contact.js';

import Impact from './Impact';
import Activities from './Activities';
import About from './About';
import Team from './Team/Team';
import Mentors from './Mentors/Mentors';
import Article from './Article';
import Info from './Info';
import "./App.css"

class App extends Component {

  render(){
  return (
    <React.Fragment>
     <Helmet>
      <title>SAVE</title>
      <meta name="keywords" content="NGO, Value Education" />
      <meta
        name="description"
        content="An NGO for creating leaders"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <script id="bolt" src="https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js" bolt-
color="ff9505" bolt-logo={require('./logo.png')}></script>
    </Helmet>
 
<Router>
        <Switch>
          <Route path="/donate/donate-one-time">
            <DonateOneTime />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/info">
            <Info />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/impact">
            <Impact />
          </Route>
          <Route path="/team">
          <Team/>
          <Mentors />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
   
    </Router>

    </React.Fragment>
  );
}
}

export default App;
