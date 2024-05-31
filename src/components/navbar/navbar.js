import React from 'react';
import './navbar.css';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { links } from '../../router/links';

export const Navbar = () => {
  const { theme = 'theme1' } = useParams();

  const renderLink = (link) => (
    <li key={link.path} className="nav-item">
      <NavLink className="nav-link" to={link.path}>{link.name}</NavLink>
    </li>
  );

  return (
    <>
      <ul className={`navbar ${theme}`}>
        {links.map(link => renderLink(link))}
      </ul>
      <Outlet/>
    </>
  );
};
