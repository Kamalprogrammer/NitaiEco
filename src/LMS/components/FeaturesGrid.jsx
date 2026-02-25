import AnimatedIcon from './AnimatedSVGs';

/* ============================================
   Features Grid — Bento-Grid All Features
   ============================================ */
export default function FeaturesGrid({ data }) {
    return (
        <section className="features-grid-section" id="features">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">{data.sectionTag}</span>
                    <h2 className="section-title">{data.title}</h2>
                    <p className="section-subtitle">{data.subtitle}</p>
                </div>

                <div className="features-bento">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className="feature-bento-card clay-card"
                            style={{ animationDelay: `${i * 0.06}s` }}
                        >
                            <div className="feature-bento-icon">
                                <AnimatedIcon name={item.icon} size={36} />
                            </div>
                            <h4 className="feature-bento-title">{item.title}</h4>
                            <p className="feature-bento-desc">{item.desc}</p>
                            <div className="feature-bento-hover-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
