import React from 'react';
import ErpIcon from './ErpAnimatedSVGs';

export default function TransportSection({ data }) {
    return (
        <section className="erp-transport" id="transport">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="transport-grid">
                    {data.cards.map((card, i) => (
                        <div key={i} className="transport-card crm-clay" style={{ '--card-acc': card.accent }}>
                            <div className="transport-icon-wrap">
                                <ErpIcon name={card.icon} size={32} />
                            </div>
                            <h3 className="transport-card-title">{card.title}</h3>
                            <div className="transport-mini-map">
                                <div className="map-line" />
                                <div className="map-node start" />
                                <div className="map-node end" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
