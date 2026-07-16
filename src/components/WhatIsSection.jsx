import Logo from './Logo'

function WhatIsSection() {
  return (
    <section id="o-que-e" className="section section--white">
      <div className="split">
        <div className="split__art">
          <div className="split__stars" aria-hidden="true" />
          <div className="split__icon">
            <Logo size={150} />
          </div>
        </div>
        <div>
          <div className="eyebrow eyebrow--section">O que é</div>
          <h2 className="section-title">
            Um retrato do céu no momento em que você nasceu
          </h2>
          <p className="section-text">
            Na teoria, é um "retrato do céu" capturado no momento do seu
            nascimento. Na prática, o Mapa Astral (ou Mapa Natal) é uma
            ferramenta potente de autoconhecimento e desenvolvimento pessoal.
          </p>
          <p className="section-text">
            Além de ser <strong>a marca da sua passagem pela Terra</strong>,
            seu mapa pode conter a chave que falta para abrir as portas mais
            secretas da sua existência.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatIsSection
