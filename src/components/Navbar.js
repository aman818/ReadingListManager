import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Reading List Manager By Aman</h1>
        <ul className="flex gap-4">
          <li><Link to="/">Login</Link></li>
          <li><Link to="/reading-list">Reading List</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
