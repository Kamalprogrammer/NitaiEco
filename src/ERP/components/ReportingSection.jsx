import React from 'react';
import ErpIcon from './ErpAnimatedSVGs';

export default function ReportingSection({ data }) {
    return (
        <section className="erp-reporting" id="reports">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="reporting-grid">
                    {data.reports.map((report, i) => (
                        <div key={i} className="report-card crm-clay">
                            <div className="report-icon">
                                <ErpIcon name={report.icon} size={24} />
                            </div>
                            <h3 className="report-title">{report.title}</h3>
                            <div className="report-preview">
                                <div className="p-row-h" />
                                <div className="p-row" /><div className="p-row" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
