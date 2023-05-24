import rickYMorty from '../assets/rickYMorty.webp';
import reactLogo from '../assets/logo-react.svg'
import cssLogo from '../assets/logo-css.svg'
import gitLogo from '../assets/logo-git.svg'
import sqlLogo from '../assets/logo-sql.svg'
import reduxLogo from '../assets/logo-redux.svg'
import nodeLogo from '../assets/logo-node.svg'

export const projects = [
  {
    url: 'https://rickymorty-apiclient.netlify.app/',
    gitUrl: 'https://github.com/A-tomic-code/Rick-y-Morty-API-Client',
    img: rickYMorty,
    title:  <>Rick y Morty <span className='text-secondary'>API Client</span>.</>,
    desc: (<>
            Este proyecto es un <span className='text-secondary'> cliente para la API</span> de Rick y Morty que permite <span className='text-secondary'> buscar y filtrar personajes</span>,
            El objetivo del proyecto es aprender a consumir APIs y 
            utilizar <span className='text-secondary'> React </span>para construir interfaces de usuario.
          </>),
  },
];

export const skills = [
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