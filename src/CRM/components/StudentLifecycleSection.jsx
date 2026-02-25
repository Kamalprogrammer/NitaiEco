import CrmIcon from './CrmAnimatedSVGs';

/* ============================================
   Student Lifecycle — 4 Blocks + Timeline
   ============================================ */
export default function StudentLifecycleSection({ data }) {
    return (
        <section className="crm-lifecycle" id="lifecycle">
            <div className="crm-container">
                <div className="crm-section-head">
                    <span className="crm-tag">{data.sectionTag}</span>
                    <h2 className="crm-section-title">{data.title}</h2>
                    <p className="crm-section-sub">{data.subtitle}</p>
                </div>

                {/* 4 Feature Blocks */}
                <div className="lifecycle-blocks">
                    {data.blocks.map((block, i) => (
                        <div
                            key={i}
                            className="lifecycle-block crm-clay"
                            style={{ '--block-accent': block.accent, animationDelay: `${i * 0.12}s` }}
                        >
                            <div className="lifecycle-block-icon">
                                <CrmIcon name={block.icon} size={40} />
                            </div>
                            <h3 className="lifecycle-block-title">{block.title}</h3>
                            <p className="lifecycle-block-desc">{block.desc}</p>
                            <div className="lifecycle-block-shine" />
                        </div>
                    ))}
                </div>

                {/* Lifecycle Timeline */}
                <div className="lifecycle-timeline">
                    <div className="timeline-track">
                        <div className="timeline-progress" />
                    </div>
                    <div className="timeline-milestones">
                        {data.timeline.map((milestone, i) => (
                            <div
                                key={i}
                                className="timeline-milestone"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                <div className="timeline-dot" />
                                <span className="timeline-label">{milestone}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
