import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import data from './crmData.json';
import CrmHeroSection from './components/CrmHeroSection';
import LeadIngestionSection from './components/LeadIngestionSection';
import PipelineSection from './components/PipelineSection';
import AdmissionSection from './components/AdmissionSection';
import StudentLifecycleSection from './components/StudentLifecycleSection';
import GovernanceSection from './components/GovernanceSection';
import './CRM.css';

/* ============================================
   NitAI CRM — Landing Page (Dark Mode)
   ============================================ */

// ---- Scroll Reveal ----
function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('crm-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function Reveal({ children, className = '' }) {
    const ref = useReveal();
    return (
        <div ref={ref} className={`crm-reveal ${className}`}>
            {children}
        </div>
    );
}

// ---- CTA Particles ----
function CrmParticles({ count = 30 }) {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 8,
        opacity: 0.12 + Math.random() * 0.25,
    }));

    return (
        <div className="crm-cta-particles">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="crm-cta-particle"
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
// MAIN CRM COMPONENT
// ============================================
export default function CRM() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="crm-page">

            {/* ===== NAVBAR ===== */}
            <nav className={`crm-nav ${scrolled ? 'crm-nav-scrolled' : ''}`}>
                <div className="crm-nav-inner">
                    <div className="crm-nav-logo">
                        <div className="crm-logo-icon">N</div>
                        <div>
                            <div className="crm-logo-text">{data.nav.logo}</div>
                            <div className="crm-logo-tag">{data.nav.logoTagline}</div>
                        </div>
                    </div>

                    <ul className="crm-nav-links">
                        <li><Link to="/">LMS</Link></li>
                        {data.nav.links.map((link) => (
                            <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
                        ))}
                        <li><Link to="/erp" className="crm-nav-erp-badge">ERP</Link></li>
                    </ul>

                    <button className="crm-nav-cta">{data.nav.ctaText}</button>

                    <button className="crm-nav-burger" aria-label="Toggle menu">
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* ===== SECTION 1: HERO ===== */}
            <Reveal>
                <CrmHeroSection data={data.hero} />
            </Reveal>

            {/* ===== SECTION 2: LEAD INGESTION ===== */}
            <Reveal>
                <LeadIngestionSection data={data.leadIngestion} />
            </Reveal>

            {/* ===== SECTION 3: PIPELINE ===== */}
            <Reveal>
                <PipelineSection data={data.pipeline} />
            </Reveal>

            {/* ===== SECTION 4: ADMISSION ===== */}
            <Reveal>
                <AdmissionSection data={data.admission} />
            </Reveal>

            {/* ===== SECTION 5: STUDENT LIFECYCLE ===== */}
            <Reveal>
                <StudentLifecycleSection data={data.lifecycle} />
            </Reveal>

            {/* ===== SECTION 6: GOVERNANCE ===== */}
            <Reveal>
                <GovernanceSection data={data.governance} />
            </Reveal>

            {/* ===== CTA ===== */}
            <section className="crm-cta-section">
                <CrmParticles count={35} />
                <div className="crm-cta-content">
                    <Reveal>
                        <h2 className="crm-cta-headline">{data.cta.headline}</h2>
                        <p className="crm-cta-subtext">{data.cta.subtext}</p>
                        <div className="crm-cta-btns">
                            <button className="crm-btn-cta-primary">{data.cta.primaryCta}</button>
                            <button className="crm-btn-cta-ghost">{data.cta.secondaryCta}</button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="crm-footer">
                <div className="crm-container">
                    <div className="crm-footer-grid">
                        <div className="crm-footer-brand">
                            <div className="crm-footer-logo">
                                <div className="crm-logo-icon">N</div>
                                <div className="crm-footer-logo-text">{data.footer.logo}</div>
                            </div>
                            <p>{data.footer.tagline}</p>
                            <div className="crm-footer-social">
                                {data.footer.social.map((s) => (
                                    <a key={s.name} href={s.href} className="crm-social-icon" aria-label={s.name}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="crm-footer-col">
                            <h4>Products</h4>
                            <ul>{data.footer.products.map((p) => (
                                <li key={p.name}><a href={p.href}>{p.name}</a></li>
                            ))}</ul>
                        </div>

                        <div className="crm-footer-col">
                            <h4>Company</h4>
                            <ul>{data.footer.company.map((c) => (
                                <li key={c.name}><a href={c.href}>{c.name}</a></li>
                            ))}</ul>
                        </div>

                        <div className="crm-footer-col">
                            <h4>Resources</h4>
                            <ul>{data.footer.resources.map((r) => (
                                <li key={r.name}><a href={r.href}>{r.name}</a></li>
                            ))}</ul>
                        </div>

                        <div className="crm-footer-col">
                            <h4>Contact</h4>
                            <div className="crm-footer-contact">
                                <span>✉️ {data.footer.contact.email}</span>
                                <span>📞 {data.footer.contact.phone}</span>
                                <span>📍 {data.footer.contact.address}</span>
                            </div>
                            <button className="crm-footer-demo">
                                Book Demo <span>→</span>
                            </button>
                        </div>
                    </div>

                    <div className="crm-footer-bottom">
                        <span>{data.footer.copyright}</span>
                        <span>Built with AI ✦ Designed for Education</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
