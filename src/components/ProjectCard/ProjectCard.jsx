import './ProjectCard.css';
import PropTypes from 'prop-types';

export const ProjectCard = ({ data }) => {
  const { title, desc, img } = data;

  return (
    <div className="project__card">
      
      <section className='project__image'>
        <img src={img} alt="" />
      </section>

      <section className="project__details">
        <h2>{title}</h2>
        <p className="section__text">{desc}</p>
      </section>
      
      <section className="project__actions">
        <button
        className="project__button"
        onClick={() => window.open(data.gitUrl)}
        >
          Ver en GitHub
        </button>

        <button
        onClick={() => window.open(data.url)}
        >
          Visitar proyecto
        </button>
      </section>
      
    </div>
  ); 
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};