import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white top-0 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/" className="hover:text-gray-400">Pokedex</Link>
      </div>
      <div>
        <Link to="/bag" className="hover:text-gray-400 mx-4">Bag</Link>
      </div>
    </nav>
  );
};

export default Navbar;
