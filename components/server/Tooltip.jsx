
export const Tooltip = ({ title, children }) => (
    <div className="relative group">
        {children}
        <div className="absolute top-0 left-0 text-xs invisible group-hover:visible backdrop-blur-xs bg-olive-100 dark:bg-olive-800 p-4 border border-slate-300 dark:border-slate-600 shadow-lg rounded-md">
            {title}
        </div>
    </div>
)
