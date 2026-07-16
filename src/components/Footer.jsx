import Logo from './Logo'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo size={26} />
        <span>MEUSIGNO</span>
      </div>
      <div className="footer__social">
        <a href="#" aria-label="Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="#" aria-label="TikTok">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 3c.4 2.3 1.9 4 4 4.3v3c-1.5 0-2.9-.4-4-1.1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.5 2.5 0 1 0 1.6 2.3V3H15z" />
          </svg>
        </a>
        <a href="#" aria-label="E-mail">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M4 7l8 5 8-5" />
          </svg>
        </a>
      </div>
      <div className="footer__copy">© 2026 Meu Signo</div>
    </footer>
  )
}

export default Footer
