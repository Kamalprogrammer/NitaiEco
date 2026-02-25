import React from 'react';

export default function StudentRecordsSection({ data }) {
    return (
        <section className="erp-students" id="students">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="students-layout">
                    <div className="students-flow-visual crm-glass">
                        <div className="flow-node from">CRM</div>
                        <div className="flow-connector">
                            <div className="flow-particle" />
                        </div>
                        <div className="flow-node to">ERP</div>
                        <div className="flow-label">Admission Sync</div>
                    </div>

                    <div className="students-card crm-clay">
                        <div className="student-profile-mock">
                            <div className="profile-header">
                                <div className="profile-avatar" />
                                <div className="profile-info">
                                    <div className="info-line" />
                                    <div className="info-line short" />
                                </div>
                                <div className="status-badge">Active</div>
                            </div>
                            <div className="profile-details">
                                {data.right.features.map((f, i) => (
                                    <div key={i} className="detail-item">
                                        <span className="check">✓</span>
                                        <span className="text">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="read-only-overlay">
                                <span>🔒 READ ONLY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
