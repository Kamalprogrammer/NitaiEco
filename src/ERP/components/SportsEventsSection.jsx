import React from 'react';

export default function SportsSection({ data }) {
    return (
        <section className="erp-sports" id="sports">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="sports-layout">
                    <div className="sports-preview crm-glass">
                        <div className="preview-header">
                            <span className="event-label">Event Dashboard</span>
                            <h3>{data.example.event}</h3>
                        </div>
                        <div className="preview-materials">
                            {data.example.materials.map((m, i) => (
                                <div key={i} className="material-item">
                                    <div className="material-meta">
                                        <span className="name">{m.name}</span>
                                        <span className="count">{m.used} / {m.total}</span>
                                    </div>
                                    <div className="usage-bar">
                                        <div className="usage-fill" style={{ width: `${(m.used / m.total) * 100}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sports-features crm-clay">
                        <div className="feature-grid">
                            {data.features.map((f, i) => (
                                <div key={i} className="sport-feature-badge">
                                    <span className="dot" />
                                    {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
