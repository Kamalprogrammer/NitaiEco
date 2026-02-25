import React from 'react';

export default function GovernanceSection({ data }) {
    return (
        <section className="erp-governance" id="governance">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="governance-layout">
                    <div className="roles-list crm-glass">
                        <h3>Supported Roles</h3>
                        <div className="roles-grid">
                            {data.roles.map((role, i) => (
                                <div key={i} className="role-item">
                                    <span className="role-icon">👤</span>
                                    {role}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="integration-diagram crm-clay">
                        <h3>Integration Flow</h3>
                        <div className="diag-flow">
                            {data.integrations.map((item, i) => (
                                <div key={i} className="diag-row">
                                    <span className="diag-from">{item.from}</span>
                                    <span className="diag-arrow">→</span>
                                    <span className="diag-to">{item.to}</span>
                                </div>
                            ))}
                            <div className="diag-overall">CRM → ERP → LMS</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
