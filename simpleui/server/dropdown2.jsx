// Similar a Dropdown pero no pierde el foco al hacer click fuera (toggle)
export const Dropdown2 = ({ title, children, className = "" }) => (
    <details className="group relative w-fit">
        <summary
            className={`flex cursor-pointer list-none items-center gap-2 ${className}`}
        >
            <span className="inline-flex w-4 justify-center font-mono">
                <span className="transition-transform group-open:rotate-45">+</span>
            </span>
            <span>{title}</span>
        </summary>

        <div className="absolute top-full left-0 z-10 mt-1 min-w-max rounded-lg border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-zinc-800">
            {children}
        </div>
    </details>
)
