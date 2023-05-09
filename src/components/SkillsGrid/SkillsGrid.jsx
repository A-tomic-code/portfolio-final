import './SkillsGrid.css'
import reactLogo from '../../assets/logo-react.svg'
import cssLogo from '../../assets/logo-css.svg'
import gitLogo from '../../assets/logo-git.svg'
import sqlLogo from '../../assets/logo-sql.svg'
import reduxLogo from '../../assets/logo-redux.svg'
import nodeLogo from '../../assets/logo-node.svg'



export const SkillsGrid = () => {

  const skills = [
    {
      name: "React",
      logo: reactLogo
    },
    {
      name: "CSS",
      logo: cssLogo
    },
    {
      name: "SQL",
      logo: sqlLogo
    },
    {
      name: "Redux",
      logo: reduxLogo
    },
    {
      name: "NodeJS",
      logo: nodeLogo
    },
    {
      name: "GIT",
      logo: gitLogo
    },
  ]


  return (
    <div className="skills_grid">

      {skills.map( skill => {
        return <div className="skill" key={skill.name}><img src={skill.logo}/> {skill.name}</div>
        })}

    </div>
  )

}