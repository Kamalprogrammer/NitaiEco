import React from 'react';

export default function EcosystemSummarySection({ data }) {
    return (
        <section className="erp-ecosystem" id="ecosystem">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="ecosystem-cards">
                    {data.cards.map((card, i) => (
                        <div key={i} className="eco-card crm-glass">
                            <h3 className="eco-card-title">{card.title}</h3>
                            <p className="eco-card-desc">{card.description}</p>
                            <ul className="eco-card-features">
                                {card.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="eco-tagline-wrap crm-clay">
                    <p className="eco-tagline">{data.tagline}</p>
                </div>
            </div>
        </section>
    );
}
