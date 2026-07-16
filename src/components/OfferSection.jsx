import { whatsappLink } from '../whatsapp'

const FEATURES = [
  'Sol, Lua e Ascendente',
  'As 12 casas astrológicas',
  'Planetas e aspectos',
  'Interpretação personalizada',
]

function OfferSection() {
  return (
    <section id="oferta" className="section section--centered">
      <div className="eyebrow">O produto</div>
      <h2 className="section-title section-title--centered">
        O seu Mapa Astral, interpretado
      </h2>
      <div className="offer-card">
        <div className="offer-card__header">
          <div>
            <div className="offer-card__title">Relatório completo</div>
            <div className="offer-card__subtitle">
              Entregue por WhatsApp ou e-mail
            </div>
          </div>
        </div>
        <div className="offer-card__features">
          {FEATURES.map((feature) => (
            <div className="offer-card__feature" key={feature}>
              <span className="offer-card__feature-mark">✦</span> {feature}
            </div>
          ))}
        </div>
        <a
          className="btn btn--primary offer-card__cta"
          href={whatsappLink('Olá! Quero pedir o meu Mapa Astral.')}
          target="_blank"
          rel="noreferrer"
        >
          Peça seu Mapa Astral
        </a>
      </div>
    </section>
  )
}

export default OfferSection
