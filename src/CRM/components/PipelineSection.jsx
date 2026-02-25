import { useRef, useState, useEffect } from 'react';

/* ============================================
   Pipeline Section — Lead Table + Pipeline Flow
   ============================================ */
export default function PipelineSection({ data }) {
    const [rowsVisible, setRowsVisible] = useState(false);
    const tableRef = useRef(null);

    useEffect(() => {
        const el = tableRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRowsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const statusColors = {
        'New Lead': '#3B82F6',
        'Contacted': '#8B5CF6',
        'Follow-up': '#F59E0B',
        'Ready': '#06B6D4',
        'Invalid': '#EF4444',
    };

    return (
        <section className="crm-pipeline" id="pipeline">
            <div className="crm-container">
                <div className="crm-section-head">
                    <span className="crm-tag">{data.sectionTag}</span>
                    <h2 className="crm-section-title">{data.title}</h2>
                    <p className="crm-section-sub">{data.subtitle}</p>
                </div>

                <div className="pipeline-layout">
                    {/* Left — Lead Repository Table */}
                    <div className="pipeline-table-wrap crm-clay" ref={tableRef}>
                        <div className="pipeline-table-header">
                            <h3>Lead Repository</h3>
                            <span className="pipeline-count">{data.tableRows.length} leads</span>
                        </div>
                        <div className="pipeline-table">
                            <div className="pt-header-row">
                                {data.tableHeaders.map((h) => (
                                    <div key={h} className="pt-cell pt-th">{h}</div>
                                ))}
                            </div>
                            {data.tableRows.map((row, i) => (
                                <div
                                    key={i}
                                    className={`pt-row ${rowsVisible ? 'pt-row-visible' : ''}`}
                                    style={{ transitionDelay: `${i * 0.1}s` }}
                                >
                                    <div className="pt-cell pt-name">{row.name}</div>
                                    <div className="pt-cell pt-contact">{row.contact}</div>
                                    <div className="pt-cell">{row.course}</div>
                                    <div className="pt-cell pt-source">{row.source}</div>
                                    <div className="pt-cell">{row.counselor}</div>
                                    <div className="pt-cell">
                                        <span
                                            className="pt-status-pill"
                                            style={{ '--pill-color': statusColors[row.status] || '#94A3B8' }}
                                        >
                                            {row.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Vertical Pipeline Flow */}
                    <div className="pipeline-flow">
                        <h3 className="pipeline-flow-title">Status Workflow</h3>
                        <div className="pipeline-stages">
                            {data.pipelineStages.map((stage, i) => (
                                <div key={i} className="pipeline-stage" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className="pipeline-stage-dot" style={{ background: stage.color, boxShadow: `0 0 16px ${stage.color}40` }} />
                                    {i < data.pipelineStages.length - 1 && (
                                        <div className="pipeline-stage-line">
                                            <div className="pipeline-travel-dot" style={{ background: stage.color }} />
                                        </div>
                                    )}
                                    <div className="pipeline-stage-info">
                                        <span className="pipeline-stage-label" style={{ color: stage.color }}>{stage.label}</span>
                                        <span className="pipeline-stage-desc">{stage.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature tags */}
                        <div className="pipeline-tags">
                            {data.features.map((f, i) => (
                                <span key={i} className="pipeline-tag">
                                    <span className="pipeline-tag-dot" />
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
