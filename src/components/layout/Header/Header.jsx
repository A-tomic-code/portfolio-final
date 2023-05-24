import './Header.css';
import developerImg from '../../../assets/developer-image.svg'
import { Navbar } from '../../Navbar/Navbar';
import {HeaderBg} from './HeaderBg'

export const Header = () => {
  return (
    <header>
      <HeaderBg width="100%" height="100%"/>
      <div className="header__content">
        
        <div className="header-data">
          <h1>
            ¿Buscas un
            <span className="text-secondary"> desarrollador web</span>?
          </h1>
          <p>Diseñando la Web del futuro.</p>
        </div>

        <img
          src={developerImg}
          alt="imagen del desarrollador sonriendo y con los brazos cruzados"
        />
      </div>
      <Navbar></Navbar>
    </header>
  );
};
