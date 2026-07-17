import { FORM_LINK } from '../links'

function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="eyebrow">Astrologia &amp; autoconhecimento</div>
      <h1 className="hero__title">
        Qualquer viagem fica mais fácil com um <br/> <em>bom mapa</em>
      </h1>
      <p className="hero__subtitle">
        E é para facilitar a sua jornada pela vida que eu quero interpretar o
        seu Mapa Astral de maneiras que você nunca viu.
      </p>
      <div className="hero__actions">
        <a
          className="btn btn--primary btn--lg"
          href={FORM_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Quero meu Mapa Astral →
        </a>
        <a className="btn btn--outline btn--lg" href="#o-que-e">
          O que é um Mapa Astral
        </a>
      </div>
    
    </header>
  )
}

export default Hero
