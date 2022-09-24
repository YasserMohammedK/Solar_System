import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import { withFirebase } from '../Firebase';
 
import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';
 
class App extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
      }

      componentWillUnmount() {
        this.listener();
      }
    render() {
        return (
           
    <div>
   const Navigation = () => (
 
      <hr />
 
      <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </div>
  

);
        }
    }
export default withFirebase(App);
