import { useState, useEffect, useCallback } from 'react';

/* ============================================
   Hero Section — 3D Animated Text Rotation
   ============================================ */
export default function HeroSection({ data }) {
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

    // Generate floating orbs for 3D background
    const orbs = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: 80 + Math.random() * 200,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 12 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.03 + Math.random() * 0.06,
    }));

    const gridLines = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        isHorizontal: i < 6,
        position: 10 + (i % 6) * 16,
        delay: i * 0.4,
    }));

    return (
        <section className="hero-section" id="hero">
            {/* 3D Background Effects */}
            <div className="hero-bg-effects">
                {orbs.map((orb) => (
                    <div
                        key={orb.id}
                        className="hero-orb"
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
                {gridLines.map((line) => (
                    <div
                        key={`grid-${line.id}`}
                        className={`hero-grid-line ${line.isHorizontal ? 'horizontal' : 'vertical'}`}
                        style={{
                            [line.isHorizontal ? 'top' : 'left']: `${line.position}%`,
                            animationDelay: `${line.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="hero-content-wrapper">
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    AI-Powered Education Platform
                </div>

                <h1 className="hero-headline">
                    <span className="hero-static-text">{data.staticText}</span>
                    <span className={`hero-rotating-text ${isAnimating ? 'exit' : 'enter'}`}>
                        {rotatingTexts[activeIndex]}
                    </span>
                </h1>

                <p className="hero-subtitle">{data.subtitle}</p>

                <div className="hero-ctas">
                    <button className="btn-primary">
                        {data.primaryCta}
                        <span className="btn-arrow">→</span>
                    </button>
                    <button className="btn-secondary">
                        {data.secondaryCta}
                    </button>
                </div>

                {/* Stats Row */}
                <div className="hero-stats">
                    {data.stats.map((stat, i) => (
                        <StatItem key={i} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ---- Stat Counter ----
function StatItem({ value, suffix, label }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = { current: null };

    useEffect(() => {
        const timer = setTimeout(() => setStarted(true), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!started) return;
        let startTime;
        const duration = 2200;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, value]);

    return (
        <div className="stat-item" ref={(el) => (ref.current = el)}>
            <div className="stat-value">{count}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
}
