import CrmIcon from './CrmAnimatedSVGs';

/* ============================================
   Admission Conversion — 3 Glass Panels + Flow
   (The Strongest Sales Section)
   ============================================ */
export default function AdmissionSection({ data }) {
    return (
        <section className="crm-admission" id="admissions">
            <div className="crm-container">
                <div className="crm-section-head">
                    <span className="crm-tag">{data.sectionTag}</span>
                    <h2 className="crm-section-title">{data.title}</h2>
                    <p className="crm-section-sub">{data.subtitle}</p>
                </div>

                {/* 3 Connected Panels */}
                <div className="admission-panels">
                    {data.panels.map((panel, i) => (
                        <div key={panel.id} className="admission-panel-group">
                            <div
                                className="admission-panel crm-glass"
                                style={{ '--panel-accent': panel.accent, animationDelay: `${i * 0.2}s` }}
                            >
                                <div className="admission-panel-icon">
                                    <CrmIcon name={panel.icon} size={48} />
                                </div>
                                <h3 className="admission-panel-title">{panel.title}</h3>
                                <p className="admission-panel-desc">{panel.desc}</p>

                                {/* Panel-specific visuals */}
                                {panel.id === 'toggle' && (
                                    <div className="admission-visual">
                                        <div className="mock-toggle">
                                            <div className="mock-toggle-track">
                                                <div className="mock-toggle-thumb" />
                                            </div>
                                            <span>Admitted</span>
                                        </div>
                                        <div className="mock-permission">
                                            <CrmIcon name="shield" size={16} />
                                            <span>Admin Only</span>
                                        </div>
                                    </div>
                                )}
                                {panel.id === 'lock' && (
                                    <div className="admission-visual">
                                        <div className="mock-lock-card">
                                            <div className="mock-lock-lines">
                                                <span /><span /><span />
                                            </div>
                                            <div className="mock-lock-icon">🔒</div>
                                        </div>
                                    </div>
                                )}
                                {panel.id === 'migrate' && (
                                    <div className="admission-visual">
                                        <div className="mock-migration">
                                            <div className="mock-db mock-db-lead">Lead DB</div>
                                            <div className="mock-migrate-arrow">
                                                <div className="mock-migrate-particle" />
                                                <div className="mock-migrate-particle" style={{ animationDelay: '0.4s' }} />
                                                <div className="mock-migrate-particle" style={{ animationDelay: '0.8s' }} />
                                            </div>
                                            <div className="mock-db mock-db-student">Student DB</div>
                                        </div>
                                    </div>
                                )}

                                <div className="admission-panel-glow" />
                            </div>

                            {/* Connector between panels */}
                            {i < data.panels.length - 1 && (
                                <div className="admission-connector">
                                    <div className="admission-connector-line" />
                                    <div className="admission-connector-particle" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Sub-Features */}
                <div className="admission-features">
                    {data.features.map((f, i) => (
                        <div key={i} className="admission-feature" style={{ animationDelay: `${i * 0.08}s` }}>
                            <span className="admission-feature-star">✦</span>
                            <span>{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
