/* ============================================
   Animated SVG Icon Components
   Reusable across all LMS sections
   ============================================ */

export function BrainIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M32 8C20 8 16 16 16 24c0 4 2 8 4 10l-2 14c0 2 2 4 4 4h20c2 0 4-2 4-4l-2-14c2-2 4-6 4-10 0-8-4-16-16-16z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <path d="M24 24c0-4 4-8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <circle cx="26" cy="28" r="2" fill="currentColor" opacity="0.4" className="svg-pulse" />
            <circle cx="38" cy="28" r="2" fill="currentColor" opacity="0.4" className="svg-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="32" cy="36" r="2" fill="currentColor" opacity="0.4" className="svg-pulse" style={{ animationDelay: '1s' }} />
            <line x1="26" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="38" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <line x1="26" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
    );
}

export function ShieldIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M32 6L10 18v14c0 14 10 24 22 28 12-4 22-14 22-28V18L32 6z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <path d="M24 32l6 6 12-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-draw" />
            <circle cx="32" cy="20" r="3" fill="currentColor" opacity="0.2" className="svg-pulse" />
        </svg>
    );
}

export function UsersIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <path d="M8 48c0-8 8-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="44" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" className="svg-stroke-animate" style={{ animationDelay: '0.3s' }} />
            <path d="M44 30c6 0 12 4 12 10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
    );
}

export function GraduationIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <polygon points="32,8 4,24 32,40 60,24" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <line x1="52" y1="28" x2="52" y2="48" stroke="currentColor" strokeWidth="2" />
            <path d="M16 28v14c0 4 8 8 16 8s16-4 16-8V28" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="52" cy="48" r="3" fill="currentColor" opacity="0.4" className="svg-pulse" />
        </svg>
    );
}

export function UploadIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M44 44h6c6 0 10-4 10-10s-4-10-10-10h-1C47 14 40 8 32 8S17 14 15 24h-1C8 24 4 28 4 34s4 10 10 10h6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <line x1="32" y1="56" x2="32" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="svg-upload-arrow" />
            <polyline points="24,40 32,32 40,40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" className="svg-upload-arrow" />
        </svg>
    );
}

export function DocumentIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M16 8h22l14 14v34c0 2-2 4-4 4H16c-2 0-4-2-4-4V12c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <path d="M38 8v14h14" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <line x1="20" y1="40" x2="36" y2="40" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <line x1="20" y1="48" x2="40" y2="48" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        </svg>
    );
}

export function CalendarIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <rect x="8" y="12" width="48" height="44" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <line x1="8" y1="24" x2="56" y2="24" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="8" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="44" y1="8" x2="44" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="16" y="30" width="8" height="6" rx="1" fill="currentColor" opacity="0.3" className="svg-pulse" />
            <rect x="28" y="30" width="8" height="6" rx="1" fill="currentColor" opacity="0.4" className="svg-pulse" style={{ animationDelay: '0.3s' }} />
            <rect x="40" y="30" width="8" height="6" rx="1" fill="currentColor" opacity="0.2" className="svg-pulse" style={{ animationDelay: '0.6s' }} />
            <rect x="16" y="42" width="8" height="6" rx="1" fill="currentColor" opacity="0.2" />
            <rect x="28" y="42" width="8" height="6" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

export function ChartIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <rect x="8" y="40" width="10" height="18" rx="2" fill="currentColor" opacity="0.3" className="svg-bar" />
            <rect x="22" y="28" width="10" height="30" rx="2" fill="currentColor" opacity="0.5" className="svg-bar" style={{ animationDelay: '0.2s' }} />
            <rect x="36" y="16" width="10" height="42" rx="2" fill="currentColor" opacity="0.7" className="svg-bar" style={{ animationDelay: '0.4s' }} />
            <rect x="50" y="8" width="10" height="50" rx="2" fill="currentColor" opacity="0.9" className="svg-bar" style={{ animationDelay: '0.6s' }} />
            <line x1="4" y1="58" x2="62" y2="58" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        </svg>
    );
}

