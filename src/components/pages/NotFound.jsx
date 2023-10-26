/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './css/NotFound.css';

export const NotFound = () => {
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you are looking for does not exist. If you think something is broken, back to home page!</p>
        <div className="btns">
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    </div>
  );
};
