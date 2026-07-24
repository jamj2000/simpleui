// Se abre al hacer hover en el title y se cierra al dejar de hacer hover en el title (title no es clickeable)
export const Popover = ({ title, children }) => (
    <div className="group relative w-fit">
        {title}
        <div className="z-10 absolute top-full left-0 invisible group-hover:visible rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-slate-700 p-4 shadow-xl">
            {children}
        </div>
    </div>
)