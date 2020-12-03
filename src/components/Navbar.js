import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogin } from '../actions/postActions'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'


class Navbar extends Component {
  handleLogin = () => {
    this.props.setLogin();
  }
  render(){
    return (
      <nav className="navbar navbar-expand-sm my-navbar navbar-dark sticky-top">
        <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt=""></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {this.props.login && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/newpost">New Post</NavLink>
            </li>)}
            {this.props.login && (
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.handleLogin}><i className='fas fa-user-alt-slash ef-rem' style={{fontSize:14}}></i> Log Out</Link>
            </li>)}
            {!this.props.login && (
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={this.handleLogin}><i className='fas fa-user-alt' style={{fontSize:14}}></i> Log In</Link>
            </li>)}
          </ul>
        </div>  
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: () => dispatch(setLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)