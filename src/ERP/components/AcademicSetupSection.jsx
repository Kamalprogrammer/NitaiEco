import React from 'react';
import ErpIcon from './ErpAnimatedSVGs';

export default function AcademicSetupSection({ data }) {
    return (
        <section className="erp-academic" id="academic">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="academic-grid">
                    {data.cards.map((card, i) => (
                        <div key={card.id} className="academic-card crm-clay" style={{ '--card-acc': card.accent }}>
                            <div className="academic-card-icon">
                                <ErpIcon name={card.icon} size={32} />
                            </div>
                            <h3 className="academic-card-title">{card.title}</h3>
                            <div className="academic-card-visual">
                                <div className="hierarchy-dot" />
                                <div className="hierarchy-line" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="academic-logic-flow">
                    <div className="flow-step">Academic Year</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">Class</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">Section</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">Fee Structure</div>
                </div>
            </div>
        </section>
    );
}