export function HeatmapIcon({ size = 48, className = '' }) {
    const cells = [
        [0.8, 0.4, 0.9], [0.3, 0.7, 0.5], [0.6, 0.2, 0.8]
    ];
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            {cells.map((row, ri) =>
                row.map((val, ci) => (
                    <rect
                        key={`${ri}-${ci}`}
                        x={10 + ci * 16}
                        y={10 + ri * 16}
                        width="14"
                        height="14"
                        rx="3"
                        fill="currentColor"
                        opacity={val}
                        className="svg-pulse"
                        style={{ animationDelay: `${(ri * 3 + ci) * 0.15}s` }}
                    />
                ))
            )}
        </svg>
    );
}

export function ChatIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M8 12h48v32c0 2-2 4-4 4H24l-12 8v-8h-4V12z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" rx="4" />
            <circle cx="22" cy="28" r="3" fill="currentColor" opacity="0.4" className="svg-pulse" />
            <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.4" className="svg-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="42" cy="28" r="3" fill="currentColor" opacity="0.4" className="svg-pulse" style={{ animationDelay: '0.6s' }} />
        </svg>
    );
}

export function RobotIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <rect x="14" y="20" width="36" height="32" rx="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <line x1="32" y1="12" x2="32" y2="20" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" />
            <circle cx="24" cy="34" r="4" fill="currentColor" opacity="0.5" className="svg-pulse" />
            <circle cx="40" cy="34" r="4" fill="currentColor" opacity="0.5" className="svg-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M26 44h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="8" y1="32" x2="14" y2="36" stroke="currentColor" strokeWidth="2" />
            <line x1="56" y1="32" x2="50" y2="36" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

export function LightbulbIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <path d="M32 6C22 6 14 14 14 24c0 6 3 12 8 15v5h20v-5c5-3 8-9 8-15 0-10-8-18-18-18z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <line x1="24" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="2" />
            <line x1="26" y1="56" x2="38" y2="56" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="24" r="6" fill="currentColor" opacity="0.15" className="svg-glow" />
            <line x1="32" y1="18" x2="32" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="26" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        </svg>
    );
}

export function ConnectionIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <circle cx="12" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" />
            <circle cx="52" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="52" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" style={{ animationDelay: '0.6s' }} />
            <line x1="20" y1="28" x2="46" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" className="svg-connection-line" />
            <line x1="20" y1="36" x2="46" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.4" className="svg-connection-line" style={{ animationDelay: '0.3s' }} />
            <circle cx="32" cy="24" r="2" fill="currentColor" opacity="0.6" className="svg-dot-travel" />
            <circle cx="32" cy="40" r="2" fill="currentColor" opacity="0.6" className="svg-dot-travel" style={{ animationDelay: '0.5s' }} />
        </svg>
    );
}

export function CheckmarkIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <polyline points="20,32 28,42 46,22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" className="svg-draw" />
        </svg>
    );
}

export function LockIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`animated-svg ${className}`}>
            <rect x="12" y="28" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-animate" />
            <path d="M20 28V20c0-6 6-12 12-12s12 6 12 12v8" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="32" cy="42" r="4" fill="currentColor" opacity="0.5" className="svg-pulse" />
            <line x1="32" y1="46" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

// Icon mapper for data-driven rendering
const iconMap = {
    brain: BrainIcon,
    shield: ShieldIcon,
    users: UsersIcon,
    graduation: GraduationIcon,
    upload: UploadIcon,
    document: DocumentIcon,
    calendar: CalendarIcon,
    chart: ChartIcon,
    heatmap: HeatmapIcon,
    chat: ChatIcon,
    robot: RobotIcon,
    lightbulb: LightbulbIcon,
    connection: ConnectionIcon,
    checkmark: CheckmarkIcon,
    lock: LockIcon,
};

export function AnimatedIcon({ name, size = 48, className = '' }) {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
}

export default AnimatedIcon;
