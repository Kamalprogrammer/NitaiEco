import React from 'react';

export default function TeacherRecordsSection({ data }) {
    return (
        <section className="erp-teachers" id="teachers">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="teacher-card-wrap">
                    <div className="teacher-glass-card crm-glass">
                        <div className="teacher-header">
                            <div className="teacher-avatar">👤</div>
                            <div className="teacher-meta">
                                <h3>Reference Mapping</h3>
                                <p>Source: HRMS Control</p>
                            </div>
                        </div>
                        <div className="teacher-features-list">
                            {data.features.map((f, i) => (
                                <div key={i} className="teacher-feature">
                                    <span className="dot" />
                                    {f}
                                </div>
                            ))}
                        </div>
                        <div className="teacher-ref-id">REF_ID: TEA-2026-X</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
