// Estilos para Input
const classInput = `peer disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all`
const classLabel = `absolute left-3.75 top-1/2 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 peer-disabled:text-zinc-400 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none px-2 rounded-full
                    transition-all duration-300

                    peer-focus:top-0 
                    peer-focus:text-sm 
                    @md:peer-focus:text-lg

                    peer-disabled:top-0
                    peer-disabled:text-sm            
                    @md:peer-disabled:text-lg


                    peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-xl
                    @md:peer-placeholder-shown:text-2xl
           
                    peer-[:not(:placeholder-shown)]:top-0
                    peer-[:not(:placeholder-shown)]:text-sm
                    @md:peer-[:not(:placeholder-shown)]:text-lg
                    `


export const InputText = ({ label, name, value, disabled, ...props }) => (
    <div className="relative">
        <input
            key={value}
            type="text"
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


