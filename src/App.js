import React, { Component } from 'react';
import './App.css';
import Dashboard from './Layouts/Dashboard/Dashboard'
import Login from './Layouts/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebaseConnect from './config/firebaseConnect';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = ()  =>{
    firebaseConnect.auth().onAuthStateChanged((user) => {
      console.log("firebase",user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  
  render() {
    return (
      <Router>
            <div>
               <Switch>
                  <Route component={this.state.user !==null? Dashboard : Login} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
