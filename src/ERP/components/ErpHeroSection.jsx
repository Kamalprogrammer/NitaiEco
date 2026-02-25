import React, { useState, useEffect, useCallback } from 'react';
import ErpIcon from './ErpAnimatedSVGs';

export default function ErpHeroSection({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const cycleText = useCallback(() => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % data.rotatingTexts.length);
            setIsAnimating(false);
        }, 400);
    }, [data.rotatingTexts.length]);

    useEffect(() => {
        const interval = setInterval(cycleText, 3500);
        return () => clearInterval(interval);
    }, [cycleText]);

    return (
        <section className="erp-hero" id="hero">
            <div className="erp-hero-bg">
                <div className="erp-hero-grid" />
                <div className="erp-hero-orbs">
                    <div className="erp-orb erp-orb-1" />
                    <div className="erp-orb erp-orb-2" />
                </div>
            </div>

            <div className="erp-container erp-hero-inner">
                <div className="erp-hero-content">
                    <div className="erp-hero-badge">
                        <span className="badge-dot" />
                        {data.badge}
                    </div>
                    <h1 className="erp-hero-title">
                        <span className="title-static">{data.staticText}</span>
                        <span className={`title-rotate ${isAnimating ? 'text-exit' : 'text-enter'}`}>
                            {data.rotatingTexts[activeIndex]}
                        </span>
                    </h1>
                    <p className="erp-hero-subtitle">{data.subtitle}</p>
                    <div className="erp-hero-btns">
                        <button className="erp-btn-primary">{data.primaryCta}</button>
                        <button className="erp-btn-secondary">{data.secondaryCta}</button>
                    </div>
                </div>

                <div className="erp-hero-visual">
                    <div className="erp-dashboard-preview">
                        {data.floatingCards.map((card, i) => (
                            <div key={i} className={`erp-float-card erp-float-card-${i}`} style={{ '--accent': card.accent }}>
                                <div className="float-card-icon">
                                    <ErpIcon name={card.icon} size={24} />
                                </div>
                                <span className="float-card-title">{card.title}</span>
                            </div>
                        ))}
                        <div className="erp-dashboard-main crm-glass">
                            <div className="dashboard-header">
                                <div className="dot red" /><div className="dot yellow" /><div className="dot green" />
                            </div>
                            <div className="dashboard-body">
                                <div className="bar-chart">
                                    <div className="bar" style={{ height: '60%' }} />
                                    <div className="bar" style={{ height: '80%' }} />
                                    <div className="bar" style={{ height: '40%' }} />
                                    <div className="bar" style={{ height: '90%' }} />
                                </div>
                                <div className="list-mock">
                                    <div className="item" /><div className="item short" /><div className="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
