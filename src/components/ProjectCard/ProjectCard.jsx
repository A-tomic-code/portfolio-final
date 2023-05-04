import './ProjectCard.css'
import PropTypes from 'prop-types'

export const ProjectCard = ({data}) => {

  const {title, desc, img} = data

  return(
    <div className="project__card">
      
      <div className="project__card--inner">

      <div className="project__card--front">
        
        <div className="project__card-image"/>
  
        <h3 className="title">{title}</h3>

      </div>
      <div className="project__card--back">
        {desc}
        {img}
      </div>


      </div>
      
    </div>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired
}