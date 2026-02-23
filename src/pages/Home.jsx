import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'

// Intersection observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function AnimSection({ children, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`${styles.animSection} ${inView ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  )
}

// ── STAT CARD ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, source }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
      {source && <div className={styles.statSource}>{source}</div>}
    </div>
  )
}

// ── STEP CARD ─────────────────────────────────────────────────────────────────
function StepCard({ num, icon, title, desc }) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepCardHeader}>
        <div className={styles.stepNum}>{num}</div>
        <div className={styles.stepIcon}>{icon}</div>
        <h4>{title}</h4>
      </div>
      <p>{desc}</p>
    </div>
  )
}

// ── FEATURE CARD ──────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="card">
      <div className={styles.featureIcon}>{icon}</div>
      <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{title}</h4>
      <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
          <div className={styles.grid} />
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Now Recruiting Founding Drivers · Bay Area, CA
            </div>
            <h1 className={styles.heroH1}>
              We swing by.<br />
              <span className="gradient-text">You carry on.</span>
            </h1>
            <p className={styles.heroSub}>
              SwingBy is the AI-powered gig platform that sends a driver to your door to handle 
              your Amazon returns, UPS drop-offs, and USPS pickups — so you never waste another 
              afternoon stuck in a carrier line.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/coming-soon?type=shipper" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
                📦 I Ship Packages
              </Link>
              <Link to="/coming-soon?type=driver" className="btn btn-orange" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
                🚗 I Want to Drive
              </Link>
              <Link to="/business-model" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                📊 Investor Deck →
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <span>🗺️ Launching in Silicon Valley</span>
              <span>·</span>
              <span>⚡ AI-Dispatched</span>
              <span>·</span>
              <span>🔁 All Carriers</span>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollDot} />
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section className="section" id="problem">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label">The Problem</div>
              <h2>Returns are a <span className="gradient-text">$743 billion headache.</span></h2>
              <p className={styles.sectionSub}>
                Americans make trillions of trips to UPS Stores, post offices, and Whole Foods 
                drop-off points every year. Each trip costs real time, real money, and real carbon.
              </p>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.statsGrid}>
              <StatCard
                value="$743B"
                label="in US retail returns in 2023"
                source="National Retail Federation, 2024"
              />
              <StatCard
                value="17.6%"
                label="of all online purchases are returned"
                source="NRF Consumer Returns in the Retail Industry, 2023"
              />
              <StatCard
                value="~30–45 min"
                label="average round-trip to a carrier drop-off in the Bay Area"
                source="Google Maps traffic data, Bay Area estimates"
              />
              <StatCard
                value="$21–$32"
                label="in lost time value per trip (Bay Area median wage: ~$43/hr)"
                source="BLS Occupational Employment Statistics, 2023"
              />
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.problemCallout}>
              <div className={styles.problemIcon}>📦</div>
              <div>
                <h3>The Bay Area has <span className="gradient-text">3x the national average</span> of e-commerce shoppers</h3>
                <p>
                  With one of the highest concentrations of tech-savvy, time-poor professionals in the world, 
                  Silicon Valley is ground zero for the return logistics problem. High earners don't want 
                  to spend their lunch breaks in a UPS line. They'll pay for someone to do it.
                </p>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── THE SOLUTION ─────────────────────────────────────────────────── */}
      <section className={`section ${styles.solutionSection}`} id="how-it-works">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label">How It Works</div>
              <h2>Simple for shippers. <span className="gradient-text">Lucrative for drivers.</span></h2>
            </div>
          </AnimSection>

          <div className={styles.twoCol}>
            {/* Shipper flow */}
            <AnimSection>
              <div className={styles.flowPanel}>
                <h3 style={{ color: 'var(--teal)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                  📦 For Shippers
                </h3>
                <div className={styles.steps}>
                  <StepCard num="1" icon="📱" title="Open the app" desc="Schedule a pickup in under 60 seconds. Select your carrier (Amazon, UPS, USPS, FedEx), drop-off location, and preferred time window." />
                  <StepCard num="2" icon="🚗" title="Driver comes to you" desc="A verified, rated SwingBy driver arrives at your door within your chosen window. They scan your package and take custody." />
                  <StepCard num="3" icon="📍" title="Track it live" desc="Real-time GPS tracking shows your package moving from your door to the carrier. You get a drop-off confirmation with timestamp." />
                  <StepCard num="4" icon="✅" title="Done. Carry on." desc="Carrier tracking number is linked automatically. Your return is in the system. You never left your desk." />
                </div>
              </div>
            </AnimSection>

            {/* Driver flow */}
            <AnimSection>
              <div className={styles.flowPanel}>
                <h3 style={{ color: 'var(--orange)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                  🚗 For Drivers
                </h3>
                <div className={styles.steps}>
                  <StepCard num="1" icon="📲" title="Sign up & get verified" desc="Apply online, pass a background check, and get your SwingBy driver kit. The whole process takes less than a week." />
                  <StepCard num="2" icon="🗺️" title="Our AI builds your route" desc="The dispatch engine clusters nearby pickups into efficient routes. More stops per hour means more money — with less driving." />
                  <StepCard num="3" icon="🏃" title="Run your route" desc="Pick up packages, drop them at the carrier. The app guides you turn-by-turn and handles all carrier check-in QR codes." />
                  <StepCard num="4" icon="💳" title="Get paid weekly" desc="Earnings are deposited weekly. No waiting. No games. See your earnings in real-time in the driver app." />
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── WHY NOW ──────────────────────────────────────────────────────── */}
      <section className="section" id="why-now">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label">Why Now</div>
              <h2>Three forces are <span className="gradient-text">colliding right now.</span></h2>
              <p className={styles.sectionSub}>
                The market conditions for SwingBy have never been better.
              </p>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.whyNowGrid}>
              <div className="card">
                <div className={styles.whyIcon}>📈</div>
                <h3>E-Commerce Returns Are Exploding</h3>
                <p>Online retail grew from 15% to over 20% of total US retail sales between 2019 and 2023 (US Census Bureau). The return volume has followed. The NRF projects return logistics costs to exceed $890 billion by 2024.</p>
                <div className={styles.whySource}>Source: US Census Bureau, NRF</div>
              </div>
              <div className="card">
                <div className={styles.whyIcon}>👥</div>
                <h3>Gig Economy Has Critical Mass</h3>
                <p>73 million Americans identified as independent workers in 2023 (MBO Partners State of Independence). There's a massive, experienced pool of gig drivers who already know how to navigate app-based work — and want more earning opportunities.</p>
                <div className={styles.whySource}>Source: MBO Partners State of Independence, 2023</div>
              </div>
              <div className="card">
                <div className={styles.whyIcon}>🤖</div>
                <h3>AI Makes Automation Viable</h3>
                <p>Dynamic route optimization, demand prediction, and automated dispatching were previously only available to companies like Amazon and UPS at massive scale. AI tools in 2024 let a lean startup run carrier-grade logistics intelligence from day one.</p>
                <div className={styles.whySource}>Source: McKinsey Last-Mile Delivery Report, 2023</div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── FOR SHIPPERS ─────────────────────────────────────────────────── */}
      <section className={`section ${styles.shipperSection}`} id="for-shippers">
        <div className="container">
          <div className={styles.twoColText}>
            <AnimSection>
              <div>
                <div className="section-label">For Shippers</div>
                <h2>Built for <span className="gradient-text">people who value their time.</span></h2>
                <p style={{ color: 'var(--gray-300)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  The average Bay Area tech worker earns over <strong style={{ color: 'white' }}>$80/hour</strong>. 
                  A return trip to UPS costs them <strong style={{ color: 'white' }}>$40–$60 in productive time</strong>.
                  SwingBy costs a fraction of that — and it comes to your door.
                </p>

                <div className={styles.benefitList}>
                  {[
                    ['🕐', 'On your schedule', 'Same-day and next-day pickup windows. Book before noon, we\'ll be there today.'],
                    ['📦', 'Every major carrier', 'Amazon, UPS, USPS, FedEx — we drop off wherever your label says.'],
                    ['🔒', 'Fully insured pickups', 'Every SwingBy driver is background-checked, rated, and covered.'],
                    ['📱', 'Real-time tracking', 'From your door to the carrier drop-off, watch it happen live.'],
                    ['💰', 'Transparent pricing', 'Flat per-package pricing. No surge nonsense. Know the cost before you book.'],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className={styles.benefitRow}>
                      <span className={styles.benefitIcon}>{icon}</span>
                      <div>
                        <strong>{title}</strong>
                        <p>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            <AnimSection>
              <div className={styles.pricingCard}>
                <div className={styles.pricingHeader}>Simple Pricing</div>
                <div className={styles.pricingTiers}>
                  <div className={styles.tier}>
                    <div className={styles.tierName}>Single Drop</div>
                    <div className={styles.tierPrice}>$8<span>/package</span></div>
                    <p>1 package. We pick it up. Done.</p>
                    <Link to="/coming-soon?type=shipper" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Sign Up →</Link>
                  </div>
                  <div className={`${styles.tier} ${styles.tierFeatured}`}>
                    <div className={styles.tierBadge}>Most Popular</div>
                    <div className={styles.tierName}>Bundle</div>
                    <div className={styles.tierPrice}>$6<span>/package</span></div>
                    <p>2–4 packages per pickup. Bulk discount applies.</p>
                    <Link to="/coming-soon?type=shipper" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }}>Sign Up →</Link>
                  </div>
                  <div className={styles.tier}>
                    <div className={styles.tierName}>Business</div>
                    <div className={styles.tierPrice}>$4<span>/package</span></div>
                    <p>5+ packages. Scheduled daily pickup routes. Coming soon.</p>
                    <Link to="/coming-soon?type=business" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Waitlist →</Link>
                  </div>
                </div>
                <p className={styles.pricingNote}>
                  * Pricing based on market comparables (Roadie, TaskRabbit Bay Area rates). Final pricing TBD at launch.
                </p>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── FOR DRIVERS ──────────────────────────────────────────────────── */}
      <section className={`section ${styles.driverSection}`} id="for-drivers">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label" style={{ color: 'var(--orange)' }}>For Drivers</div>
              <h2>More stops. Less driving. <span className="gradient-text">Real money.</span></h2>
              <p className={styles.sectionSub}>
                SwingBy routes are designed by AI to maximize your stops-per-hour. 
                You're not chasing one delivery across town — you're running tight loops 
                through neighborhoods, stacking pickups, and maximizing your time.
              </p>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.earningsCard}>
              <h3>💰 Driver Earnings Breakdown</h3>
              <p className={styles.earningsDisclaimer}>Based on real Bay Area data. Estimates are projections, not guarantees.</p>
              <div className={styles.earningsTable}>
                <div className={styles.earningsRow}>
                  <span>Stops per hour (AI-optimized Bay Area route)</span>
                  <strong>6–10</strong>
                </div>
                <div className={styles.earningsRow}>
                  <span>Driver payout per stop (after 25% platform fee)</span>
                  <strong>$4.50–$6.00</strong>
                </div>
                <div className={styles.earningsRow}>
                  <span>Gross hourly earnings (6–10 stops × $5 avg)</span>
                  <strong>$30–$50/hr</strong>
                </div>
                <div className={styles.earningsRow}>
                  <span>Less: IRS-rate vehicle expense ($0.67/mi, ~5 mi/hr)</span>
                  <strong>−$3.35/hr</strong>
                </div>
                <div className={`${styles.earningsRow} ${styles.earningsTotal}`}>
                  <span>Net hourly (vs. SF min wage: $18.67/hr)</span>
                  <strong>$27–$47/hr</strong>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '1rem' }}>
                Sources: IRS Standard Mileage Rate 2024 ($0.67/mi) · SF Minimum Wage 2024 ($18.67/hr) · 
                Route density modeled on Roadie/DoorDash Bay Area driver reports
              </p>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.driverBenefits}>
              {[
                { icon: '⏰', title: 'Work when you want', desc: 'Set your own hours. Run morning routes, weekend routes, or whenever it fits your life.' },
                { icon: '🗺️', title: 'AI builds efficient routes', desc: 'No more cross-town drives for one package. Our dispatch engine clusters pickups to maximize your time.' },
                { icon: '📱', title: 'App does the heavy lifting', desc: 'Turn-by-turn nav, carrier QR codes, customer communication — the app handles it all.' },
                { icon: '💳', title: 'Weekly direct deposit', desc: 'Guaranteed weekly payout. No chasing payments, no algorithms hiding your earnings.' },
                { icon: '⭐', title: 'Build your reputation', desc: 'High-rated drivers get first pick of routes and premium time slots.' },
                { icon: '🤝', title: 'Ground floor opportunity', desc: 'Founding drivers get a founding rate and priority access as we scale.' },
              ].map(b => (
                <div key={b.title} className="card">
                  <span style={{ fontSize: '2rem' }}>{b.icon}</span>
                  <h4 style={{ margin: '0.8rem 0 0.4rem' }}>{b.title}</h4>
                  <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>

          <AnimSection>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/coming-soon?type=driver" className="btn btn-orange" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                🚗 Join the Founding Driver Waitlist
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── TECH & AI ─────────────────────────────────────────────────────── */}
      <section className="section" id="tech">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label">Technology</div>
              <h2>Carrier-grade logistics. <span className="gradient-text">Startup speed.</span></h2>
              <p className={styles.sectionSub}>
                SwingBy is an AI-native platform from day one. Most of the company runs on automation —
                the humans just drive.
              </p>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.techGrid}>
              <FeatureCard
                icon="🧠"
                title="AI Dispatch Engine"
                desc="Dynamic routing clusters pickups by neighborhood density, driver proximity, and carrier drop-off hours. The system auto-dispatches drivers in real time — no human dispatcher needed."
              />
              <FeatureCard
                icon="💲"
                title="Surge Pricing Intelligence"
                desc="Like Uber, demand-based pricing adjusts in real time. High-density time windows (Monday mornings, post-holiday) trigger price optimization to attract drivers and manage load."
              />
              <FeatureCard
                icon="📦"
                title="Universal Carrier Integration"
                desc="Direct API integrations with Amazon, UPS, USPS, and FedEx for real-time label scanning, chain-of-custody, and automated tracking number hand-off."
              />
              <FeatureCard
                icon="🔁"
                title="OpenClaw Automation Backend"
                desc="The entire operations layer — customer support triage, driver onboarding, compliance monitoring, and financial reporting — runs on OpenClaw AI agents. We scale headcount-free."
              />
              <FeatureCard
                icon="📊"
                title="Predictive Demand Modeling"
                desc="Purchase data patterns, return window timelines, and local events are factored into a demand forecast model that pre-positions drivers before the rush."
              />
              <FeatureCard
                icon="🔒"
                title="Trust & Safety Layer"
                desc="Background checks, real-time GPS verification, package scan accountability, and driver rating systems create a closed-loop safety system with zero human oversight required."
              />
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.techCallout}>
              <div className={styles.techCalloutInner}>
                <h3>We're building in public. <span className="gradient-text">Join us.</span></h3>
                <p>SwingBy is looking for engineers who want to build something that actually ships (pun intended). 
                React Native, Node.js, Postgres, and AI/ML infrastructure. Competitive equity. Small team. Real impact.</p>
                <Link to="/coming-soon?type=engineer" className="btn btn-outline">
                  👩‍💻 Engineering Roles Opening Soon
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── VISION / ROADMAP ─────────────────────────────────────────────── */}
      <section className="section" id="vision">
        <div className="container">
          <AnimSection>
            <div className={styles.sectionHeader}>
              <div className="section-label">Roadmap</div>
              <h2>Local first. <span className="gradient-text">National fast.</span></h2>
            </div>
          </AnimSection>

          <AnimSection>
            <div className={styles.phases}>
              <div className={`${styles.phase} ${styles.phaseActive}`}>
                <div className={styles.phaseNum}>Phase 1</div>
                <div className={styles.phaseTitle}>Bay Area Pilot</div>
                <div className={styles.phasePeriod}>2025</div>
                <ul>
                  <li>Launch in San Jose, Santa Clara, Sunnyvale, Palo Alto</li>
                  <li>Recruit 50 founding drivers</li>
                  <li>Onboard first 500 regular shippers</li>
                  <li>Prove unit economics with real data</li>
                  <li>Refine AI dispatch and routing</li>
                </ul>
              </div>
              <div className={styles.phase}>
                <div className={styles.phaseNum}>Phase 2</div>
                <div className={styles.phaseTitle}>California Scale</div>
                <div className={styles.phasePeriod}>2026</div>
                <ul>
                  <li>Expand to LA, San Diego, Sacramento</li>
                  <li>Launch business account tier</li>
                  <li>Partnership conversations with Amazon and UPS</li>
                  <li>Series A fundraise with proven metrics</li>
                </ul>
              </div>
              <div className={styles.phase}>
                <div className={styles.phaseNum}>Phase 3</div>
                <div className={styles.phaseTitle}>National Network</div>
                <div className={styles.phasePeriod}>2027+</div>
                <ul>
                  <li>Top 25 US metro markets</li>
                  <li>White-label logistics API for retailers</li>
                  <li>Enterprise contracts with national shippers</li>
                  <li>Potential acquisition target for UPS, Amazon, DHL</li>
                </ul>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg} />
        <div className="container">
          <AnimSection>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.2rem' }}>
                Be part of <span className="gradient-text">day one.</span>
              </h2>
              <p style={{ color: 'var(--gray-300)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
                Whether you ship packages, want to drive, or want to invest — 
                SwingBy is building the return logistics platform the Bay Area deserves.
              </p>
              <div className={styles.heroCtas}>
                <Link to="/coming-soon?type=shipper" className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
                  📦 I Ship Packages
                </Link>
                <Link to="/coming-soon?type=driver" className="btn btn-orange" style={{ fontSize: '1.05rem' }}>
                  🚗 I Want to Drive
                </Link>
                <Link to="/business-model" className="btn btn-outline" style={{ fontSize: '1.05rem' }}>
                  📊 Investor Info
                </Link>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div>
              <Logo size={48} />
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', maxWidth: '240px', lineHeight: 1.6 }}>
                AI-powered crowdsourced package pickup. Bay Area, CA. Coming 2025.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <div className={styles.footerColHead}>Product</div>
                <a href="#how-it-works">How It Works</a>
                <a href="#for-shippers">For Shippers</a>
                <a href="#for-drivers">For Drivers</a>
                <a href="#tech">Technology</a>
              </div>
              <div>
                <div className={styles.footerColHead}>Company</div>
                <Link to="/business-model">Business Model</Link>
                <Link to="/coming-soon?type=engineer">Careers</Link>
                <Link to="/coming-soon">Contact</Link>
              </div>
              <div>
                <div className={styles.footerColHead}>Sign Up</div>
                <Link to="/coming-soon?type=shipper">Shipper Waitlist</Link>
                <Link to="/coming-soon?type=driver">Driver Waitlist</Link>
                <Link to="/coming-soon?type=investor">Investor Deck</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2025 SwingBy. All rights reserved.</span>
            <span>Bay Area, California</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
