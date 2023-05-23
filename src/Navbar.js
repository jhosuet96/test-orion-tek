import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/"  style={{  marginLeft: '1rem' }}  className="navbar-brand">TestOrionTeck</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/company" className="nav-link">Empresas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customer" className="nav-link">Clientes</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/customerDetails" className="nav-link">Detalles Cliente</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
