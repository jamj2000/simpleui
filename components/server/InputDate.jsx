/*
| Tipo           | Valor              |
| -------------- | ------------------ |
| date           | `2026-08-05`       |
| datetime-local | `2026-08-05T14:30` |
| time           | `14:30`            |
| month          | `2026-08`          |
| week           | `2026-W32`         |
*/

const classInput = `peer disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all
                     
                    `



const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full peer-disabled:text-zinc-400 `



export const InputDate = ({ type = "date", label = "Fecha", name, value, disabled, min, max, step, ...props }) => {
    return (
        <div className="relative">
            <input
                key={value}
                type={type}
                name={name}
                defaultValue={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                className={`${classInput}`}
                {...props}
            />
            <label htmlFor={name} className={classLabel}>
                {label}
            </label>
        </div>
    )
}

