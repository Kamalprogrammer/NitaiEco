import React from 'react';

/* ============================================
   ERP SYSTEM ICONS — Animated SVG Library
   ============================================ */

export function AcademicIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M12 3L2 8L12 13L22 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-draw" d="M22 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-stroke-anim" d="M6 10.5V17C6 17.55 7.5 19 12 19C16.5 19 18 17.55 18 17V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle className="svg-glow" cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
        </svg>
    );
}

export function FinanceIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M17 5H9.5C8.39543 5 7.5 5.89543 7.5 7C7.5 8.10457 8.39543 9 9.5 9H14.5C15.6046 9 16.5 9.89543 16.5 11C16.5 12.1046 15.6046 13 14.5 13H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M16.5 13H14.5C13.3954 13 12.5 13.8954 12.5 15C12.5 16.1046 13.3954 17 14.5 17H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle className="svg-pulse" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
    );
}

export function LibraryIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-draw" d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function ReportsIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-draw" d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle className="svg-pulse" cx="21" cy="10" r="2" fill="currentColor" />
        </svg>
    );
}

export function CalendarIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <rect className="svg-stroke-anim" x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path className="svg-draw" d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function ClassIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M3 7H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-draw" d="M3 7L12 3L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="svg-draw" d="M12 11V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function SectionIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle className="svg-pulse" cx="4" cy="6" r="1.5" fill="currentColor" />
            <circle className="svg-pulse" cx="4" cy="12" r="1.5" fill="currentColor" />
            <circle className="svg-pulse" cx="4" cy="18" r="1.5" fill="currentColor" />
        </svg>
    );
}

export function MappingIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <path className="svg-stroke-anim" d="M8 3H5C3.89543 3 3 3.89543 3 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M16 3H19C20.1046 3 21 3.89543 21 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-stroke-anim" d="M21 16V19C21 20.1046 20.1046 21 19 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function RouteIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path className="svg-draw" d="M8.5 16.5L15.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
    );
}

export function BusIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <rect className="svg-stroke-anim" x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path className="svg-draw" d="M7 18V20" stroke="currentColor" strokeWidth="1.5" />
            <path className="svg-draw" d="M17 18V20" stroke="currentColor" strokeWidth="1.5" />
            <path className="svg-draw" d="M4 10H20" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="14" r="1" fill="currentColor" />
        </svg>
    );
}

export function UserMappingIcon({ size = 48, className = '' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`erp-svg ${className}`}>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 21V19C6 17.8954 6.89543 17 8 17H16C17.1046 17 18 17.8954 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path className="svg-draw" d="M12 12V17" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
    );
}

const iconMap = {
    academic: AcademicIcon,
    finance: FinanceIcon,
    library: LibraryIcon,
    reports: ReportsIcon,
    calendar: CalendarIcon,
    class: ClassIcon,
    section: SectionIcon,
    mapping: MappingIcon,
    route: RouteIcon,
    bus: BusIcon,
    mapping_user: UserMappingIcon
};

export function ErpIcon({ name, size = 48, className = '' }) {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
}

export default ErpIcon;
