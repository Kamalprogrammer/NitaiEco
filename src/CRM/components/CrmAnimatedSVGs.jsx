/* ============================================
   CRM Animated SVG Icon Components
   ============================================ */

export function LeadIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <path d="M14 52c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" className="svg-pulse" />
            <line x1="50" y1="10" x2="50" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="46" y1="14" x2="54" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        </svg>
    );
}

export function PipelineIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="12" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" />
            <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="52" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" style={{ animationDelay: '0.6s' }} />
            <line x1="18" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="38" y1="16" x2="46" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <path d="M12 22v8l20 14 20-14v-8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="svg-pulse" style={{ animationDelay: '0.9s' }} />
            <path d="M28 48l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
    );
}

export function AdmissionIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="10" y="8" width="44" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <line x1="18" y1="20" x2="46" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="18" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
            <line x1="18" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <circle cx="32" cy="48" r="6" fill="currentColor" opacity="0.15" className="svg-glow" />
            <path d="M28 48l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function GraduationIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <polygon points="32,8 4,24 32,40 60,24" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <line x1="52" y1="28" x2="52" y2="48" stroke="currentColor" strokeWidth="2" />
            <path d="M16 28v14c0 4 8 8 16 8s16-4 16-8V28" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="52" cy="48" r="3" fill="currentColor" opacity="0.4" className="svg-pulse" />
        </svg>
    );
}

export function WebsiteIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="6" y="10" width="52" height="38" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <line x1="6" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <circle cx="14" cy="15" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="22" cy="15" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="30" cy="15" r="2" fill="currentColor" opacity="0.3" />
            <rect x="14" y="26" width="20" height="4" rx="1" fill="currentColor" opacity="0.2" />
            <rect x="14" y="34" width="14" height="4" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="40" y="26" width="12" height="12" rx="2" fill="currentColor" opacity="0.1" className="svg-pulse" />
            <path d="M32 52l-6 6h12l-6-6z" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

export function WalkinIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M24 26h16v8l-4 20h-3l-2-14-2 14h-3l-4-20v-8z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <path d="M20 30l-6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 30l6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 58h40" stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeDasharray="4 4" />
        </svg>
    );
}

export function CsvIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <path d="M16 8h22l14 14v34c0 2-2 4-4 4H16c-2 0-4-2-4-4V12c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <path d="M38 8v14h14" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="18" y="30" width="28" height="4" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="18" y="38" width="28" height="4" rx="1" fill="currentColor" opacity="0.2" className="svg-pulse" />
            <rect x="18" y="46" width="28" height="4" rx="1" fill="currentColor" opacity="0.15" />
            <line x1="30" y1="28" x2="30" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        </svg>
    );
}

export function ValidationIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <polyline points="20,32 28,42 46,22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" className="svg-draw" />
            <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.15" className="svg-pulse" />
            <circle cx="52" cy="12" r="3" fill="currentColor" opacity="0.1" className="svg-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="52" cy="52" r="4" fill="currentColor" opacity="0.15" className="svg-pulse" style={{ animationDelay: '1s' }} />
        </svg>
    );
}

export function ToggleIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="8" y="20" width="48" height="24" rx="12" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <circle cx="44" cy="32" r="8" fill="currentColor" opacity="0.3" className="svg-pulse" />
            <circle cx="44" cy="32" r="4" fill="currentColor" opacity="0.6" />
        </svg>
    );
}

export function LockIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="12" y="28" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <path d="M20 28V20c0-6 6-12 12-12s12 6 12 12v8" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="32" cy="42" r="4" fill="currentColor" opacity="0.5" className="svg-pulse" />
            <line x1="32" y1="46" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

export function MigrationIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="4" y="16" width="22" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <rect x="38" y="16" width="22" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" style={{ animationDelay: '0.3s' }} />
            <line x1="10" y1="26" x2="20" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="10" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <line x1="44" y1="26" x2="54" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="44" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <path d="M26 32h12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" className="svg-dash-anim" />
            <polygon points="36,28 42,32 36,36" fill="currentColor" opacity="0.5" className="svg-pulse" />
        </svg>
    );
}

export function CredentialsIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="8" y="14" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <circle cx="24" cy="30" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M16 44c0-4 4-8 8-8s8 4 8 8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            <line x1="38" y1="26" x2="50" y2="26" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <line x1="38" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <rect x="38" y="38" width="12" height="4" rx="2" fill="currentColor" opacity="0.15" className="svg-pulse" />
        </svg>
    );
}

export function EnrollmentIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <rect x="10" y="8" width="44" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <line x1="10" y1="18" x2="54" y2="18" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <text x="18" y="14" fill="currentColor" fontSize="8" fontWeight="700" opacity="0.4">ID</text>
            <line x1="18" y1="28" x2="46" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <line x1="18" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <line x1="18" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            <rect x="38" y="22" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" className="svg-pulse" />
        </svg>
    );
}

export function FolderIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <path d="M8 18h18l6-6h24c2 0 4 2 4 4v36c0 2-2 4-4 4H8c-2 0-4-2-4-4V22c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <line x1="4" y1="26" x2="60" y2="26" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <rect x="20" y="34" width="24" height="4" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="20" y="42" width="16" height="4" rx="1" fill="currentColor" opacity="0.1" />
        </svg>
    );
}

export function TrackingIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
            <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.5" className="svg-pulse" />
            <line x1="32" y1="8" x2="32" y2="16" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="32" y1="48" x2="32" y2="56" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="8" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="48" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        </svg>
    );
}

export function ShieldIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <path d="M32 6L10 18v14c0 14 10 24 22 28 12-4 22-14 22-28V18L32 6z" stroke="currentColor" strokeWidth="2" fill="none" className="svg-stroke-anim" />
            <path d="M24 32l6 6 12-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="svg-draw" />
        </svg>
    );
}

export function UsersIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`crm-svg ${className}`}>
            <circle cx="22" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M6 48c0-8 8-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="44" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M44 30c6 0 12 4 12 10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
    );
}

// Icon mapper
const iconMap = {
    lead: LeadIcon,
    pipeline: PipelineIcon,
    admission: AdmissionIcon,
    graduation: GraduationIcon,
    website: WebsiteIcon,
    walkin: WalkinIcon,
    csv: CsvIcon,
    validation: ValidationIcon,
    toggle: ToggleIcon,
    lock: LockIcon,
    migration: MigrationIcon,
    credentials: CredentialsIcon,
    enrollment: EnrollmentIcon,
    folder: FolderIcon,
    tracking: TrackingIcon,
    shield: ShieldIcon,
    users: UsersIcon,
};

export function CrmIcon({ name, size = 48, className = '' }) {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
}

export default CrmIcon;
