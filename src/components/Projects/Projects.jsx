import './Projects.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
export const Projects = () => {

  const data = {title:'Titulo del proyecto', desc:'descripcion del proyecto', img:'pij'}

  return (
    <section className="projects">
      <div className="section__principal-data">
        <h3 className="section__title">Proyectos</h3>
        <p className="section__subtitle">
        Sumérgete en una <span className="text-secondary">selección de trabajos </span>en los que he participado.
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
          <ProjectCard data={data}></ProjectCard>
          <ProjectCard data={data}></ProjectCard>
          <ProjectCard data={data}></ProjectCard>
          <ProjectCard data={data}></ProjectCard>
          <ProjectCard data={data}></ProjectCard>
        </div>

      </div>


    </section>
  );
};
