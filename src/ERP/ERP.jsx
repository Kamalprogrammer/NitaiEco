import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import data from './erpData.json';
import ErpHeroSection from './components/ErpHeroSection';
import AcademicSetupSection from './components/AcademicSetupSection';
import StudentRecordsSection from './components/StudentRecordsSection';
import FinanceSection from './components/FinanceSection';
import TeacherRecordsSection from './components/TeacherRecordsSection';
import LibrarySection from './components/LibrarySection';
import TransportSection from './components/TransportSection';
import SportsSection from './components/SportsEventsSection';
import ReportingSection from './components/ReportingSection';
import GovernanceSection from './components/GovernanceSection';
import EcosystemSummarySection from './components/EcosystemSummarySection';
import './ERP.css';

function useReveal() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('erp-visible');
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
        <div ref={ref} className={`erp-reveal ${className}`}>
            {children}
        </div>
    );
}

export default function ERP() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="erp-page">
            {/* Nav */}
            <nav className={`erp-nav ${scrolled ? 'erp-nav-scrolled' : ''}`}>
                <div className="erp-nav-inner">
                    <div className="erp-nav-logo">
                        <div className="erp-logo-icon">N</div>
                        <div>
                            <div className="erp-logo-text">{data.nav.logo}</div>
                            <div className="erp-logo-tag">{data.nav.logoTagline}</div>
                        </div>
                    </div>
                    <ul className="erp-nav-links">
                        <li><Link to="/">LMS</Link></li>
                        <li><Link to="/crm">CRM</Link></li>
                        {data.nav.links.map((link) => (
                            <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
                        ))}
                    </ul>
                    <div className="erp-nav-actions">
                        <button className="erp-nav-cta">{data.nav.ctaText}</button>
                    </div>
                </div>
            </nav>

            <Reveal><ErpHeroSection data={data.hero} /></Reveal>
            <Reveal><AcademicSetupSection data={data.academicSetup} /></Reveal>
            <Reveal><StudentRecordsSection data={data.studentRecords} /></Reveal>
            <Reveal><FinanceSection data={data.finance} /></Reveal>
            <Reveal><TeacherRecordsSection data={data.teacherRecords} /></Reveal>
            <Reveal><LibrarySection data={data.library} /></Reveal>
            <Reveal><TransportSection data={data.transport} /></Reveal>
            <Reveal><SportsSection data={data.sports} /></Reveal>
            <Reveal><ReportingSection data={data.reporting} /></Reveal>
            <Reveal><GovernanceSection data={data.governance} /></Reveal>
            <Reveal><EcosystemSummarySection data={data.ecosystem} /></Reveal>

            {/* Footer */}
            <footer className="erp-footer">
                <div className="erp-container">
                    <div className="erp-footer-grid">
                        <div className="erp-footer-brand">
                            <div className="erp-footer-logo">
                                <div className="erp-logo-icon">N</div>
                                <div className="erp-footer-logo-text">{data.footer.logo}</div>
                            </div>
                            <p>{data.footer.tagline}</p>
                        </div>
                        <div className="erp-footer-col">
                            <h4>Products</h4>
                            <ul>{data.footer.products.map(p => <li key={p.name}><a href={p.href}>{p.name}</a></li>)}</ul>
                        </div>
                        <div className="erp-footer-col">
                            <h4>Company</h4>
                            <ul>{data.footer.company.map(c => <li key={c.name}><a href={c.href}>{c.name}</a></li>)}</ul>
                        </div>
                        <div className="erp-footer-col">
                            <h4>Contact</h4>
                            <div className="erp-footer-contact">
                                <span>{data.footer.contact.email}</span>
                                <span>{data.footer.contact.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="erp-footer-bottom">
                        {data.footer.copyright}
                    </div>
                </div>
            </footer>
        </div>
    );
}
