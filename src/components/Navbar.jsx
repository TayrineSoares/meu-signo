import Logo from './Logo'

function Navbar() {
  return (
    <header>
      <nav className="navbar" aria-label="Principal">
        <a className="navbar__brand" href="#hero">
          <Logo size={34} />
          <span className="navbar__brand-name">MEUSIGNO</span>
        </a>
        <div className="navbar__links">
          <a href="#o-que-e">O Mapa Astral</a>
          <a href="#oferta">Leituras</a>
          <a href="#como-encomendar">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
