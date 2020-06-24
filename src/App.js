import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'fontsource-roboto';
import Donate from './Donate/Donate.js';
import Gallery from './Gallery/Gallery.js';
import Home from './Home';


function App() {
  return (
<Router>
        <Switch>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   
    </Router>
  );
}

export default App;
