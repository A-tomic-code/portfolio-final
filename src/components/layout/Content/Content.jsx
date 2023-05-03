import './Content.css';
import { Aboutme } from '../../Aboutme/Aboutme';
import { Projects } from '../../Projects/Projects';

export const Content = () => {

  
  return (
    <div className="content">
      <Aboutme></Aboutme>
      <Projects></Projects>
    </div>
  );
}
