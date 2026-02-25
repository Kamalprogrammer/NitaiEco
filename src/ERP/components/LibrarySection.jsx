import React from 'react';

export default function LibrarySection({ data }) {
    return (
        <section className="erp-library" id="library">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="library-card crm-clay">
                    <div className="library-features">
                        {data.features.map((f, i) => (
                            <div key={i} className="lib-feature-item">
                                <span className="icon">📚</span>
                                {f}
                            </div>
                        ))}
                    </div>

                    <div className="library-flow">
                        {data.flow.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="flow-step-circle">
                                    <span className="step-text">{step}</span>
                                    {i < data.flow.length - 1 && <div className="step-connector" />}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
