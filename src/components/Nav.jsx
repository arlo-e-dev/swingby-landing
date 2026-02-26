import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Nav.module.css'

function scrollTo(id, closeMenu) {
  closeMenu()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <Logo size={38} />
          <span className={styles.brandName}>LoopBox</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <button className={styles.navBtn} onClick={() => scrollTo('how-it-works', close)}>How It Works</button>
          <button className={styles.navBtn} onClick={() => scrollTo('for-shippers', close)}>Shippers</button>
          <button className={styles.navBtn} onClick={() => scrollTo('trust', close)}>Trust & Safety</button>
          <button className={styles.navBtn} onClick={() => scrollTo('for-drivers', close)}>Drivers</button>
          <button className={styles.navBtn} onClick={() => scrollTo('tech', close)}>Tech</button>
          <Link to="/business-model" className={styles.investorLink} onClick={close}>Investors</Link>
          <Link to="/coming-soon" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem' }} onClick={close}>
            Sign Up
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
