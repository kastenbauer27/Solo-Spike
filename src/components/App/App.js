import React, { Component } from 'react';
import './App.css';
import Timer from '../Timer/Timer';
import {HashRouter as Router, Route} from 'react-router-dom';
import FinalChoice from '../FinalChoice/FinalChoice';



class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Timer} />
          <Route path="/finalchoice" component={FinalChoice} />
        </Router>
      </div>
    );
  }
}

export default App;
