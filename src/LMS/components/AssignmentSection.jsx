import AnimatedIcon from './AnimatedSVGs';

/* ============================================
   Assignment Section — AI Assessment Creation
   ============================================ */
export default function AssignmentSection({ data }) {
    return (
        <section className="assignment-section" id="assignments">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">{data.sectionTag}</span>
                    <h2 className="section-title">{data.title}</h2>
                    <p className="section-subtitle">{data.subtitle}</p>
                </div>

                {/* Assessment Type Cards */}
                <div className="assignment-cards">
                    {data.types.map((type, i) => (
                        <div
                            key={i}
                            className="assignment-card clay-card"
                            style={{ '--card-accent': type.accent, animationDelay: `${i * 0.15}s` }}
                        >
                            <div className="assignment-card-icon">
                                <AnimatedIcon name={type.icon} size={44} />
                            </div>
                            <h3 className="assignment-card-title">{type.title}</h3>
                            <p className="assignment-card-desc">{type.desc}</p>
                            <div className="assignment-card-shine" />
                        </div>
                    ))}
                </div>

                {/* AI Flow Visual */}
                <div className="assignment-flow clay-card">
                    <div className="assignment-flow-inner">
                        <div className="flow-step-item">
                            <div className="flow-step-circle">
                                <AnimatedIcon name="upload" size={28} />
                            </div>
                            <span>Syllabus Input</span>
                        </div>
                        <div className="flow-step-arrow">
                            <svg width="40" height="12" viewBox="0 0 40 12">
                                <line x1="0" y1="6" x2="32" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="svg-dash-animate" />
                                <polygon points="32,2 40,6 32,10" fill="currentColor" opacity="0.6" />
                            </svg>
                        </div>
                        <div className="flow-step-item flow-step-ai">
                            <div className="flow-step-circle ai-glow">
                                <AnimatedIcon name="brain" size={28} />
                            </div>
                            <span>AI Engine</span>
                        </div>
                        <div className="flow-step-arrow">
                            <svg width="40" height="12" viewBox="0 0 40 12">
                                <line x1="0" y1="6" x2="32" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="svg-dash-animate" />
                                <polygon points="32,2 40,6 32,10" fill="currentColor" opacity="0.6" />
                            </svg>
                        </div>
                        <div className="flow-step-item">
                            <div className="flow-step-circle">
                                <AnimatedIcon name="document" size={28} />
                            </div>
                            <span>Assessment</span>
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="assignment-highlights">
                    {data.highlights.map((highlight, i) => (
                        <div key={i} className="assignment-highlight" style={{ animationDelay: `${i * 0.08}s` }}>
                            <span className="highlight-check">✦</span>
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
