import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <Logo size={38} />
          <span className={styles.brandName}>SwingBy</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#for-shippers" onClick={() => setMenuOpen(false)}>Shippers</a>
          <a href="#for-drivers" onClick={() => setMenuOpen(false)}>Drivers</a>
          <a href="#tech" onClick={() => setMenuOpen(false)}>Tech</a>
          <Link to="/business-model" className={styles.investorLink} onClick={() => setMenuOpen(false)}>Investors</Link>
          <Link to="/coming-soon" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem' }} onClick={() => setMenuOpen(false)}>
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
