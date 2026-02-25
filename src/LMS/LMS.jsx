import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import data from './lmsData.json';
import HeroSection from './components/HeroSection';
import AuthSection from './components/AuthSection';
import UploadSection from './components/UploadSection';
import AssignmentSection from './components/AssignmentSection';
import PerformanceSection from './components/PerformanceSection';
import FeaturesGrid from './components/FeaturesGrid';
import './LMS.css';

/* ============================================
   NitAI LMS — Landing Page (Dark Mode)
   ============================================ */

// ---- Scroll Reveal Hook ----
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function RevealSection({ children, className = '', ...props }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`reveal ${className}`} {...props}>
            {children}
        </div>
    );
}

// ---- CTA Particles ----
function Particles({ count = 30 }) {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.3,
    }));

    return (
        <div className="cta-particles">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="cta-particle"
                    style={{
                        left: p.left,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        opacity: p.opacity,
                    }}
                />
            ))}
        </div>
    );
}

// ============================================
// MAIN LMS COMPONENT
// ============================================
export default function LMS() {
    const [scrolled, setScrolled] = useState(false);

    // ---- Navbar scroll effect ----
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="lms-page">

            {/* ===== NAVBAR ===== */}
            <nav className={`lms-nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-inner">
                    <div className="nav-logo">
                        <div className="nav-logo-icon">N</div>
                        <div>
                            <div className="nav-logo-text">{data.nav.logo}</div>
                            <div className="nav-logo-tag">{data.nav.logoTagline}</div>
                        </div>
                    </div>

                    <ul className="nav-links">
                        {data.nav.links.map((link) => (
                            <li key={link}><a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</a></li>
                        ))}
                        <li><Link to="/crm" className="nav-crm-link">CRM</Link></li>
                        <li><Link to="/erp" className="nav-erp-link">ERP</Link></li>
                    </ul>

                    <button className="nav-cta">{data.nav.ctaText}</button>

                    <button className="nav-mobile-toggle" aria-label="Toggle menu">
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* ===== HERO ===== */}
            <RevealSection>
                <HeroSection data={data.hero} />
            </RevealSection>

            {/* ===== AUTHENTICATION ===== */}
            <RevealSection>
                <AuthSection data={data.auth} />
            </RevealSection>

            {/* ===== UPLOAD CONTENT ===== */}
            <RevealSection>
                <UploadSection data={data.upload} />
            </RevealSection>

            {/* ===== ASSIGNMENTS ===== */}
            <RevealSection>
                <AssignmentSection data={data.assignments} />
            </RevealSection>

            {/* ===== PERFORMANCE ===== */}
            <RevealSection>
                <PerformanceSection data={data.performance} />
            </RevealSection>

            {/* ===== ALL FEATURES ===== */}
            <RevealSection>
                <FeaturesGrid data={data.features} />
            </RevealSection>

            {/* ===== FINAL CTA ===== */}
            <section className="cta-section">
                <Particles count={35} />
                <div className="cta-content">
                    <RevealSection>
                        <h2 className="cta-headline">{data.cta.headline}</h2>
                        <p className="cta-subtext">{data.cta.subtext}</p>
                        <div className="cta-buttons">
                            <button className="btn-cta-primary">{data.cta.primaryCta}</button>
                            <button className="btn-cta-secondary">{data.cta.secondaryCta}</button>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="section-container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="footer-logo-icon">N</div>
                                <div className="footer-logo-text">{data.footer.logo}</div>
                            </div>
                            <p>{data.footer.tagline}</p>
                            <div className="footer-social">
                                {data.footer.social.map((s) => (
                                    <a key={s.name} href={s.href} className="social-icon" aria-label={s.name}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Products</h4>
                            <ul>
                                {data.footer.products.map((p) => (
                                    <li key={p.name}><a href={p.href}>{p.name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                {data.footer.company.map((c) => (
                                    <li key={c.name}><a href={c.href}>{c.name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                {data.footer.resources.map((r) => (
                                    <li key={r.name}><a href={r.href}>{r.name}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <div className="footer-contact-item">
                                <span>✉️</span> {data.footer.contact.email}
                            </div>
                            <div className="footer-contact-item">
                                <span>📞</span> {data.footer.contact.phone}
                            </div>
                            <div className="footer-contact-item">
                                <span>📍</span> {data.footer.contact.address}
                            </div>
                            <button className="footer-demo-btn">
                                Book Demo <span>→</span>
                            </button>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>{data.footer.copyright}</span>
                        <span>Built with AI ✦ Designed for Education</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
