import AnimatedIcon from './AnimatedSVGs';

/* ============================================
   Upload Content Section — Two-Column Layout
   ============================================ */
export default function UploadSection({ data }) {
    return (
        <section className="upload-section" id="upload">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">{data.sectionTag}</span>
                    <h2 className="section-title">{data.title}</h2>
                    <p className="section-subtitle">{data.subtitle}</p>
                </div>

                <div className="upload-grid">
                    {/* Left Column — Flow Steps */}
                    <div className="upload-flow">
                        {data.steps.map((step, i) => (
                            <div key={i} className="upload-step clay-card" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="upload-step-number">{step.step}</div>
                                <div className="upload-step-content">
                                    <h4 className="upload-step-title">{step.title}</h4>
                                    <p className="upload-step-desc">{step.desc}</p>
                                </div>
                                {i < data.steps.length - 1 && (
                                    <div className="upload-step-connector">
                                        <div className="connector-line" />
                                        <div className="connector-dot" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column — Visual + Features */}
                    <div className="upload-visual">
                        <div className="upload-visual-card clay-card">
                            {/* Animated Flow Diagram */}
                            <div className="upload-flow-diagram">
                                <div className="flow-node flow-teacher">
                                    <AnimatedIcon name="users" size={36} />
                                    <span>Teacher</span>
                                </div>
                                <div className="flow-connector-horizontal">
                                    <div className="flow-particle" />
                                    <div className="flow-particle" style={{ animationDelay: '0.5s' }} />
                                    <div className="flow-particle" style={{ animationDelay: '1s' }} />
                                </div>
                                <div className="flow-node flow-ai">
                                    <AnimatedIcon name="brain" size={36} />
                                    <span>AI Engine</span>
                                </div>
                                <div className="flow-connector-horizontal">
                                    <div className="flow-particle" />
                                    <div className="flow-particle" style={{ animationDelay: '0.5s' }} />
                                    <div className="flow-particle" style={{ animationDelay: '1s' }} />
                                </div>
                                <div className="flow-node flow-student">
                                    <AnimatedIcon name="graduation" size={36} />
                                    <span>Student</span>
                                </div>
                            </div>

                            {/* Feature Tags */}
                            <div className="upload-features">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="upload-feature-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                                        <span className="feature-tag-dot" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
