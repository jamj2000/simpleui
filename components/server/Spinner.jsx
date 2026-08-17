
// Formas para spinners:  https://www.svgrepo.com/vectors/spinner +  https://transform.tools 
const spinners = [
    ({ size, color }) => <svg viewBox="0 0 50 50" width={size * 4} height={size * 4} className={color}>
        <path fill="currentColor" fillRule="nonzero" d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z" />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="-0.5 0 24 24" width={size * 4} height={size * 4} className={color}>
        <path fill="currentColor" d="M23.314 8.518V.686l-2.84 2.84A11.962 11.962 0 0011.981.004c-6.627 0-12 5.373-12 12s5.373 12 12 12c4.424 0 8.289-2.394 10.37-5.958l.031-.057-2.662-1.536c-1.57 2.695-4.447 4.478-7.739 4.478a8.927 8.927 0 116.32-15.232l-2.82 2.82h7.834z" />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 14 14" width={size * 4} height={size * 4} className={color}>
        <g fill="none" fillRule="evenodd">
            <circle cx={7} cy={7} r={6} stroke="currentColor" strokeOpacity={0.2} strokeWidth={2} />
            <path fill="currentColor" fillOpacity={0.7} fillRule="nonzero" d="M7 0a7 7 0 017 7h-2a5 5 0 00-5-5V0z" />
        </g>
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 64 64" width={size * 4} height={size * 4} className={color}>
        <circle cx={51.015} cy={32} r={4.985} fill="currentColor" opacity={0.1} />
        <circle cx={45.445} cy={45.445} r={4.985} fill="currentColor" opacity={0.25} />
        <circle cx={32} cy={51.015} r={4.985} fill="currentColor" opacity={0.4} />
        <circle cx={18.555} cy={45.445} r={4.985} fill="currentColor" opacity={0.55} />
        <circle cx={12.985} cy={32} r={4.985} fill="currentColor" opacity={0.7} />
        <circle cx={18.555} cy={18.555} r={4.985} fill="currentColor" opacity={0.85} />
        <circle cx={32} cy={12.985} r={4.985} fill="currentColor" opacity={1} />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width={size * 4} height={size * 4} className={color}>
        <line x1="12" y1="3" x2="12" y2="6" opacity="0.12" />
        <line x1="16.5" y1="4.2" x2="15" y2="6.8" opacity="0.20" />
        <line x1="19.8" y1="7.5" x2="17.2" y2="9" opacity="0.28" />
        <line x1="21" y1="12" x2="18" y2="12" opacity="0.36" />
        <line x1="19.8" y1="16.5" x2="17.2" y2="15" opacity="0.44" />
        <line x1="16.5" y1="19.8" x2="15" y2="17.2" opacity="0.52" />
        <line x1="12" y1="21" x2="12" y2="18" opacity="0.60" />
        <line x1="7.5" y1="19.8" x2="9" y2="17.2" opacity="0.68" />
        <line x1="4.2" y1="16.5" x2="6.8" y2="15" opacity="0.76" />
        <line x1="3" y1="12" x2="6" y2="12" opacity="0.84" />
        <line x1="4.2" y1="7.5" x2="6.8" y2="9" opacity="0.92" />
        <line x1="7.5" y1="4.2" x2="9" y2="6.8" opacity="1.0" />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 40 40" fill="none" width={size * 4} height={size * 4} className={color}>
        <rect x="0.5" y="0.5" width="39" height="39" stroke="currentColor" strokeWidth="4" />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 40 40" fill="none" width={size * 4} height={size * 4} className={color}>
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" strokeDasharray="28.3 28.3" strokeDashoffset="14.15" />
    </svg>
    ,
    ({ size, color }) => <svg viewBox="0 0 40 40" fill="none" width={size * 4} height={size * 4} className={color}>
        <path d="M20 2 A18 18 0 0 1 38 20" stroke="#16A34A" strokeWidth="4" fill="none" />
        <path d="M38 20 A18 18 0 0 1 20 38" stroke="#CA8A04" strokeWidth="4" fill="none" />
        <path d="M20 38 A18 18 0 0 1 2 20" stroke="#DC2626" strokeWidth="4" fill="none" />
        <path d="M2 20 A18 18 0 0 1 20 2" stroke="#2563EB" strokeWidth="4" fill="none" />
    </svg>
    ,
]



export const Spinner = ({ type = 0, size = 10, color = "text-black dark:text-white" }) => (
    <div className={`${color} w-fit inline-grid animate-spin`}>
        {spinners[type]?.({ size, color })}
    </div>
)
