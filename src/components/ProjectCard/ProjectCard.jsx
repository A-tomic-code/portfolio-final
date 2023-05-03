import './ProjectCard.css'
import PropTypes from 'prop-types'

export const ProjectCard = ({data}) => {

  const {title, desc, img} = data

  return(
    <div className="project__card">
      
      <div className="project__card--inner">

      <div className="project__card--front">
        FRONT
        {title}
        {desc}
        {img}

      </div>
      <div className="project__card--back">
        BACK
      </div>


      </div>
      
    </div>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired
}