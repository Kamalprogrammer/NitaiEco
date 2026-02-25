import CrmIcon from './CrmAnimatedSVGs';

/* ============================================
   Lead Ingestion Section — 4 Claymorphic Cards
   ============================================ */
export default function LeadIngestionSection({ data }) {
    return (
        <section className="crm-ingestion" id="features">
            <div className="crm-container">
                <div className="crm-section-head">
                    <span className="crm-tag">{data.sectionTag}</span>
                    <h2 className="crm-section-title">{data.title}</h2>
                    <p className="crm-section-sub">{data.subtitle}</p>
                </div>

                <div className="ingestion-grid">
                    {data.cards.map((card, i) => (
                        <div
                            key={card.id}
                            className="ingestion-card crm-clay"
                            style={{ '--card-accent': card.accent, animationDelay: `${i * 0.12}s` }}
                        >
                            <div className="ingestion-card-glow" />
                            <div className="ingestion-icon-wrap">
                                <CrmIcon name={card.icon} size={42} />
                            </div>
                            <h3 className="ingestion-card-title">{card.title}</h3>
                            <p className="ingestion-card-desc">{card.desc}</p>

                            {/* Mini visual per card */}
                            <div className="ingestion-card-visual">
                                {card.id === 'api' && (
                                    <div className="mini-flow">
                                        <span className="mini-dot" style={{ background: '#3B82F6' }} />
                                        <span className="mini-line" />
                                        <span className="mini-dot" style={{ background: '#8B5CF6' }} />
                                        <span className="mini-line" />
                                        <span className="mini-dot" style={{ background: '#10B981' }} />
                                    </div>
                                )}
                                {card.id === 'manual' && (
                                    <div className="mini-form">
                                        <div className="mini-input" />
                                        <div className="mini-input short" />
                                        <div className="mini-btn" />
                                    </div>
                                )}
                                {card.id === 'bulk' && (
                                    <div className="mini-upload">
                                        <div className="mini-drop-zone">
                                            <span>CSV</span>
                                            <span className="mini-upload-arrow">↑</span>
                                        </div>
                                    </div>
                                )}
                                {card.id === 'validation' && (
                                    <div className="mini-validation">
                                        <div className="mini-row valid"><span>✓</span> email@valid.com</div>
                                        <div className="mini-row invalid"><span>✗</span> bad-phone</div>
                                        <div className="mini-row valid"><span>✓</span> +91 98XXX</div>
                                    </div>
                                )}
                            </div>

                            <div className="ingestion-accent-bar" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
