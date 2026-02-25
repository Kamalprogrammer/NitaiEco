import CrmIcon from './CrmAnimatedSVGs';

/* ============================================
   Governance & RBAC Split Cards + Workflow
   ============================================ */
export default function GovernanceSection({ data }) {
    return (
        <section className="crm-governance" id="governance">
            <div className="crm-container">
                <div className="crm-section-head">
                    <span className="crm-tag">{data.sectionTag}</span>
                    <h2 className="crm-section-title">{data.title}</h2>
                    <p className="crm-section-sub">{data.subtitle}</p>
                </div>

                {/* RBAC Split Cards */}
                <div className="governance-cards">
                    {data.roles.map((role) => (
                        <div
                            key={role.id}
                            className="governance-card crm-glass"
                            style={{ '--role-accent': role.accent }}
                        >
                            <div className="governance-card-head">
                                <div className="governance-card-icon">
                                    <CrmIcon name={role.id === 'staff' ? 'users' : 'shield'} size={36} />
                                </div>
                                <div>
                                    <h3 className="governance-card-title">{role.title}</h3>
                                    <span className="governance-card-subtitle">{role.subtitle}</span>
                                </div>
                            </div>

                            <div className="governance-permissions">
                                {role.permissions.map((perm, i) => (
                                    <div
                                        key={i}
                                        className={`governance-perm ${perm.allowed ? 'perm-allowed' : 'perm-denied'}`}
                                        style={{ animationDelay: `${i * 0.08}s` }}
                                    >
                                        <span className="perm-icon">{perm.allowed ? '✓' : '✗'}</span>
                                        <span>{perm.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="governance-card-shine" />
                        </div>
                    ))}
                </div>

                {/* System Workflow Mini Diagram */}
                <div className="governance-workflow crm-clay">
                    <h4 className="governance-workflow-title">System Workflow</h4>
                    <div className="governance-flow-steps">
                        {data.workflow.map((step, i) => (
                            <div key={i} className="governance-flow-step">
                                <div className="gflow-node">
                                    <span>{step}</span>
                                </div>
                                {i < data.workflow.length - 1 && (
                                    <div className="gflow-arrow">
                                        <svg width="32" height="12" viewBox="0 0 32 12">
                                            <line x1="0" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="svg-dash-anim" />
                                            <polygon points="24,2 32,6 24,10" fill="currentColor" opacity="0.5" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer line */}
                <p className="governance-footer-line">{data.footerLine}</p>
            </div>
        </section>
    );
}
