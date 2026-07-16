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
          <div className="testimonial-card" key={item.author}>
            <div className="testimonial-card__stars">★★★★★</div>
            <p className="testimonial-card__quote">{item.quote}</p>
            <div className="testimonial-card__author">{item.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
