import React, { Component } from 'react';
import './App.css';
import Dashboard from './Layouts/Dashboard/Dashboard'
import Login from './Layouts/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/Dashboard' component={Dashboard} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
