'use client'

import { useEffect, useState } from "react";




const classInput = `peer disabled:text-zinc-400 placeholder-zinc-400
                    text-zinc-800 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800                     
                    font-semibold text-xl  py-4 rounded-xl border border-zinc-200 dark:border-zinc-700 
                    focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all
                   `

const classLabel = `absolute left-3.75 top-0 -translate-y-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full peer-disabled:text-zinc-400 `


const classOutput = `absolute -top-3 -translate-x-1/2
                    text-current bg-zinc-50 dark:bg-zinc-800 
                    text-sm @md:text-lg shadow-xs shadow-current/30 pointer-events-none 
                    px-2 rounded-full peer-disabled:text-zinc-400 `


export const InputRange = ({
    label = "Rango",
    name,
    value = 40,
    disabled,
    min,
    max,
    step,
    ...props
}) => {

    const [val, setVal] = useState(value ?? min ?? 0);
    const percent = ((val - min) / (max - min)) * 100;

    useEffect(() => {
        setVal(value ?? min ?? 0);
    }, [value, min]);

    return (
        <div className="flex gap-2 items-center">

            <div className="relative flex-1 text-zinc-800 dark:text-zinc-100">
                <label className="absolute -top-2 left-0 text-sm @md:text-lg">{min}</label>
                <label className="absolute -top-2 right-0 text-sm @md:text-lg">{max}</label>
                <input
                    id={name}
                    type="range"
                    name={name}
                    value={val}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    onInput={(e) => setVal(Number(e.currentTarget.value))}
                    className={`${classInput} w-full`}
                    {...props}
                />

                <label htmlFor={name} className={classLabel}>
                    {label}
                </label>

                {/* <output htmlFor={name} className={classOutput}>
                    {val}
                </output> */}
                <output
                    className={`${classOutput}`}
                    style={{
                        left: `calc(${percent}% + (${8 - percent * 0.15}px))`
                    }}
                >
                    {val}
                </output>
            </div>

        </div>
    )
}
