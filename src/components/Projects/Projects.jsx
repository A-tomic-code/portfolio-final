import './Projects.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from '../../utils/utils'
export const Projects = () => {


  return (
    <section className="projects">
      <div className="section__principal-data">
        <h3 className="section__title">Proyectos</h3>
        <p className="section__subtitle">
          Sumérgete en una{' '}
          <span className="text-secondary">selección de trabajos </span>en los
          que he participado.
        </p>
        <p className="section__text">
          Explora mis proyectos para ver ejemplos concretos de mi trabajo y
          descubrir cómo he abordado diversos desafíos. Cada proyecto es una
          oportunidad para aprender, crecer y mejorar mis habilidades como
          desarrollador front-end.
        </p>
      </div>

      <div className="section__secondary-data">
        <div className="projects_grid">
          {projects.map((item, index) => (
            <ProjectCard data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
