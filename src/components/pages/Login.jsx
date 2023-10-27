/* eslint-disable no-unused-vars */
import React from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section className="container">
      <div className="login-container">
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <button className="opacity">SUBMIT</button>
          </form>
          <div>
            <Link to={'/register'}>
              <a>Dont Have Account? Register</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
