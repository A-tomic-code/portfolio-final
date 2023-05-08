import './Navbar.css';
import { useState } from 'react';

export const Navbar = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

  const navLinks = [
    {
      label: 'Contáctame',
      onClick: () =>
        (window.location.href = 'mailto:danielvazquezheredia1994@gmail.com'),
    },
    {
      label: 'Visita mi LinkedIn',
      onClick: () =>
        (window.location.href = 'https://www.linkedin.com/in/atomic-code/'),
    },
    {
      label: 'Ver mi CV',
      onClick: () =>
        (window.location.href =
          'https://drive.google.com/file/d/10DMZGwyldC51ZQJ6YJSSThLEBT-haazk/view?usp=sharing'),
    },
  ];
  const collapsed__button = (
    <ul className="collapsed__button">
      <button onClick={() => setShowCollapsedMenu(!showCollapsedMenu)}>
        <div
          className={
            showCollapsedMenu
              ? 'collapsed_button__line collapsed_button__line--closed'
              : 'collapsed_button__line'
          }
        />
        <div
          className={
            showCollapsedMenu
              ? 'collapsed_button__line collapsed_button__line--closed'
              : 'collapsed_button__line'
          }
        />
        <div
          className={
            showCollapsedMenu
              ? 'collapsed_button__line collapsed_button__line--closed'
              : 'collapsed_button__line'
          }
        />
      </button>
    </ul>
  );
  const collapsed__menu = (
    <ul
      className={`collapsed__menu ${
        showCollapsedMenu ? 'collapsed__menu--open' : ''
      }`}
    >
      {navLinks.map((link, index) => {
        return (
          <li className="nav__link" key={index}>
            <a href="#" onClick={link.onClick}>
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
  const expanded = (
    <ul className="expanded">
      {navLinks.map((link, index) => {
        return (
          <li className="nav__link" key={index}>
            <button onClick={link.onClick}>{link.label}</button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav>
      {expanded}
      {collapsed__button}
      {collapsed__menu}
    </nav>
  );
};
