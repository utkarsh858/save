import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Helmet} from "react-helmet";
import 'fontsource-roboto';
import Donate from './Donate/Donate.js';
import GalleryPage from './Gallery/GalleryPage.js';
import Home from './Home';
import About from './About';
import Article from './Article';
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
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   
    </Router>

    </React.Fragment>
  );
}
}

export default App;
