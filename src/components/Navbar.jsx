import Logo from './Logo'
import { FORM_LINK } from '../links'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Logo size={34} />
        <span className="navbar__brand-name">MEUSIGNO</span>
      </div>
      <div className="navbar__links">
        <a href="#o-que-e">O Mapa Astral</a>
        <a href="#como-encomendar">Como funciona</a>
        <a href="#depoimentos">Depoimentos</a>
      </div>
    </nav>
  )
}

export default Navbar
