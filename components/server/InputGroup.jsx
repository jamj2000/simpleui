import { InputCheck } from "../client/InputCheck"


const classGroup = "relative @container gap-2 p-5 pt-10 rounded-md shadow-sm text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100"
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                     text-sm md:text-lg text-current/50 dark:text-zinc-100 shadow-xs shadow-current/30 pointer-events-none px-2 rounded-full
                    `


export const InputGroup = ({
    label,
    name,
    values,
    disabled,
    icon,
    radio
}) => (
    <fieldset className={classGroup}>
        <legend className={classLabel}>{label}</legend>
        <div className="grid @sm:grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4">
            {values?.map(([value, isChecked]) => (
                <InputCheck
                    radio={radio}
                    key={value}
                    name={name}
                    value={value}
                    defaultChecked={isChecked}
                    disabled={disabled}
                    icon={icon}
                />
            ))}
        </div>
    </fieldset>
)



