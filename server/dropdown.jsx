// Se abre al hacer click en el title y se cierra al perder el focus (click fuera)
export const Dropdown = ({ title, children, className = "" }) => (
    <div className="group relative w-fit">
        <div tabIndex={0} role="button" className={`cursor-pointer ${className}`}>
            {title}
        </div>

        <div tabIndex={-1} className="z-10 absolute top-full left-0 mt-1 min-w-max hidden focus-within:block group-focus-within:block rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl">
            {children}
        </div>
    </div>
)
