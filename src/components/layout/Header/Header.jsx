import './Header.css';
import header from '../../../assets/header.svg';
import headerBg from '../../../assets/header-bg.svg';
import { Navbar } from '../../Navbar/Navbar';

export const Header = () => {
  return (
    <header>
        <img src={headerBg} className="header_bg" />
      <div className="header__content">
        <div className="header-data">
          <small className="text-secondary">¡Hola!</small>
          <h1>
            ¿Buscas un
            <span className="text-secondary"> desarrollador web</span>?
          </h1>
          <p>Diseñando la Web del futuro.</p>
        </div>

        <img
          src={header}
          alt="imagen del desarrollador sonriendo y con los brazos cruzados"
        />
      </div>
      <Navbar></Navbar>
    </header>
  );
};
