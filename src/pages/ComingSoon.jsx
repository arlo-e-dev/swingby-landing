import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Logo from '../components/Logo'

import styles from './ComingSoon.module.css'

const typeConfig = {
  shipper: {
    emoji: '📦',
    label: 'Shipper',
    headline: 'Never stand in a carrier line again.',
    sub: 'Join our shipper waitlist. When we launch in the Bay Area, you\'ll be first to get pickup credits.',
    cta: 'I\'m a Shipper — Notify Me',
    color: '#00D4FF',
  },
  driver: {
    emoji: '🚗',
    label: 'Driver',
    headline: 'Be a founding LoopBox driver.',
    sub: 'Founding drivers get priority routes, a higher founding rate, and early access to our AI-optimized dispatch app.',
    cta: 'I Want to Drive — Notify Me',
    color: '#FF6B35',
  },
  engineer: {
    emoji: '👩‍💻',
    label: 'Engineer',
    headline: 'Help us build the infrastructure of returns.',
    sub: 'We\'re looking for founding engineers who want real equity and a real product to ship.',
    cta: 'I\'m an Engineer — Notify Me',
    color: '#00E676',
  },
  investor: {
    emoji: '📊',
    label: 'Investor',
    headline: 'Get the LoopBox investor deck.',
    sub: 'We\'re raising a pre-seed round to prove Bay Area unit economics. Request our deck and a call.',
    cta: 'Request the Deck',
    color: '#FF6B35',
  },
  business: {
    emoji: '🏢',
    label: 'Business',
    headline: 'Daily pickup routes for your office.',
    sub: 'We\'re designing a business tier for offices with regular return volume. Get on the early access list.',
    cta: 'Get Early Access',
    color: '#00D4FF',
  },
}

export default function ComingSoon() {
  const [params] = useSearchParams()
  const type = params.get('type') || 'shipper'
  const config = typeConfig[type] || typeConfig.shipper

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className={styles.page}>
      {/* Background effects */}
      <div className={styles.bg}>
        <div className={styles.glow} style={{ background: `radial-gradient(circle, ${config.color}22 0%, transparent 70%)` }} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        {/* Nav */}
        <div className={styles.topBar}>
          <Link to="/" className={styles.back}>
            ← Back to LoopBox
          </Link>
        </div>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <Logo size={56} />
        </div>

        {/* Main card */}
        <div className={styles.card}>
          <div className={styles.cardBadge} style={{ borderColor: `${config.color}55`, color: config.color, background: `${config.color}11` }}>
            {config.emoji} {config.label} Waitlist
          </div>

          {!submitted ? (
            <>
              <h1 className={styles.headline}>{config.headline}</h1>
              <p className={styles.sub}>{config.sub}</p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className={styles.input}
                    style={{ '--focus-color': config.color }}
                  />
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    style={{ background: `linear-gradient(135deg, ${config.color} 0%, ${config.color}BB 100%)`, color: '#0A0F2C' }}
                    disabled={loading}
                  >
                    {loading ? '...' : config.cta}
                  </button>
                </div>
                <p className={styles.formNote}>
                  No spam. Just a heads-up when we go live. Unsubscribe anytime.
                </p>
              </form>

              <div className={styles.otherLinks}>
                {type !== 'shipper' && <Link to="/coming-soon?type=shipper">📦 I also ship packages</Link>}
                {type !== 'driver' && <Link to="/coming-soon?type=driver">🚗 I want to drive</Link>}
                {type !== 'investor' && <Link to="/business-model">📊 View business model</Link>}
              </div>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}>🎉</div>
              <h2>You're on the list!</h2>
              <p>We'll email <strong>{email}</strong> the moment we launch in the Bay Area.</p>
              <p style={{ marginTop: '0.5rem', color: 'var(--gray-500)' }}>
                Keep an eye out for updates. We're moving fast.
              </p>
              <Link to="/" className="btn btn-outline" style={{ marginTop: '2rem', display: 'inline-block' }}>
                ← Back to LoopBox
              </Link>
            </div>
          )}
        </div>

        {/* Footer note */}
        <div className={styles.footer}>
          <span>© 2025 LoopBox · Bay Area, CA</span>
          <span>·</span>
          <Link to="/business-model">Investor Info</Link>
          <span>·</span>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  )
}
