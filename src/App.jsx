import React, { Component } from "react";
import { connect } from 'react-redux';
import { verifyUser } from './-global-state/actions/user-actions';
import Routes from "../src/routing/routes.jsx";

class App extends Component {
  componentDidMount = () => {
    this.props.verifyUser(localStorage.getItem("token"));
  }
  render() {
    return ( 
      <Routes />
     );
  }
}
export default connect(null, { verifyUser })(App);