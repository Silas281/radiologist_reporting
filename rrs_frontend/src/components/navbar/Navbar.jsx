import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Radiologist Reporting System</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">Add Report</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
