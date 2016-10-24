import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';


const Navbar = ({handleToggle, handleLogin, user}) => {
  return (
    <AppBar
      title="Cracking the code interview"
      onLeftIconButtonTouchTap={handleToggle}
      iconElementRight={<FlatButton label={user ? "Logout" : "Login"} onTouchTap={handleLogin} />}
    />
    )
}

export default Navbar;