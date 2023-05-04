import './Content.css';
import { Aboutme } from '../../Aboutme/Aboutme';
import { Projects } from '../../Projects/Projects';
import {PixelBackground} from '../../PixelBackground/PixelBackground'


export const Content = () => {

  return (
    <div className="content">
      <PixelBackground></PixelBackground>
      <Aboutme></Aboutme>
      <Projects></Projects>
    </div>
  );
};
