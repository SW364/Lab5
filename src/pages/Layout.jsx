import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto"> 
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/perfil">Perfil</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};
