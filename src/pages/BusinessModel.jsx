import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import styles from './BusinessModel.module.css'

export default function BusinessModel() {
  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.brand}>
          <Logo size={32} />
          <span>SwingBy</span>
        </Link>
        <Link to="/coming-soon?type=investor" className="btn btn-orange" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
          Request Deck →
        </Link>
      </nav>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '6rem' }}>

        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">Investor Overview</div>
          <h1>SwingBy Business Model</h1>
          <p>
            Crowdsourced last-mile return logistics. AI-dispatched. Bay Area-first. Built to scale.
            Pre-seed stage · Looking for founding investment.
          </p>
          <Link to="/coming-soon?type=investor" className="btn btn-orange" style={{ marginTop: '1.5rem' }}>
            📊 Request Full Investor Deck
          </Link>
        </div>

        {/* ── EXECUTIVE SUMMARY ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>The Problem</div>
              <p>
                Americans returned <strong>$743 billion</strong> in retail goods in 2023 — nearly 14.5% of all purchases
                (NRF, 2024). In the Bay Area, a single return trip to a UPS Store or USPS post office
                costs 30–45 minutes of drive time, amounting to <strong>$21–$32 in lost hourly value</strong> at the
                region's median wage of ~$43/hr (BLS, 2023). There is no on-demand solution.
              </p>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>The Solution</div>
              <p>
                SwingBy is an Uber-style gig platform that dispatches local drivers to pick up packages
                from customers' doors and drop them at the correct carrier location (Amazon, UPS, USPS,
                FedEx). The entire operations layer — dispatching, pricing, compliance, driver onboarding —
                is AI-automated. We need only drivers, not an operations headcount.
              </p>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>The Team</div>
              <p>
                Two-person founding team: <strong>Investor/Founder</strong> (business, operations, growth capital)
                and <strong>Engineering Co-Founder / CTO</strong> (full product build, AI infrastructure, 
                mobile and backend engineering). Lean by design. Operator-to-headcount ratio 
                rivals any logistics startup in history.
              </p>
            </div>
          </div>
        </section>

        {/* ── MARKET SIZE ───────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Market Opportunity</h2>
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
              <div className={styles.marketLabel}>TAM</div>
              <div className={styles.marketValue}>$743B+</div>
              <div className={styles.marketDesc}>Total US retail returns annually (NRF, 2024)</div>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketLabel}>SAM</div>
              <div className={styles.marketValue}>$18B</div>
              <div className={styles.marketDesc}>California e-commerce return logistics addressable market (estimated ~2.4% of US total, proportional to CA GDP share)</div>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketLabel}>SOM — Year 1</div>
              <div className={styles.marketValue}>$1.2M</div>
              <div className={styles.marketDesc}>Bay Area pilot: 50 drivers × 20 stops/day × $8 avg × 250 operating days. Realistic first-year gross revenue target.</div>
            </div>
          </div>
          <div className={styles.marketNote}>
            The US parcel delivery market is valued at <strong>$155 billion</strong> (Pitney Bowes Parcel Shipping Index, 2023)
            and growing at ~7% CAGR. E-commerce return volume is growing faster — online return rates
            (~17.6%) significantly exceed in-store rates (~10%) (NRF Consumer Returns Report, 2023).
          </div>
        </section>

        {/* ── UNIT ECONOMICS ────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Unit Economics</h2>
          <div className={styles.unitGrid}>
            <div className={styles.unitPanel}>
              <h3>Per Pickup</h3>
              <div className={styles.unitTable}>
                <div className={styles.unitRow}>
                  <span>Customer price (single package)</span>
                  <strong>$8.00</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Driver payout (75% of revenue)</span>
                  <strong style={{ color: '#FF6B35' }}>−$6.00</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Platform margin</span>
                  <strong style={{ color: '#00D4FF' }}>$2.00 (25%)</strong>
                </div>
                <div className={styles.unitRow} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                  <span>Bundle pricing (2–4 pkgs) — avg per package</span>
                  <strong>$6.00</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Platform margin on bundle</span>
                  <strong style={{ color: '#00D4FF' }}>$1.50 (25%)</strong>
                </div>
              </div>
            </div>
            <div className={styles.unitPanel}>
              <h3>Driver Economics</h3>
              <div className={styles.unitTable}>
                <div className={styles.unitRow}>
                  <span>Stops per hour (AI-optimized Bay Area route)</span>
                  <strong>6–10</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Gross driver pay per hour</span>
                  <strong>$36–$60</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Less: vehicle expense (IRS $0.67/mi × ~5 mi/hr)</span>
                  <strong style={{ color: '#FF6B35' }}>−$3.35</strong>
                </div>
                <div className={`${styles.unitRow} ${styles.unitHighlight}`}>
                  <span>Net driver hourly (vs SF min wage $18.67/hr)</span>
                  <strong>$33–$57/hr</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Sources</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>IRS 2024; SF OLSE 2024; BLS</span>
                </div>
              </div>
            </div>
            <div className={styles.unitPanel}>
              <h3>Platform Scale</h3>
              <div className={styles.unitTable}>
                <div className={styles.unitRow}>
                  <span>10 drivers × 30 stops/day</span>
                  <strong>$600/day platform rev</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>50 drivers × 30 stops/day</span>
                  <strong>$3,000/day</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>50 drivers, annualized (250 days)</span>
                  <strong>$750K/yr</strong>
                </div>
                <div className={`${styles.unitRow} ${styles.unitHighlight}`}>
                  <span>200 drivers (CA scale), annualized</span>
                  <strong>$3M+/yr</strong>
                </div>
                <div className={styles.unitRow}>
                  <span>Contribution margin (after driver pay)</span>
                  <strong>~25%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EQUITY & COMPENSATION ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Founding Team Structure</h2>
          <p style={{ color: 'var(--gray-300)', marginBottom: '2rem', maxWidth: '700px', lineHeight: 1.7 }}>
            Proposed initial structure for a two-person founding team at pre-seed stage.
            This is a starting point for negotiation — final terms depend on capital invested, 
            vesting schedules, and milestone agreements.
          </p>
          <div className={styles.equityGrid}>
            <div className={styles.equityCard}>
              <div className={styles.equityRole}>Founder / Investor</div>
              <div className={styles.equityPct}>50–60%</div>
              <div className={styles.equityDesc}>
                Provides seed capital, business development, operations oversight, and 
                investor relationships. Equity reflects both financial risk and market-building work.
                Standard vesting: 4-year cliff with 1-year cliff.
              </div>
              <div className={styles.equityItems}>
                <span>💰 Seed capital</span>
                <span>🤝 Biz dev & partnerships</span>
                <span>📣 Marketing & growth</span>
                <span>📋 Operations oversight</span>
              </div>
            </div>
            <div className={styles.equityCard} style={{ borderColor: 'rgba(0, 212, 255, 0.3)' }}>
              <div className={styles.equityRole} style={{ color: 'var(--teal)' }}>Engineering Co-Founder / CTO</div>
              <div className={styles.equityPct} style={{ color: 'var(--teal)' }}>30–40%</div>
              <div className={styles.equityDesc}>
                Builds the entire technical platform: iOS/Android driver and shipper apps, 
                AI dispatch engine, carrier integrations, backend infrastructure, and 
                OpenClaw automation layer. The product IS the company — this equity reflects that.
                Standard vesting: 4-year with 1-year cliff.
              </div>
              <div className={styles.equityItems}>
                <span>📱 Mobile apps (iOS + Android)</span>
                <span>🧠 AI dispatch engine</span>
                <span>🔗 Carrier API integrations</span>
                <span>🏗️ Full backend infrastructure</span>
              </div>
            </div>
            <div className={styles.equityCard} style={{ borderColor: 'rgba(255, 107, 53, 0.2)' }}>
              <div className={styles.equityRole} style={{ color: 'var(--orange)' }}>Option Pool</div>
              <div className={styles.equityPct} style={{ color: 'var(--orange)' }}>10%</div>
              <div className={styles.equityDesc}>
                Reserved for early employees, advisors, and future Series A dilution buffer. 
                Standard Silicon Valley pre-seed option pool. Keeps the cap table clean 
                for institutional investors at Series A.
              </div>
              <div className={styles.equityItems}>
                <span>👩‍💻 Engineering hires</span>
                <span>🧑‍💼 Advisors</span>
                <span>📈 Series A buffer</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVENUE STREAMS ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Revenue Streams</h2>
          <div className={styles.revenueGrid}>
            {[
              { icon: '📦', stream: 'Per-Pickup Commission (25%)', timeline: 'Day 1', desc: 'Primary revenue: 25% of every pickup fare. Scales linearly with driver volume and geographic expansion.' },
              { icon: '💲', stream: 'Surge Pricing Margin', timeline: 'Month 3', desc: 'Dynamic pricing during peak windows (Monday post-weekend returns, post-holiday surges) generates higher revenue per pickup without increasing driver costs proportionally.' },
              { icon: '🏢', stream: 'Business Accounts', timeline: 'Month 6', desc: 'Monthly subscription for offices with regular return volume. SaaS-like recurring revenue. Target: law firms, tech offices, medical practices — anyone doing 10+ returns/month.' },
              { icon: '🤝', stream: 'Carrier Partnership Fees', timeline: 'Year 2', desc: 'Revenue-sharing or referral fees from Amazon, UPS, or USPS for driving volume to their drop-off locations. Precedent: Roadie was acquired by UPS for this exact reason.' },
              { icon: '📊', stream: 'Return Logistics API', timeline: 'Year 2–3', desc: 'White-label SwingBy dispatch and pickup infrastructure for mid-market e-commerce brands that want to offer return pickup as a service to their customers.' },
            ].map(r => (
              <div key={r.stream} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{r.icon}</span>
                  <span className={styles.timelineBadge}>{r.timeline}</span>
                </div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{r.stream}</h4>
                <p style={{ color: 'var(--gray-300)', fontSize: '0.875rem', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COST STRUCTURE ────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cost Structure</h2>
          <div className={styles.costGrid}>
            <div className={styles.costCard}>
              <h3>Variable (scales with revenue)</h3>
              <div className={styles.costTable}>
                <div className={styles.costRow}><span>Driver payouts</span><strong>75% of gross</strong></div>
                <div className={styles.costRow}><span>Payment processing (Stripe ~2.9%)</span><strong>~3% of gross</strong></div>
                <div className={styles.costRow}><span>Insurance (per-trip liability)</span><strong>~2% of gross</strong></div>
                <div className={styles.costRow}><span>SMS/push notifications (Twilio)</span><strong>~$0.005/pickup</strong></div>
              </div>
            </div>
            <div className={styles.costCard}>
              <h3>Fixed (minimal by design)</h3>
              <div className={styles.costTable}>
                <div className={styles.costRow}><span>Cloud infrastructure (AWS/GCP)</span><strong>~$500–2K/mo</strong></div>
                <div className={styles.costRow}><span>AI/ML compute (dispatch engine)</span><strong>~$200–500/mo</strong></div>
                <div className={styles.costRow}><span>App store fees, domain, tools</span><strong>~$200/mo</strong></div>
                <div className={styles.costRow}><span>Legal & compliance (ongoing)</span><strong>~$500/mo</strong></div>
                <div className={styles.costRow} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
                  <span><strong>Engineering salary (when funded)</strong></span>
                  <strong>Market rate</strong>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.costNote}>
            <strong>Key advantage:</strong> The OpenClaw AI automation framework runs customer support, 
            driver onboarding triage, dispute resolution, compliance checks, and financial reporting 
            automatically. A traditional logistics startup would need 5–10 operations headcount 
            to run what SwingBy handles with software. This is the core structural advantage.
          </div>
        </section>

        {/* ── PATH TO PROFITABILITY ─────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Path to Profitability</h2>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <div className={styles.pathPhase}>Pre-Seed · 0–6 months</div>
              <div className={styles.pathGoal}>Prove unit economics</div>
              <ul>
                <li>Launch in 2–3 Bay Area zip codes</li>
                <li>Recruit 10–20 founding drivers</li>
                <li>Target: 500 pickups/month</li>
                <li>Platform revenue: ~$4K/month</li>
                <li>Cost: Engineering + infra only</li>
                <li>Goal: LTV/CAC > 3x</li>
              </ul>
            </div>
            <div className={styles.pathCard} style={{ borderColor: 'rgba(0, 212, 255, 0.25)' }}>
              <div className={styles.pathPhase} style={{ color: 'var(--teal)' }}>Seed · 6–18 months</div>
              <div className={styles.pathGoal}>Bay Area dominance</div>
              <ul>
                <li>50+ drivers, Bay Area-wide</li>
                <li>Launch business account tier</li>
                <li>Target: 5,000 pickups/month</li>
                <li>Platform revenue: ~$40K/month</li>
                <li>Breakeven on operating expenses</li>
                <li>Raise Series A with proven metrics</li>
              </ul>
            </div>
            <div className={styles.pathCard} style={{ borderColor: 'rgba(255, 107, 53, 0.2)' }}>
              <div className={styles.pathPhase} style={{ color: 'var(--orange)' }}>Series A · 18–36 months</div>
              <div className={styles.pathGoal}>California & beyond</div>
              <ul>
                <li>LA, San Diego, Sacramento markets</li>
                <li>200+ drivers statewide</li>
                <li>Target: 50,000+ pickups/month</li>
                <li>Platform revenue: $400K+/month</li>
                <li>Carrier partnership deals in motion</li>
                <li>Acquisition conversations begin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── COMPARABLE EXITS ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comparable Exits & Acquisitions</h2>
          <p style={{ color: 'var(--gray-300)', marginBottom: '2rem', lineHeight: 1.7 }}>
            The last-mile logistics space has seen significant strategic acquisitions from carriers and e-commerce giants 
            looking to own the return experience. SwingBy is positioned to be the same kind of target.
          </p>
          <div className={styles.exitsGrid}>
            {[
              { co: 'Roadie', acquirer: 'Acquired by UPS (2021)', amount: 'Undisclosed', desc: 'Crowdsourced delivery startup. UPS acquired for last-mile gig network. Direct analog to SwingBy.' },
              { co: 'Deliv', acquirer: 'Acquired by Target (2020)', amount: 'Undisclosed', desc: 'Same-day delivery marketplace. Acquired for tech and driver network. Validates the gig-logistics acquisition thesis.' },
              { co: 'Happy Returns', acquirer: 'Acquired by PayPal (2021)', amount: 'Undisclosed', desc: 'Return logistics startup. PayPal paid a premium for return infrastructure. Shows major players want to own returns.' },
              { co: 'Optoro', acquirer: 'Raised $140M+', amount: '$140M', desc: 'Return logistics software. Raised significant capital on the return management thesis alone. Market validation.' },
            ].map(e => (
              <div key={e.co} className={styles.exitCard}>
                <div className={styles.exitCo}>{e.co}</div>
                <div className={styles.exitAcquirer}>{e.acquirer}</div>
                {e.amount !== 'Undisclosed' && <div className={styles.exitAmount}>{e.amount}</div>}
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.exitNote}>
            Sources: Crunchbase, TechCrunch, press releases. Acquisition amounts for Roadie and Deliv were not publicly disclosed.
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <h2>Interested in investing?</h2>
          <p>
            We're raising a pre-seed round to fund Bay Area pilot operations, app development, 
            and the first 6 months of driver incentives. If you want to be part of building 
            the infrastructure of returns — let's talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/coming-soon?type=investor" className="btn btn-orange" style={{ fontSize: '1.05rem' }}>
              📊 Request Full Investor Deck
            </Link>
            <Link to="/" className="btn btn-outline" style={{ fontSize: '1.05rem' }}>
              ← Back to Site
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)', fontSize: '0.85rem', position: 'relative', zIndex: 1 }}>
        © 2025 SwingBy · Bay Area, California · All figures based on publicly available data
      </footer>
    </div>
  )
}
