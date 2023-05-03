import './Header.css';
import header from '../../../assets/header.svg';
import headerBg from '../../../assets/header-bg.svg';

export const Header = () => {
  return (
    <header>
      <img src={headerBg} className="header_bg" />
      <div className="header-data">
        <small className="text-secondary">
          ¡Hola!
        </small>
        <h1>
          ¿Buscas un
          <span className="text-secondary"> desarrollador web</span>?
        </h1>
        <p>Diseñando la Web del futuro.</p>
      </div>
      <div className="header__buttons">
        <button >Contáctame</button>
        <button >Visita mi LinkedIn</button>
        <button >Ver mi CV</button>
      </div>

      <img src={header} alt="imagen del desarrollador sentado" />
    </header>
  );
};
