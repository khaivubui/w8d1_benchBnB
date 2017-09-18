import React from 'react';
import { NavLink } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        Welcome back, {currentUser.username}<br/>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    );
 }
};

export default Greeting;
