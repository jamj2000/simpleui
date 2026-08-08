import { InputCheck } from "./InputCheck"


const classGroup = `relative gap-2 p-5 pt-10 rounded-md shadow-sm 
                    text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100
                    `
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full
                    `


export const InputGroup = ({
    label,
    name,
    options,
    disabled,
    icon,
    multiple
}) => (
    <fieldset className={classGroup}>
        <legend className={`${classLabel} ${disabled ? "text-zinc-400" : ""}`}>{label}</legend>
        {/* <div className="grid  @lg:grid-cols-2 @xl:grid-cols-3 @2xl:grid-cols-4"> */}
        <div className="columns-md @md:columns-2 @2xl:columns-3">
            {options?.map((option) => (
                <InputCheck
                    multiple={multiple}
                    key={option}
                    name={name}
                    label={option[0]}
                    value={option[1]}
                    checked={option[2]}
                    disabled={disabled}
                    icon={icon}
                />
            ))}
        </div>
    </fieldset>
)



