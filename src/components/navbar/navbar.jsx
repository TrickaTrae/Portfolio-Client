import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../../-global-state/actions/user-actions';
import './navbar.css';

const NavBar = props => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark">
      <Link to="/" className="navbar-brand">TW</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" name="toggle navbar">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ml-auto">
              <Link to="/blog" className="nav-item nav-link">
                <div className="d-none d-lg-block">Blog</div>
                <div className="d-block d-sm-block d-md-block d-lg-none" data-toggle="collapse" data-target="#navbarContent">Blog</div>
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                <div className="d-none d-lg-block">Contact</div>
                <div className="d-block d-sm-block d-md-block d-lg-none" data-toggle="collapse" data-target="#navbarContent">Contact</div>
              </Link>
              {
                props.userLoggedIn &&
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle pointer" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </div>
                  <div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item text-white bg-dark" to="/admin">
                      <div className="d-none d-lg-block">Admin</div>
                      <div className="d-block d-sm-block d-md-block d-lg-none" data-toggle="collapse" data-target="#navbarContent">Admin</div>
                    </Link>
                    <Link className="dropdown-item text-white bg-dark" to="/user">
                      <div className="d-none d-lg-block">User</div>
                      <div className="d-block d-sm-block d-md-block d-lg-none" data-toggle="collapse" data-target="#navbarContent">User</div>
                    </Link>
                    <button className="dropdown-item text-white bg-dark pointer" onClick={() => props.signoutUser(localStorage.getItem("token"))}>
                      <div className="d-none d-lg-block">Sign Out</div>
                      <div className="d-block d-sm-block d-md-block d-lg-none" data-toggle="collapse" data-target="#navbarContent">Sign Out</div>
                    </button>
                  </div>
                </li>
              }
          </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
      userLoggedIn: state.userState.userLoggedIn,
  }
}

export default connect(mapStateToProps, { signoutUser })(NavBar);