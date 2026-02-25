import AnimatedIcon from './AnimatedSVGs';

/* ============================================
   Auth Section — Claymorphic Bento-Grid
   ============================================ */
export default function AuthSection({ data }) {
    return (
        <section className="auth-section" id="auth">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">{data.sectionTag}</span>
                    <h2 className="section-title">{data.title}</h2>
                    <p className="section-subtitle">{data.subtitle}</p>
                </div>

                <div className="auth-bento-grid">
                    {data.cards.map((card) => (
                        <div
                            key={card.id}
                            className={`auth-card clay-card ${card.wide ? 'auth-card-wide' : ''}`}
                            style={{ '--card-accent': card.accent }}
                        >
                            <div className="auth-card-glow" />
                            <div className="auth-card-icon-wrap">
                                <AnimatedIcon name={card.icon} size={40} className="auth-icon" />
                            </div>
                            <h3 className="auth-card-title">{card.title}</h3>
                            <p className="auth-card-desc">{card.desc}</p>
                            <div className="auth-card-accent-line" />
                        </div>
                    ))}
                </div>

                {/* Connection Visual */}
                <div className="auth-connection">
                    <div className="auth-connection-line">
                        <div className="auth-connection-dot" />
                        <div className="auth-connection-dot" />
                        <div className="auth-connection-dot" />
                    </div>
                    <span className="auth-connection-label">Encrypted End-to-End</span>
                </div>
            </div>
        </section>
    );
}
