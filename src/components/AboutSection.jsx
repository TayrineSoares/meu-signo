function AboutSection() {
  return (
    <section id="sobre-mim" className="section section--tint">
      <div className="split split--about">
        <div className="split__photo">
          <span className="split__photo-label">foto da astróloga</span>
        </div>
        <div>
          <div className="eyebrow eyebrow--section">Sobre mim</div>
          <h2 className="section-title">Prazer, eu sou a sua astróloga</h2>
          <p className="section-text">
            Há anos estudo astrologia e me dedico a interpretar mapas com
            sensibilidade e profundidade. Mais do que prever, gosto de
            revelar — de mostrar quem você já é quando olha para o próprio
            céu.
          </p>
          <p className="section-text">
            Cada Mapa Astral que preparo é feito à mão, no seu tempo, com
            atenção a cada detalhe do seu nascimento. Meu trabalho é traduzir
            o simbólico em algo que você possa{' '}
            <strong>sentir e usar no dia a dia</strong>.
          </p>
          <div className="signature">— com carinho, [seu nome]</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
