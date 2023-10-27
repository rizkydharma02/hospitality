/* eslint-disable no-unused-vars */
import React from 'react';
import './css/Register.css';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <section className="container">
      <div className="register-container">
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">REGISTER</h1>
          <form>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <button className="opacity">SUBMIT</button>
          </form>
          <div>
            <Link to={'/login'}>
              <a>Have Account? Login</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
