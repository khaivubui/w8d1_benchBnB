import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h4>
          Welcome back, {currentUser.username}<br/>
        </h4>
        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/signup">Sign Up</ Link>
        <Link to="/login">Login</ Link>
      </div>
    );
 }
};

export default Greeting;
