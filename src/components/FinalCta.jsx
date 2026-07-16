import { whatsappLink } from '../whatsapp'

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__stars" aria-hidden="true" />
      <h2 className="final-cta__title">Sua jornada começa com um mapa</h2>
      <p className="final-cta__text">
        Descubra o que o céu registrou no instante em que você chegou.
      </p>
      <a
        className="btn btn--light btn--lg"
        href={whatsappLink('Olá! Quero saber mais sobre o meu Mapa Astral.')}
        target="_blank"
        rel="noreferrer"
      >
        Quero meu Mapa Astral →
      </a>
    </section>
  )
}

export default FinalCta
