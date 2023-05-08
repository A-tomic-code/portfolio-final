import './Aboutme.css';
import { SkillsGrid } from '../SkillsGrid/SkillsGrid';

export const Aboutme = () => {
  return (
    <section className="aboutme">
      <div className="section__secondary-data">
        <SkillsGrid></SkillsGrid>
      </div>

      <div className="section__principal-data">
        <h3 className="section__title">Sobre mi.</h3>
        <p className="section__subtitle">
          ¡Hola! Soy <span className="text-secondary">Daniel</span>, un
          apasionado{' '}
          <span className="text-secondary">desarrollador front-end</span>.
        </p>
        <p className="section__text">
          Con un enfoque en la creación de experiencias web cautivadoras y una
          sólida formación en HTML, CSS y JavaScript, me dedico a dar vida a
          diseños creativos y funcionales. Mi objetivo principal es encontrar el
          equilibrio perfecto entre la estética visual y la usabilidad, para
          ofrecer a los usuarios una experiencia única y memorable.
        </p>
      </div>
    </section>
  );
};
