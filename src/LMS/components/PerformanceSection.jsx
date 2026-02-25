import { useState, useEffect, useRef } from 'react';
import AnimatedIcon from './AnimatedSVGs';

/* ============================================
   Performance Section — AI Analysis + Heatmap
   ============================================ */
export default function PerformanceSection({ data }) {
    const [heatmapVisible, setHeatmapVisible] = useState(false);
    const heatmapRef = useRef(null);

    useEffect(() => {
        const el = heatmapRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeatmapVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const getHeatColor = (score) => {
        if (score >= 85) return 'var(--accent-emerald)';
        if (score >= 70) return 'var(--accent-cyan)';
        if (score >= 55) return '#F59E0B';
        return '#EF4444';
    };

    const getHeatOpacity = (score) => {
        return 0.3 + (score / 100) * 0.7;
    };

    return (
        <section className="performance-section" id="performance">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">{data.sectionTag}</span>
                    <h2 className="section-title">{data.title}</h2>
                    <p className="section-subtitle">{data.subtitle}</p>
                </div>

                <div className="performance-grid">
                    {/* Left — Student & Teacher Features */}
                    <div className="performance-features">
                        <div className="perf-feature-group">
                            <h3 className="perf-group-title">
                                <AnimatedIcon name="graduation" size={24} />
                                For Students
                            </h3>
                            {data.studentFeatures.map((f, i) => (
                                <div key={i} className="perf-feature-card clay-card" style={{ animationDelay: `${i * 0.1}s` }}>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="perf-feature-group">
                            <h3 className="perf-group-title">
                                <AnimatedIcon name="users" size={24} />
                                For Teachers
                            </h3>
                            {data.teacherFeatures.map((f, i) => (
                                <div key={i} className="perf-feature-card clay-card" style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Heatmap Visualization */}
                    <div className="performance-heatmap-wrap" ref={heatmapRef}>
                        <div className="heatmap-card clay-card">
                            <div className="heatmap-header">
                                <AnimatedIcon name="heatmap" size={28} />
                                <h3>Topic-Wise Performance Heatmap</h3>
                            </div>

                            {/* Column Labels */}
                            <div className="heatmap-grid">
                                <div className="heatmap-corner" />
                                {data.heatmapLabels.map((label, i) => (
                                    <div key={i} className="heatmap-col-label">{label}</div>
                                ))}

                                {/* Rows */}
                                {data.heatmapTopics.map((topic, ri) => (
                                    <>
                                        <div key={`label-${ri}`} className="heatmap-row-label">{topic.topic}</div>
                                        {topic.scores.map((score, ci) => (
                                            <div
                                                key={`${ri}-${ci}`}
                                                className={`heatmap-cell ${heatmapVisible ? 'visible' : ''}`}
                                                style={{
                                                    backgroundColor: getHeatColor(score),
                                                    opacity: heatmapVisible ? getHeatOpacity(score) : 0,
                                                    transitionDelay: `${(ri * 5 + ci) * 0.06}s`,
                                                }}
                                                title={`${topic.topic}: ${score}%`}
                                            >
                                                <span className="heatmap-score">{score}</span>
                                            </div>
                                        ))}
                                    </>
                                ))}
                            </div>

                            <div className="heatmap-legend">
                                <span className="legend-item"><span className="legend-dot" style={{ background: '#EF4444' }} /> Weak (&lt;55%)</span>
                                <span className="legend-item"><span className="legend-dot" style={{ background: '#F59E0B' }} /> Average (55-70%)</span>
                                <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-cyan)' }} /> Good (70-85%)</span>
                                <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--accent-emerald)' }} /> Excellent (&gt;85%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
