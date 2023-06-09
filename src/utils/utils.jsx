import rickYMorty from '../assets/rickYMorty.webp';
import notforget from '../assets/notforget.png';
import tictactoe from '../assets/tictactoe.png';
import reactLogo from '../assets/logo-react.svg';
import cssLogo from '../assets/logo-css.svg';
import gitLogo from '../assets/logo-git.svg';
import sqlLogo from '../assets/logo-sql.svg';
import reduxLogo from '../assets/logo-redux.svg';
import nodeLogo from '../assets/logo-node.svg';

export const projects = [
  {
    url: 'https://rickymorty-apiclient.netlify.app/',
    gitUrl: 'https://github.com/A-tomic-code/Rick-y-Morty-API-Client',
    img: rickYMorty,
    title: (
      <>
        Rick y Morty <span className="text-secondary">API Client</span>.
      </>
    ),
    desc: (
      <>
        Este proyecto es un{' '}
        <span className="text-secondary"> cliente para la API</span> de Rick y
        Morty que permite{' '}
        <span className="text-secondary"> buscar y filtrar personajes</span>, El
        objetivo del proyecto es aprender a consumir APIs y utilizar{' '}
        <span className="text-secondary"> React </span>para construir interfaces
        de usuario.
      </>
    ),
  },
  {
    url: 'https://notforget.netlify.app/',
    gitUrl: 'https://github.com/A-tomic-code/notes-app',
    img: notforget,
    title: 'NotForget',
    desc: (
      <>
        NotForget es una aplicación de notas que te permite organizar tus
        pensamientos de manera rápida y sencilla. Esta construida utilizando la
        popular biblioteca de JavaScript llamada
        <span className="text-secondary"> React</span> junto con el poderoso
        sistema de tipos de <span className="text-secondary">TypeScript</span>,
        lo que garantiza un{' '}
        <span className="text-secondary">código limpio</span> y una
        <span className="text-secondary">
          experiencia de desarrollo fluida.
        </span>
      </>
    ),
  },
  {
    title: 'Tic-tac-toe',
    desc: (
      <>
        Este es un{' '}
        <span className="text-secondary">proyecto básico de Tic Tac Toe</span>{' '}
        (Tres en línea) implementado utilizando{' '}
        <span className="text-secondary">React</span>. El juego permite a dos
        jugadores enfrentarse en un tablero de 3x3 y tratar de conseguir una
        línea de tres símbolos iguales.
      </>
    ),
    img: tictactoe,
    url: 'https://atomic-tictactoe.netlify.app/',
    gitUrl: 'https://github.com/A-tomic-code/Tic-tac-toe',
  },
];

export const skills = [
  {
    name: 'React',
    logo: reactLogo,
  },
  {
    name: 'CSS',
    logo: cssLogo,
  },
  {
    name: 'SQL',
    logo: sqlLogo,
  },
  {
    name: 'Redux',
    logo: reduxLogo,
  },
  {
    name: 'NodeJS',
    logo: nodeLogo,
  },
  {
    name: 'GIT',
    logo: gitLogo,
  },
];
