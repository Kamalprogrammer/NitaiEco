import { useState, useEffect, useCallback } from 'react';
import CrmIcon from './CrmAnimatedSVGs';

/* ============================================
   CRM Hero Section — 3D Glassmorphic Cards
   + Rotating Headlines
   ============================================ */
export default function CrmHeroSection({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const rotatingTexts = data.rotatingTexts;

    const cycleText = useCallback(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % rotatingTexts.length);
            setIsAnimating(false);
        }, 400);
    }, [rotatingTexts.length]);

    useEffect(() => {
        const interval = setInterval(cycleText, 3500);
        return () => clearInterval(interval);
    }, [cycleText]);

    // Floating background orbs
    const orbs = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: 100 + Math.random() * 250,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * 6,
        opacity: 0.03 + Math.random() * 0.05,
    }));

    return (
        <section className="crm-hero" id="hero">
            {/* Animated Mesh Background */}
            <div className="crm-hero-bg">
                {orbs.map((orb) => (
                    <div
                        key={orb.id}
                        className="crm-orb"
                        style={{
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            left: `${orb.left}%`,
                            top: `${orb.top}%`,
                            animationDuration: `${orb.duration}s`,
                            animationDelay: `${orb.delay}s`,
                            opacity: orb.opacity,
                        }}
                    />
                ))}
                <div className="crm-hero-grid" />
            </div>

            <div className="crm-hero-inner">
                {/* Left: Text Content */}
                <div className="crm-hero-text">
                    <div className="crm-hero-badge">
                        <span className="crm-badge-dot" />
                        CRM Intelligence Platform
                    </div>

                    <h1 className="crm-headline">
                        <span className="crm-headline-static">{data.staticText}</span>
                        <span className={`crm-headline-rotate ${isAnimating ? 'text-exit' : 'text-enter'}`}>
                            {rotatingTexts[activeIndex]}
                        </span>
                    </h1>

                    <p className="crm-hero-sub">{data.subtitle}</p>

                    <div className="crm-hero-ctas">
                        <button className="crm-btn-primary">
                            {data.primaryCta}
                            <span className="crm-btn-arrow">→</span>
                        </button>
                        <button className="crm-btn-ghost">
                            {data.secondaryCta}
                        </button>
                    </div>
                </div>

                {/* Right: 3D Floating Cards */}
                <div className="crm-hero-cards">
                    {data.floatingCards.map((card, i) => (
                        <div
                            key={card.title}
                            className={`crm-float-card crm-float-card-${i}`}
                            style={{
                                '--float-accent': card.accent,
                                animationDelay: `${i * 0.6}s`,
                            }}
                        >
                            <div className="crm-float-card-inner">
                                <CrmIcon name={card.icon} size={32} />
                                <span>{card.title}</span>
                            </div>
                        </div>
                    ))}
                    {/* Connecting Lines */}
                    <svg className="crm-card-connections" viewBox="0 0 400 400" fill="none">
                        <line x1="120" y1="100" x2="280" y2="100" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="6 4" className="svg-dash-anim" />
                        <line x1="120" y1="300" x2="280" y2="300" stroke="rgba(99,102,241,0.15)" strokeWidth="1" strokeDasharray="6 4" className="svg-dash-anim" />
                        <line x1="100" y1="120" x2="100" y2="280" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="6 4" className="svg-dash-anim" />
                        <line x1="300" y1="120" x2="300" y2="280" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="6 4" className="svg-dash-anim" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
