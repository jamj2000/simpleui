// Estilos para Input
const classInput = `peer disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all
                    w-full resize-none scrollbar-thin scrollbar-thumb-current/20
                   `

const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full peer-disabled:text-zinc-400 `


export const InputArea = ({ label, name, value, disabled, ...props }) => (
    <div className="relative text-zinc-800 dark:text-zinc-100">
        <textarea
            key={value}
            id={name}
            name={name}
            placeholder=""
            defaultValue={value}
            disabled={disabled}
            className={classInput}
            {...props}
        />
        <label htmlFor={name} className={classLabel}>
            {label}
        </label>
    </div >
)


