import {
  Link
} from 'react-router-dom';

import './nav.css';

export default function Nav(){
  return(
    <nav className="menu">
      <Link to="/">Buscar</Link>
      <Link to="/favoritos">Favoritos</Link>
    </nav>
  )
}
