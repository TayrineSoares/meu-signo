const TESTIMONIALS = [
  {
    quote:
      '"Me senti profundamente vista. Foi como receber um manual sobre mim mesma."',
    author: 'Camila R. · Instagram',
  },
  {
    quote:
      '"A interpretação é linda e clara. Guardei cada palavra do relatório."',
    author: 'Beatriz M. · WhatsApp',
  },
]

function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section section--centered">
      <h2 className="section-title section-title--centered">
        Quem já leu o próprio mapa
      </h2>
      <div className="testimonials">
        {TESTIMONIALS.map((item) => (
          <article className="testimonial-card" key={item.author}>
            <p className="testimonial-card__stars">
              <span aria-hidden="true">★★★★★</span>
              <span className="visually-hidden">5 de 5 estrelas</span>
            </p>
            <blockquote className="testimonial-card__quote">
              <p>{item.quote}</p>
            </blockquote>
            <p className="testimonial-card__author">{item.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
