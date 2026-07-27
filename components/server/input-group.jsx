import { CrossIcon } from "."
import { InputCheck } from "../client/input-check"


const classGroup = "relative my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-5 pt-10 rounded-md shadow-sm font-semibold text-xl w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100"
const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    bg-background text-xl text-current/50 dark:text-zinc-100 shadow-xs shadow-current/30 pointer-events-none px-2 rounded-full
                    `


export const InputGroup = ({
    label,
    name,
    values,
    disabled,
    icon = <CrossIcon />,
    radio
}) => (
    <fieldset className={classGroup}>
        <legend className={classLabel}>{label}</legend>
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
    </fieldset>
)



