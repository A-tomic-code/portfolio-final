import './Navbar.css';
import { useState } from 'react';

export const Navbar = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);

  const navLinks = [
    {
      label:'Contáctame',
      onClick: () => alert('oli')
    },
    {
      label:'Visita mi LinkedIn',
      onClick: () => alert('oli')
    },
    {
      label:'Ver mi CV',
      onClick: () => alert('oli')
    }
  ];
  const collapsed__button = (
    <ul className="collapsed__button">
        <button onClick={() => setShowCollapsedMenu(!showCollapsedMenu)}>

            <div className={showCollapsedMenu ? 'collapsed_button__line collapsed_button__line--closed' : 'collapsed_button__line'}/>
          <div className={showCollapsedMenu ? 'collapsed_button__line collapsed_button__line--closed' : 'collapsed_button__line'}/>
          <div className={showCollapsedMenu ? 'collapsed_button__line collapsed_button__line--closed' : 'collapsed_button__line'}/>
          
        </button>
      </ul>
  )

  const collapsed__menu = (
    <ul className={`collapsed__menu ${showCollapsedMenu ? 'collapsed__menu--open' : ''}`}>
          {navLinks.map((link, index) => {
            return (
              <li className="nav__link" key={index}>
                <a href="#" onClick={link.onClick}>{link.label}</a>
              </li>
            );
          })}
        </ul>
  )

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
  )



  return (
    <nav>    
      {expanded}
      {collapsed__button}
      {collapsed__menu}
    </nav>
  );
};
