const STEPS = [
  {
    number: '01',
    title: 'Preencha o formulário',
    text: 'Você informa seus dados de nascimento e de contato num formulário rápido.',
  },
  {
    number: '02',
    title: 'Eu gero e interpreto',
    text: 'Com essas informações, gero seu Mapa Astral e preparo um relatório completo.',
  },
  {
    number: '03',
    title: 'Receba seu relatório',
    text: 'Entregue por WhatsApp ou e-mail, conforme o produto que você escolher.',
  },
]

function HowToOrderSection() {
  return (
    <section id="como-encomendar" className="section section--white section--bordered">
      <h2 className="section-title section-title--centered">
        Como encomendar
      </h2>
      <div className="steps">
        {STEPS.map((step) => (
          <div className="steps__item" key={step.number}>
            <div className="steps__number">{step.number}</div>
            <div className="steps__title">{step.title}</div>
            <p className="steps__text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowToOrderSection
