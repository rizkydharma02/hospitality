/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';
export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p>
          Created with <FaHeart style={{ color: 'red' }} /> Gho Hotel, copyright &copy; 2023
        </p>
      </footer>
    </div>
  );
};
