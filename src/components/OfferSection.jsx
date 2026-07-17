import { FORM_LINK } from '../links'

const PRODUCTS = [
  {
    title: 'Leitura Temática',
    text: 'Um mergulho profundo em apenas uma área da sua vida (à sua escolha) para trazer clareza e respostas rápidas:',
    list: ['Família', 'Cotidiano', 'Espiritualidade', 'Profissional'],
    price: 'R$97',
    meta: 'por tema, entregue em PDF ou áudio',
  },
  {
    title: 'Leitura Equilíbrio Luz e Sombra',
    text: 'Uma análise da sua personalidade através dos lados opostos da Astrologia. Você recebe um plano prático de ações para desenvolver suas qualidades e equilibrar seus pontos fracos.',
    price: 'R$117',
    meta: 'entregue em PDF ou áudio',
  },
  {
    title: 'Os 4 Pilares da Sua Personalidade',
    text: 'Uma interpretação profunda do seu "Eu" traduzida pelos quatro pontos mais importantes do seu nascimento: sua essência (Sol), suas emoções (Lua), a forma como o mundo te vê (Ascendente) e sua vocação profissional (Meio do Céu).',
    price: 'R$177',
    oldPrice: 'R$197',
    meta: 'preço promocional, entregue em PDF ou áudio',
  },
  {
    title: 'Mapa Astral: o Guia da Sua Vida',
    text: 'Uma visão geral e integrada do seu mapa, para entender como os signos e as áreas da sua vida conversam entre si e como usar as energias astrológicas a seu favor.',
    options: [
      { label: '📄 Relatório em PDF', price: 'R$297' },
      { label: '🎧 Áudio', price: 'R$347' },
      { label: '🎬 Vídeo gravado', price: 'R$597' },
    ],
  },
]

function OfferSection() {
  return (
    <section id="oferta" className="section section--centered">
      <div className="eyebrow">Os produtos</div>
      <h2 className="section-title section-title--centered">
        Encontre a leitura ideal para você
      </h2>
      <p className="offer-intro">
        Conheça cada produto e escolha aquele que melhor se adapta à sua
        rotina.
      </p>

      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <div className="product-card" key={product.title}>
            <div className="product-card__title">{product.title}</div>
            <p className="product-card__text">{product.text}</p>
            {product.list && (
              <ul className="product-card__list">
                {product.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {product.options ? (
              <div className="product-card__options">
                {product.options.map((option) => (
                  <div className="product-card__option" key={option.label}>
                    <span>{option.label}</span>
                    <strong>{option.price}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="product-card__price-row">
                  <span className="product-card__price">{product.price}</span>
                  {product.oldPrice && (
                    <span className="product-card__price-old">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="product-card__meta">{product.meta}</div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="bonus-banner">
        <span className="bonus-banner__icon">🎁</span>
        <p className="bonus-banner__text">
          <strong>Bônus incluso:</strong> além do arquivo no formato
          escolhido, todos os produtos acompanham a imagem digital do seu
          Mapa Astral, para você guardar e consultar sempre.
        </p>
      </div>

      <a
        className="btn btn--primary offer-cta"
        href={FORM_LINK}
        target="_blank"
        rel="noreferrer"
      >
        Escolher meu produto
      </a>
    </section>
  )
}

export default OfferSection
