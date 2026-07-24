// Usar dentro de componentes tipo 'use client'
export const Button = ({ onClick, color = "bg-indigo-500 text-white", disabled = false, wide = false, children }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${color} ${wide ? "w-full" : "w-fit"} flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer hover:opacity-80 shadow-md transition-all duration-200 disabled:cursor-wait disabled:bg-slate-500`
        }
    >
        {children}
    </button>
)
