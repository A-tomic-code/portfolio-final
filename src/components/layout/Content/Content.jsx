import './Content.css';
import { Aboutme } from '../../Aboutme/Aboutme';
import { Projects } from '../../Projects/Projects';
import {PixelBackground} from '../../PixelBackground/PixelBackground'

import developerImg from '../../../assets/developer-image.svg'


export const Content = () => {

  return (
    <div className="content">
      <PixelBackground></PixelBackground>

      <img className='developer__img'src={developerImg} alt="imagen del desarrollador sonriendo y con los brazos cruzados"/>
      <Aboutme></Aboutme>
      <Projects></Projects>
    </div>
  );
};
