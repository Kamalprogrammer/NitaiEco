import React from 'react';

export default function FinanceSection({ data }) {
    return (
        <section className="erp-finance" id="finance">
            <div className="erp-container">
                <div className="erp-section-head">
                    <span className="erp-tag">{data.tag}</span>
                    <h2 className="erp-section-title">{data.title}</h2>
                    <p className="erp-section-sub">{data.subtitle}</p>
                </div>

                <div className="finance-grid">
                    <div className="finance-card fee-man crm-clay">
                        <h3 className="card-title">{data.feeManagement.title}</h3>
                        <ul className="feature-list">
                            {data.feeManagement.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                        <div className="fee-visual">
                            <div className="receipt-mock">
                                <div className="receipt-line" />
                                <div className="receipt-line short" />
                                <div className="receipt-total" />
                            </div>
                        </div>
                    </div>

                    <div className="finance-card exp-man crm-clay">
                        <h3 className="card-title">{data.expenseTracking.title}</h3>
                        <ul className="feature-list">
                            {data.expenseTracking.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                        <div className="balance-visual">
                            <div className="balance-bar income">
                                <div className="bar-fill" style={{ height: '80%' }} />
                                <span>Income</span>
                            </div>
                            <div className="balance-bar expense">
                                <div className="bar-fill" style={{ height: '30%' }} />
                                <span>Expense</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
